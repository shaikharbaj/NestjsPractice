import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './Schema/user.schema';
import mongoose from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { CreateuserDto } from './dtos/createuser.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: mongoose.Model<User>,
    private jwtService: JwtService,
  ) {}

  async findUserByEmail(email: string): Promise<User | null> {
    const user = await this.userModel.findOne({ email: email });
    return user;
  }

  async registerUser(createuserDto: CreateuserDto): Promise<User> {
    const hashpassword = await bcrypt.hash(createuserDto.password, 10);
    const newUser = await new this.userModel({
      ...createuserDto,
      password: hashpassword,
    });
    return await newUser.save();
  }
  async loginuser(body: any): Promise<any> {
    const checkuserexist = await this.userModel.findOne({ email: body.email });

    if (!checkuserexist) {
    }
    return;
  }
  //   async generateToken(user: User): Promise<string> {
  //     const payload = { email: user.email, id: user.id };
  //     return this.jwtService.sign(payload);
  //   }
}
