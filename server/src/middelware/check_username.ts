import { NextFunction, Request, Response } from "express";
import { dbcontext } from "../context/context.db";
import { RegisterSchemaType } from "../schema/auth.schema";

export const check_user=async(req:Request,res:Response,next:NextFunction)=>{
    const user =req.body as RegisterSchemaType;
    try{
        const taken= await dbcontext.user.findUnique({where:{username:user.username}})
    if(taken){
        return res.status(400).json({msg:"this username is taken.. try another username !"});
    }
    next();
    }
    catch(err){
        return res.status(500).json({msg:"server eroor",
    err:{
        messege:err
    }})
    }
}