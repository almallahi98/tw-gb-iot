import { NextFunction, Request, Response } from 'express'
import {z, ZodError} from 'zod'

export const validator =(schema:z.AnyZodObject)=>(req:Request,res:Response,next:NextFunction)=>{
    try{
        schema.parse({
            body:req.body,
            params:req.params,
            query:req.query
        })
    }
    catch(err){
        const zodError=err as ZodError;
        return res.status(400).json({msg:{
            error:zodError.errors[0].message,
            code:zodError.errors[0].code,
            path:zodError.errors[0].path
        }})
    }
}