// Importações
import express from 'express'
import Roteador from './routes'
import swaggerUI from 'swagger-ui-express'
import swaggerFile from '../swagger.json'
import swaggerAutogen from 'swagger-autogen'

// Instanciações
const app = express()
const outputFile = '../swagger.json'

// Configurar uso de Json
app.use(express.json())

// Configuração de uso das rotas
app.use(Roteador)
// configura porta e funçao executada na ativação
app.listen(4000, () => { console.log("Servidor Iniciado na porta 4000") })
swaggerAutogen(swaggerFile, Roteador)
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerFile))