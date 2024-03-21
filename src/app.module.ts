import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { authMiddleware } from './MIddleware/auth.middleware';

@Module({
  imports: [
    ConfigModule.forRoot({
         envFilePath:'.env',
         isGlobal:true
    }),
    MongooseModule.forRoot(process.env.DB_URL),
    BookModule,
    UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
       configure(consumer: MiddlewareConsumer) {
               consumer
                  .apply(authMiddleware)
                  .forRoutes({path:"/user/getuser",method:RequestMethod.GET})
       }
}
