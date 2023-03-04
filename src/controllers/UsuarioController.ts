import { Request, Response } from 'express'
import { Prisma, PrismaClient } from '@prisma/client'
import { hash, compare } from 'bcryptjs'
import { Secret, sign } from 'jsonwebtoken'

class UsuarioController {
    async store(req: Request, res: Response) {
        const prisma = new PrismaClient();
        const { email, senha } = req.body;
        if (email == null || senha == null) {
            return res.status(400).json({ status: 'Email e senha devem ser fornecidos!' })
        }
        try {
            const novoUsuario = await prisma.usuario.create(
                {
                    data: {
                        email: email,
                        senha: await hash(senha, 8) // Criptografia: senha, 8: salto
                    },
                    select: {
                        email: true
                    }
                }
            )

            res.status(200).json(novoUsuario)
        } catch (error) {
            return res.status(400).json({ status: 'Email deve ser único!' })
        }
    }

    async autenticacao(req: Request, res: Response) {
        const prisma = new PrismaClient()
        const { email, senha } = req.body
        const consulta = await prisma.usuario.findFirst(
            {
                where: {
                    email: email
                }
            }
        )
        if (consulta == null) {
            return res.status(401).json({ status: 'Não autorizado' })
        }
        else {
            console.log(consulta.senha)
            console.log((await hash(senha, 8)).length)
            if (await compare(senha, consulta.senha)) { // Senhas batem
                // Gerar token
                const token = sign(
                    {
                        email: consulta.email
                    },
                    process.env.CHAVESEGURANCA as Secret,
                    {
                        subject: consulta.id.toString(),
                        expiresIn: '1d'
                    }
                )
                return res.status(200).json({ token: token })
            }
            else {
                return res.status(401).json({status: 'Não autorizado'})
            }
        }

    }
}

export default UsuarioController