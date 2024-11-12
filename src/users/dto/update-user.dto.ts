import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import {
  IsString,
  IsEmail,
  IsEnum,
  IsBoolean,
  IsOptional,
  Length,
} from 'class-validator';
import { UserRole } from '../type';
export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsString()
  @IsOptional()
  @Length(1, 50)
  username?: string;

  @IsString()
  @IsOptional()
  @Length(1, 50)
  password?: string;

  @IsString()
  @IsOptional()
  @Length(1, 500)
  full_name?: string;

  @IsString()
  @IsOptional()
  address?: string;

  @IsString()
  @IsOptional()
  phone_number?: string;

  @IsEmail()
  @IsOptional()
  @Length(1, 100)
  email?: string;

  @IsEnum(UserRole, { message: 'Role must be either admin, user, or guest' })
  @IsOptional()
  role?: UserRole;

  @IsBoolean()
  @IsOptional()
  is_deleted?: boolean;
}
