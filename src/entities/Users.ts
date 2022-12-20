import {
    Entity, 
    PrimaryGeneratedColumn, 
    Column, 
    BaseEntity,
    OneToOne,
    JoinColumn
} from 'typeorm'

import { Roles } from './Roles';

@Entity()
export class Users extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    document: number

    @Column({unique: true})
    name: string

    @Column()
    lastname: string;

    @OneToOne(() => Roles)
    @JoinColumn()
    roles: Roles

}

// @CreateDateColumn()
// createat: Date;