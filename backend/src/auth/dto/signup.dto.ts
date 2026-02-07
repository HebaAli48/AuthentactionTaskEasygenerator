import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength, Matches, IsNotEmpty } from 'class-validator';

export class SignUpDto {
  @ApiProperty({
    example: 'user@example.com',
    description: 'User email address',
  })
  @IsEmail({}, { message: 'Please provide a valid email address' })
  @IsNotEmpty({ message: 'Email is required' })
  email: string;

  @ApiProperty({
    example: 'John Doe',
    description: 'User full name',
    minLength: 3,
  })
  @IsString()
  @MinLength(3, { message: 'Name must be at least 3 characters long' })
  @IsNotEmpty({ message: 'Name is required' })
  name: string;

  @ApiProperty({
    example: 'Password123!',
    description:
      'Password must be at least 8 characters long and contain at least one letter, one number, and one special character',
    minLength: 8,
  })
  @IsString()
  @MinLength(8, { message: 'Password must be at least 8 characters long' })
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]/, {
    message:
      'Password must contain at least one letter, one number, and one special character',
  })
  @IsNotEmpty({ message: 'Password is required' })
  password: string;
}
