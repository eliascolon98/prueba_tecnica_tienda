import {
    Entity, 
    PrimaryGeneratedColumn, 
    Column, 
    BaseEntity
} from 'typeorm'

@Entity()
export class Products extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string

    @Column()
    price: number

    @Column()
    description: string

}