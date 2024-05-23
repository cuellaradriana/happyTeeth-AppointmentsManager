import { AppDataSource } from '../config/data-source';
import { Credential } from '../entities/Credential';

const CredentialRepository = AppDataSource.getRepository(Credential).extend({
    findUsername: async function (username: string): Promise<Credential> {
        const credential = await this.findOneBy({ username });
        if (credential) return credential;
        else throw new Error('Credenciales Inválidas');
    },
});

export default CredentialRepository;
