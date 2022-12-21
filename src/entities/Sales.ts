import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
    CreateDateColumn,
    OneToOne,
    JoinColumn,
    ManyToOne
} from 'typeorm'

import { Users } from './Users';
import { Products } from './Product';

@Entity()
export class Sales extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    qty: number

    @CreateDateColumn({ default: formatoFecha() })
    sale_at: Date;

    @ManyToOne(() => Users, (users) => users.id)
    users: Users

    @ManyToOne(() => Products, (products) => products.id)
    products: Products

}


function formatoFecha() {
    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();
    var now = today.toLocaleTimeString('es-US');

    return `${year}-${month}-${day}`;
}

