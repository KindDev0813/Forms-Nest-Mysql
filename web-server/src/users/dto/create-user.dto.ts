import {
    IsEmail,
  } from 'class-validator';
  
export class CreateUserDto {
    name: string;

    password: string;

    firstName: string;

    lastName: string

    @IsEmail()
    email: string;
    
    address: string;

    city: string;

    country: string;

    phone: string;
}
