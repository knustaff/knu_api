import {IsString, IsNotEmpty, IsEmail, IsNumber, IsDateString} from 'class-validator'

export class CreateStaffDto {
    @IsString()
    @IsNotEmpty()
    firstName: string;

    @IsString()
    @IsNotEmpty()
    lastName: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsNumber()
    @IsNotEmpty()
    deptId: number;

    @IsDateString()
    @IsNotEmpty()
    dateOfBirth: string;

    @IsString()
    @IsNotEmpty()
    address: string;

    @IsString()
    @IsNotEmpty()
    phone: string;

    @IsDateString()
    @IsNotEmpty()
    dateOfHire: string;

    @IsNumber()
    @IsNotEmpty()
    statusId: number;
    
    @IsNumber()
    @IsNotEmpty()
    roleId: number;

    @IsNumber()
    @IsNotEmpty()
    salary: number;
}