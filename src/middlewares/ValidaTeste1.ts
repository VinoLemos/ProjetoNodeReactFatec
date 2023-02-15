import { Request, Response, NextFunction } from 'express';

// Verifica se os parâmetros da requisição são válidos
function ValidaTeste1(req: Request, res: Response, next: NextFunction) {
    const id =  req.params.id;
    const num = req.query.num;

    return (Number(id)>1000 || num==null) ? res.status(400).send("Parâmetros inválidos") : next();
}

export default ValidaTeste1