import { NextFunction, Request, Response } from 'express'
import * as jwt from 'jsonwebtoken'
export interface IUser{
    user_id:string,
    username:string
}
export const portact=(req:Request,res:Response,next:NextFunction)=>{
    const message="you dont have access"
    try{
        let token=req.headers.authorization;
        
        
        if(!token){
            return res.status(401).json({msg:message});
        }
        token=token.split(' ')[1];
        //console.log(token);
        const user=jwt.verify(token,process.env.SECRET_KEY as string) as IUser;
        
        res.locals.user=user;
        console.log(res.locals.user);
        next();
    }
    catch(err){
        console.log(err);
        return res.status(401).json({msg:message});
        
    }
}