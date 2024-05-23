import { DataSource } from 'typeorm';
import { DB_HOST, DB_PASSWORD, DB_PORT, DB_USERNAME } from './envs';
import { User } from '../entities/User';
import { Appointment } from '../entities/Appointment';
import { Credential } from '../entities/Credential';

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: DB_HOST,
    port: Number(DB_PORT),
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: 'projectm3',
    synchronize: true,
    logging: ['error'],
    // dropSchema: true,
    entities: [User, Credential, Appointment],
    subscribers: [],
    migrations: [],
});
