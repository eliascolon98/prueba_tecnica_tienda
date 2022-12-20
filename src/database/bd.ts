import {DataSource} from 'typeorm';
import { Products } from '../entities/Product';
import { Roles } from '../entities/Roles';

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'eliascolon98',
    port: 5432,
    database: 'tiendabd',
    entities: [Products, Roles],
    synchronize: true,
    logging: true
})