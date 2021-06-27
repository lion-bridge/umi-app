import Mock from 'mockjs';
import { Request, Response } from 'express';
const getName = (req: Request, res: Response) => {
    setTimeout(() => {
        res.json({name: Mock.mock('@name')}); //
    }, Math.random() * 1000);
    
}

export default {
    'GET /api/price/list': getName
}

