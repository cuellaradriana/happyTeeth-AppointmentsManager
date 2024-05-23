import server from './server';
import { PORT } from './config/envs';
import 'reflect-metadata';
import { AppDataSource } from './config/data-source';

AppDataSource.initialize().then((res) => {
    console.log('Database connection successfully established.');
    server.listen(PORT, () => {
        console.log(`Server listening on PORT ${PORT}`);
    });
});
