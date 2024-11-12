import {
  IsString,
  IsEmail,
  IsEnum,
  IsBoolean,
  IsNotEmpty,
  Length,
} from 'class-validator';
import { UserRole } from '../type';
import { Unique } from 'typeorm';
export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @Length(1, 50)
  username: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 50)
  password: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 500)
  full_name: string;

  @IsString()
  address: string;

  @IsString()
  phone_number: string;

  @IsEmail()
  @Length(1, 100)
  email: string;

  @IsEnum(UserRole, { message: 'Role must be either admin, user' })
  role: UserRole;

  @IsBoolean()
  is_deleted: boolean;
}
