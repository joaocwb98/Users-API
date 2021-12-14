import { Module } from '@nestjs/common';

import { UsersModule } from './users/users.module';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest')],
})