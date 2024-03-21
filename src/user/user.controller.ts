import { Body, Controller, Post, Res, ValidationPipe,Get } from '@nestjs/common';
import { CreateuserDto } from './dtos/createuser.dto';
import { UserService } from './user.service';
import { Response } from 'express';
@Controller('user')
export class UserController {
      
     constructor(private readonly userService:UserService){}


    @Post("/register")
    async create(@Body(ValidationPipe) createuserDto:CreateuserDto,@Res() response:Response) {
               try {
                     const user = await this.userService.findUserByEmail(createuserDto.email);
                     if(user){
                           return response.status(404).json({success:false,message:"user already exist"})
                     }
                     const newUser = await this.userService.registerUser(createuserDto);
                     return response.status(201).json({message:"user register successfully"});
               } catch (error) {
                
               }
      }

    @Post("/login")
    async loginUser(@Body() body,@Res() response:Response):Promise<any>{
             const res = await this.userService.loginuser(body);
             //check user exist or not.....
            //  const checkuserexist = await this.userService.findUserByEmail(body.email);
            //  if(!checkuserexist){
            //        return response.status(401).json({success:false,message:"Invalid creadintals"})
            //  }
             //check password.....

             return 
    }

    @Get("/getuser")
    async getUser():Promise<any>{
              return 'hiii' 
    }
}
