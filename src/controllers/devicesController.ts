import { Request, Response } from 'express';


export const getDevice = (req: Request, res: Response) => {
    const id = req.params.id;
    res.json({ message: `GET /device/${id} route` });
};