import {
    IsEmail,
    IsNotEmpty,
  } from 'class-validator';
  
export class CreateUserDto {
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    firstName: string;

    @IsNotEmpty()
    lastName: string

    @IsEmail()
    email: string;
    
    address: string;

    city: string;

    country: string;

    phone: string;
}
