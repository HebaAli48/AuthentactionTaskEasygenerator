import { Injectable, UnauthorizedException, ConflictException, Inject } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';
import { User, UserDocument } from '../users/schemas/user.schema';
import { SignUpDto } from './dto/signup.dto';
import { SignInDto } from './dto/signin.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private jwtService: JwtService,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {}

  /**
   * Register a new user
   */
  async signUp(signUpDto: SignUpDto): Promise<{ user: any; access_token: string }> {
    const { email, name, password } = signUpDto;

    this.logger.info('Sign up attempt', { context: 'AuthService', email });

    // Check if user already exists
    const existingUser = await this.userModel.findOne({ email });
    if (existingUser) {
      this.logger.warn('Sign up failed - email already exists', {
        context: 'AuthService',
        email,
      });
      throw new ConflictException('Email already exists');
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await this.userModel.create({
      email,
      name,
      password: hashedPassword,
    });

    this.logger.info('User created successfully', {
      context: 'AuthService',
      userId: user._id,
      email,
    });

    // Generate JWT token
    const token = this.jwtService.sign({ id: user._id, email: user.email });

    // Return user without password
    const userObject = user.toObject();
    const { password: _password, ...userWithoutPassword } = userObject;

    return {
      user: userWithoutPassword,
      access_token: token,
    };
  }

  /**
   * Sign in existing user
   */
  async signIn(signInDto: SignInDto): Promise<{ user: any; access_token: string }> {
    const { email, password } = signInDto;

    this.logger.info('Sign in attempt', { context: 'AuthService', email });

    // Find user
    const user = await this.userModel.findOne({ email });
    if (!user) {
      this.logger.warn('Sign in failed - user not found', { context: 'AuthService', email });
      throw new UnauthorizedException('Invalid credentials');
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      this.logger.warn('Sign in failed - invalid password', { context: 'AuthService', email });
      throw new UnauthorizedException('Invalid credentials');
    }

    this.logger.info('User signed in successfully', {
      context: 'AuthService',
      userId: user._id,
      email,
    });

    // Generate JWT token
    const token = this.jwtService.sign({ id: user._id, email: user.email });

    // Return user without password
    const userObject = user.toObject();
    const { password: _password, ...userWithoutPassword } = userObject;

    return {
      user: userWithoutPassword,
      access_token: token,
    };
  }

  /**
   * Validate user by ID (used by JWT strategy)
   */
  async validateUser(userId: string): Promise<any> {
    const user = await this.userModel.findById(userId).select('-password');
    if (!user) {
      throw new UnauthorizedException('User not found');
    }
    return user;
  }
}
