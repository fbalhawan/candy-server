import { Request, Response, NextFunction} from 'express';

export function auth(req: Request, res: Response, next: NextFunction) {
    const adminToken = process.env.BASIC_ADMIN_TOKEN;
    const token = req.headers['authorization'];

    // If admin token is not defined in server configuration
    if(!adminToken){
        res.status(500).json( {message: 'Authorization error, please contact the admin'} );
    }

    if(token && token === adminToken){
        next();
    } else {
        res.status(401).json({ message: 'Unauthorized' });
    }
}