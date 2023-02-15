// Importações
import express from 'express'
import Roteador from './routes'
import swaggerUI from 'swagger-ui-express'
import swaggerDocument from '../swagger.json'

// Instanciações
const app = express()

// Configurar uso de Json
app.use(express.json())

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))
// Configuração de uso das rotas
app.use(Roteador)
// configura porta e funçao executada na ativação
app.listen(4000, () => { console.log("Servidor Iniciado na porta 4000") })
