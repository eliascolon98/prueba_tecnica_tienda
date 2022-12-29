import {DataSource} from 'typeorm';
import { Products } from '../entities/Product';
import { Roles } from '../entities/Roles';
import { Users } from '../entities/Users';
import { Sales } from '../entities/Sales';

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'postgresql',
    username: 'postgres',
    password: 'eliascolon98',
    port: 5432,
    database: 'tiendabd',
    entities: [Products, Roles, Users, Sales],
    synchronize: true,
    logging: true
})