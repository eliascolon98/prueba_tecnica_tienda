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
export class Sales extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    qty: number

    @CreateDateColumn()
    sale_at: Date;

    @ManyToOne(() => Users, (users) => users.id)
    users: Users

    @OneToOne(() => Products)
    @JoinColumn()
    products: Products

}

