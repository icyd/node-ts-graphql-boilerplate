import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    firstName: string;

    @Column('text')
    lastName: string;

    @Column({
      type: 'text',
      unique: true,
    })
    email: string;

    @Column({
      type: 'boolean',
      default: false,
    })
    comfirmed: boolean;

    @Column()
    age: number;

}
