import { Router } from 'express';
import {
    getUsers,
    getUserById,
    registerUser,
    loginUser,
} from '../controllers/usersController';
import {
    validateIdUser,
    validateNewUser,
} from '../middlewares/usersMiddlewares';

const usersRouter: Router = Router();

usersRouter.get('/', getUsers);
usersRouter.get('/:id', validateIdUser, getUserById);
usersRouter.post('/register', validateNewUser, registerUser);
usersRouter.post('/login', loginUser);

export default usersRouter;
