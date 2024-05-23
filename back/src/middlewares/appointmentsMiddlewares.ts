import { Request, Response, NextFunction } from 'express';

export const validateId = (req: Request, res: Response, next: NextFunction) => {
    const { userId } = req.body;
    if (userId) {
        next();
    } else {
        res.status(400).json({
            message: 'No podemos agendar un turno sin un ID de usuario',
        });
    }
};
