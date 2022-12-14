import { Request, response, Response } from "express";
import { stat } from "fs";
import { dbcontext } from "../context/context.db";

import {IUser} from '../middelware/auth/auth'
import { sensorNodeSchemaType } from "../schema/node.sensores.schema";
import { nodeSchemaType, nodesSchemaType, nodesSchemaTypeId } from "../schema/node.shema";


export const getAllNodes = async (req: Request, res: Response) => {
    const {user_id}= res.locals.user as IUser
    try {
        const nodeList = await dbcontext.nodes.findMany({ where: { user_id } });
        console.log(nodeList.length);
        if (nodeList.length <= 0) {
            return res.status(400).json({ msg: 'you didint inserted any devices yet..' })
        }
        return res.status(200).json({ nodeList })
    }
    catch (err) {
        console.log(err);
        return res.status(400).json({
            messege: err
        })
    }
} 

export const addNewNode=async(req:Request,res:Response)=>{
    try{
        const node= req.body
        const user=res.locals.user as IUser;
        const sensores: sensorNodeSchemaType[]=[...req.body.sensors] 
        console.log(user);
        
        
        const newNode= await dbcontext.nodes.create({data:{
            node_name:node.node_name,
            active:node.active,
            user_id:user.user_id}

        });
        if(!newNode){
            return res.status(400).json({messege:"can't add new node.. "});
        }
        const x=sensores.map(((elm:sensorNodeSchemaType)=>{
            return elm.node_id=newNode.node_id
        }))
        console.log(x);
        
        const sensoresInserted= await dbcontext.nodes_sensors.createMany({data:sensores})
        if(!sensoresInserted){
            return res.status(400).json({message:'error'})
        }
        return res.status(201).json({message:'ok'})
    }
    catch(err){
        console.log(err);
        return res.status(400).json({messge:err});
    }
}
export const updateNode=async(req:Request,res:Response)=>{
    try{
        const data= req.body as nodesSchemaType;
        const {node_id}=req.params as nodesSchemaTypeId;
        // this is to make sure that the user cant edit but his devices !!
        const {user_id} = res.locals.user as IUser;
        const updated= await dbcontext.nodes.updateMany({where:{node_id,AND:{user_id}},
            data});

            // active:Data.active,
            //     node_name:Data.node_name
        if(!updated){
            return res.status(400).json({message:"update node fail"});
        }
        return res.status(201).json({message:"node updated"});
    }
    catch(err){
        console.log(err);
        return res.status(400).json({message:err})
    }
}

export const deleteNode=async(req:Request,res:Response)=>{
    const {node_id}=req.params as nodesSchemaTypeId;
    const {user_id} = res.locals.user as IUser;
    try{
    const {count} =await dbcontext.nodes.deleteMany({where:{node_id,AND:{user_id}}});
    if(count<=0){
        return res.status(400).json({message:"somthing is wrong !! try again later"});
    }
    console.log("node is deleted..");
    return res.status(204);
    //204 dosnot have a body !!
    
    }
    catch(err){
        console.log(err);
        return res.status(400).json({message:"cant delete node.."});
    }
}