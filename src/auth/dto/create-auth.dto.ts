import { IsNotEmpty, IsString } from 'class-validator';

export class CreateAuthDto {
  username: string;
  password: string;
}

export class RefreshTokenDto {
  @IsString({ message: 'This filed must be string' })
  @IsNotEmpty({ message: 'This filed not empty' })
  token: string;
}
