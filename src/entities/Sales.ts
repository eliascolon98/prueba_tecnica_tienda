import {
    Entity, 
    PrimaryGeneratedColumn, 
    Column, 
    BaseEntity,
    CreateDateColumn,
    OneToOne,
    JoinColumn
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

    @OneToOne(() => Users)
    @JoinColumn()
    users: Users

    @OneToOne(() => Products)
    @JoinColumn()
    products: Products

}

