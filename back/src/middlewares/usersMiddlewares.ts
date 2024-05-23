import { Request, Response, NextFunction } from 'express';

export const validateNewUser = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { name, email, birthdate, nDni, username, password } = req.body;
    if ([name, email, birthdate, nDni, username, password].every(Boolean)) {
        next();
    } else {
        next({
            message: 'No podemos agendar un turno sin alguno de los campos',
        });
        // res.status(400).json({
        //     message: 'No podemos agendar un turno sin alguno de los campos',
        // });
    }
};

export const validateIdUser = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { id } = req.params;
    const regEx_uuid =
        /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
    if (regEx_uuid.test(id)) {
        next();
    } else {
        res.status(400).json({
            message: 'El id proporcionado no comple con el formato requerido',
        });
    }
};

export const validateLoginUser = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { username, password } = req.params;
    const regExUsername = /^(?=.*[a-zA-Z]).{6,}$/;
    const regExPassword =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (regExUsername.test(username) && regExPassword.test(password)) {
        next();
    } else {
        res.status(400).json({
            message:
                'El username o password no cumple con las condiciones requeridas',
        });
    }
};
