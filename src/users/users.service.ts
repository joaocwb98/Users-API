import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './entities/user.entity';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {
  }

  create(createUserDto: CreateUserDto) {
    const User = new this.userModel(createUserDto);
    return User.save();
  }

  findAll() {
    return this.userModel.find();
  }

  findOne(id: number) {
    return this.userModel.findById(id);
  }

  update(id: String, updateUserDto: UpdateUserDto) {
    return this.userModel.findByIdAndUpdate(
      {_id: id,
      },
      {
        $set: UpdateUserDto
      },
      {
        new: true,
      },
    )
    .exec();
  }

  remove(id: string) {
    return this.userModel.deleteOne({ _id: id}).exec();
  }
}
