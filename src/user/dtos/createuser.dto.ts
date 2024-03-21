import { IsString, IsEmail, MinLength, MaxLength, Matches } from 'class-validator';

export class CreateuserDto{
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  username: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  @MaxLength(20)
  @Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/, {
    message: 'Password too weak. It must contain at least one uppercase letter, one lowercase letter, and one number.',
  })
  password: number;
}