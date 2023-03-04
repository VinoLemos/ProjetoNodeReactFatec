// Importa componentes do express
import { Router, Request, Response } from 'express'
import ProdutoController from './controllers/ProdutoController'
import UsuarioController from './controllers/UsuarioController'
import TesteController from './controllers/TesteController'
import ValidaTeste1 from './middlewares/ValidaTeste1'
import ValidaToken from './middlewares/ValidaToken'
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

// Produtos
Roteador.get('/produtos', ValidaToken, new ProdutoController().index);
Roteador.get('/produtos/:id', ValidaToken, new ProdutoController().show);
Roteador.post('/produtos', ValidaToken, new ProdutoController().store);
Roteador.put('/produtos/:id', ValidaToken, new ProdutoController().update);
Roteador.put('/produtos/fornecedores/:id', ValidaToken, new ProdutoController().associarFornecedores);
Roteador.delete('/produtos/:id', ValidaToken, new ProdutoController().delete);

// Usuarios
Roteador.post('/usuarios', new UsuarioController().store);
// Autenticação
Roteador.get('/usuarios/autenticacao', new UsuarioController().autenticacao);

export default Roteador;