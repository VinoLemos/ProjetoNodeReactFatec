// Importa componentes do express
import { Router, Request, Response } from 'express';
import TesteController from './controllers/TesteController';
import ValidaTeste1 from './middlewares/ValidaTeste1';
// Instancia Roteador
const Roteador = Router();

// Define rota tipo get que, para funcionar, deve ser requisitada conforme exemplo
// Exemplo de requisição: localhost:4000/teste/123?num=456
// Onde 123 e 456 podem ser substituídos por quaisquer valores
Roteador.get(
    // URL com parâmetro :id
    '/teste/',
    ValidaTeste1,
    // Aciona a função do TesteController
    new TesteController().teste1
);

export default Roteador;