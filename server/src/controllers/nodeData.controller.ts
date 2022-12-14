import { data_input } from "@prisma/client";
import { Request, Response } from "express";
import { dbcontext } from "../context/context.db";
import { dataSchemaTypeBody, dataSchemaTypeParams } from "../schema/data.schema";

 export const inputData=async(req:Request,res:Response)=>{
    try{
        const id=req.params.nodeid
    const data=req.body as data_input
    const insertToData= await dbcontext.data_input.create({data:{
        input_value:data.input_value,
        sensor_id:data.sensor_id,
        node_id:id,
    }})
    if(!insertToData){
        return res.status(400).json({
            message:'cannot add data ..'
        })
    }
    res.status(201).json({
        message:'sensor data is added..'
    })
    }catch(err){
        console.log(err);
        res.status(500).json({message:'call site admin..'})
        
    }
}

export const getNodeDataBySensor=async (req:Request,res:Response)=>{
    const {node_id}=req.params as dataSchemaTypeParams;
    const data=req.body as dataSchemaTypeBody; 

    const myData= await dbcontext.data_input.findMany({where:{node_id,AND:{date:{}}}})
}