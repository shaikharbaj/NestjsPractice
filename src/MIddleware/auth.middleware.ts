import { Injectable,NestMiddleware } from "@nestjs/common";

import { Request,Response,NextFunction } from "express";

@Injectable()
export class authMiddleware implements NestMiddleware{
    use(req: Request, res: Response, next: NextFunction) {
        console.log('Auth Middleware called.....');
        next();
      }
}