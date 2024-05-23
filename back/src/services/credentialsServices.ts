import CredentialDto from '../dtos/CredentialDto';
import { Credential } from '../entities/Credential';
import CredentialRepository from '../repositories/CredentialRepository';
import { QueryRunner } from 'typeorm';

export const createCredentialsService = async (
    CredentialDto: CredentialDto,
    queryRunner: QueryRunner
): Promise<Credential> => {
    try {
        const newCredential = await CredentialRepository.create(CredentialDto);
        await queryRunner.manager.save(newCredential);
        return newCredential;
    } catch (error) {
        console.log('Error al crear credenciales:', error);
        throw new Error('Error al crear las credenciales');
    }
};

export const validateCredentialsService = async (
    CredentialDto: CredentialDto
): Promise<string> => {
    const { username, password } = CredentialDto;
    const validUsername = await CredentialRepository.findUsername(username);
    if (validUsername && validUsername.password === password) {
        return validUsername.id;
    } else {
        throw new Error('Credenciales Inválidas');
    }
};
