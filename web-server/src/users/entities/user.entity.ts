import {
    Column,
    Entity,
} from 'typeorm';
import { IsEmail } from 'class-validator';

@Entity()
export class User {
    @Column({
        name: 'userName',
        nullable: false,
        type: 'varchar',
        length: 30,
        default: '',
        primary:true,
    })
    name:string

    @Column({
        name: 'hashpassword',
        nullable: false,
        type: 'varchar',
        default: '',
    })
    password: string;

    @Column({
        nullable: false,
        type: 'varchar',
        default: '',
    })
    firstName: string;

    @Column({
        nullable: false,
        type: 'varchar',
        length: 30,
        default: '',
    })
    lastName: string

    @Column({
        nullable: false,
        type: 'varchar',
        length: 30,
        default: '',
    })
    @IsEmail()
    email: string;

    @Column({
        nullable: true,
        type: 'varchar',
        length: 30,
        default: '',
    })
    address: string;

    @Column({
        nullable: true,
        type: 'varchar',
        length: 45,
        default: '',
    })
    city: string;

    @Column({
        nullable: true,
        type: 'varchar',
        length: 45,
        default: '',
    })
    country: string;

    @Column({
        nullable: true,
        type: 'varchar',
        length: 20,
        default: '',
    })
    phone: string;

    @Column({
        nullable:true,
        type: Boolean,
        default:false
    })
    manager:Boolean;
}
