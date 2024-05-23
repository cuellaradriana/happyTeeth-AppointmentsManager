import { Request, Response } from 'express';
import {
    getUserByIdService,
    getUsersService,
    loginUserService,
    registerUserService,
} from '../services/usersServices';
import UserDto from '../dtos/UserDto';
import CredentialDto from '../dtos/CredentialDto';

export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await getUsersService();
        res.status(200).json(users);
    } catch (error: any) {
        res.status(404).json({
            message: error.message,
        });
    }
};

export const getUserById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const user = await getUserByIdService(id);
        res.status(200).json(user);
    } catch (error: any) {
        res.status(404).json({
            message: error.message,
        });
    }
};

export const registerUser = async (req: Request, res: Response) => {
    const userData: UserDto = req.body;
    try {
        const newUser = await registerUserService(userData);
        const { credential, ...userWithoutCredential } = newUser;
        res.status(201).json(userWithoutCredential);
    } catch (error: any) {
        res.status(400).json({
            message: error.message,
        });
    }
};

export const loginUser = async (req: Request, res: Response) => {
    try {
        const credentialData: CredentialDto = req.body;
        const loginUser = await loginUserService(credentialData);
        res.status(200).json(loginUser);
    } catch (error: any) {
        res.status(400).json({
            message: error.message,
        });
    }
};
