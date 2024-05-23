import UserDto from '../dtos/UserDto';
import { User } from '../entities/User';
import {
    createCredentialsService,
    validateCredentialsService,
} from './credentialsServices';
import UserRepository from '../repositories/UserRepository';
import ILogin from '../interfaces/ILogin';
import { AppDataSource } from '../config/data-source';
import { Credential } from '../entities/Credential';
import CredentialDto from '../dtos/CredentialDto';

export const getUsersService = async (): Promise<User[]> => {
    const users = await UserRepository.find();
    return users;
};

export const getUserByIdService = async (id: string): Promise<User> => {
    const user: User | null = await UserRepository.findOne({
        where: { id },
        relations: {
            appointments: true,
        },
    });
    if (!user) {
        throw new Error(`No existe un usuario con el ID: ${id}`);
    }
    return user;
};

export const registerUserService = async (UserDto: UserDto): Promise<User> => {
    const queryRunner = AppDataSource.createQueryRunner();
    await queryRunner.connect();

    try {
        queryRunner.startTransaction();
        const { name, email, birthdate, nDni, username, password } = UserDto;

        const newCredential: Credential = await createCredentialsService(
            {
                username,
                password,
            },
            queryRunner
        );

        const newUser: User = await UserRepository.create({
            name,
            email,
            birthdate,
            nDni,
            credential: newCredential,
        });

        const userSaved = await queryRunner.manager.save(newUser);
        if (!userSaved) throw new Error('Error al crear el usuario');

        await queryRunner.commitTransaction();

        return newUser;
    } catch (error: any) {
        await queryRunner.rollbackTransaction();
        throw new Error(
            'Uno o varios de los datos ingresados ya se encuentran en nuestra base de datos, verifique si ya posee una cuenta'
        );
    } finally {
        await queryRunner.release();
    }
};

export const loginUserService = async (
    credentialDto: CredentialDto
): Promise<ILogin> => {
    const credentialId = await validateCredentialsService(credentialDto);
    const user = await UserRepository.findOneBy({
        credential: { id: credentialId },
    });
    if (!user) throw new Error('Credenciales Inválidas');
    const login: ILogin = {
        login: true,
        user,
    };
    return login;
};
