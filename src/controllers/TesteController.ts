// Imports
import { Request, Response } from 'express';
// Controller
class TesteController {
    // Função transferida do arquivo de rotas
    teste1 (req:Request, res:Response) {
        // Obtém route param
        const y = req.query.id;
        // Obtém query param
        const x = req.query.num;
        // Envia resposta ao cliente
        return res.send(`Resultado: ${Number(x) + Number(y)}`);
    }
}
export default TesteController;