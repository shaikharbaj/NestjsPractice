import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema,User } from './Schema/user.schema';
import { JwtModule } from '@nestjs/jwt';
@Module({
  imports:[
     JwtModule.register({
           secret:"Arbaj",
           signOptions:{expiresIn:"1d"}
     })
    ,MongooseModule.forFeature([{name:User.name,schema:UserSchema}])],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
