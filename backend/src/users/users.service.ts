import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  /**
   * Get user profile by ID
   */
  async findById(id: string): Promise<any> {
    const user = await this.userModel.findById(id).select('-password');
    return user;
  }

  /**
   * Get all users (for admin purposes - can be extended)
   */
  async findAll(): Promise<any[]> {
    const users = await this.userModel.find().select('-password');
    return users;
  }
}
