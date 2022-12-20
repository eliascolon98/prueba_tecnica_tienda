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

    @Column({unique: true})
    price: number

    @Column({unique: true})
    description: string

}