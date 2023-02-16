// Importa componentes do express
import { Router, Request, Response } from 'express';
import ProdutoController from './controllers/ProdutoController';
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

Roteador.get('/produtos', new ProdutoController().index);
Roteador.get('/produtos/{id}', new ProdutoController().show);
Roteador.post('/produtos', new ProdutoController().store);
Roteador.put('/produtos/:id', new ProdutoController().update);
Roteador.delete('/produtos/:id', new ProdutoController().delete);

export default Roteador;