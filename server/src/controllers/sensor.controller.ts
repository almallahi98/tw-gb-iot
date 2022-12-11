import { Request, Response } from "express"
import { dbcontext } from "../context/context.db";
import { sensorNodeSchemaType } from "../schema/node.sensores.schema"

export const getAllNodeSenor=async(req:Request,res:Response)=>{
    const id=req.params.id;
    try{
        const sensorList= await dbcontext.nodes_sensors.findMany({where:{node_id:id}})
        return res.status(200).json(sensorList);
    }catch(err){
        console.log(err);
        process.exit(1);
        }
}


export const addNodeSensor = async (req: Request, res: Response) => {
    const data = req.body as sensorNodeSchemaType;
    try{
        const insertedSensor = await dbcontext.nodes_sensors.create({
            data: {
                node_id: data.node_id,
                sensors_target_value: data.sensors_target_value,
                sensors_name: data.sensors_name,
                
                // sensors_type: data.sensor_type
            }
        })
        if (!insertedSensor) {
            return res.status(400).json({ message: "cant't add new sensor" })
        }
        //const insertedSensorType= await dbcontext.sensors_type.create()
        return res.status(201).json({ message: "node sensor is added.." })
    }catch(err){
        console.log(err);
        return res.status(400).json({message:"error"})
        
    }
}

export const updateNodeSensor = async (req: Request, res: Response) => {
    const data = req.body as sensorNodeSchemaType;
    const id = req.params.id;
    try{
        const nodeSeneor = await dbcontext.nodes_sensors.updateMany({ where: { node_id: data.node_id, AND: { sensors_id: id } }, data: data });
    if (!nodeSeneor) {
        return res.status(400).json({message:"cant update id is undefined.."});
    }
    return res.status(200).json({message:"sensor is updated",data:nodeSeneor});
    }catch(err){
        console.log(err);
        return res.status(400).json({message:err});
    }
}

export const deleteNodeSensor=async(req:Request,res:Response)=>{
    const id=req.params.id;
    try{
        const {count}=await dbcontext.data_input.deleteMany({where:{sensor_id:id}})
        if(count <= 0){
            return res.status(400).json({message:""})
        }else{
            const {count} =await dbcontext.nodes_sensors.deleteMany({where:{sensors_id:id}});
            if(count <=0){
                return res.status(400).json({message:"cant delete.. "})
            }
        }
        return res.status(200).json({message:"Node sensor id deleted"});
        
        
    }catch(err){
        console.log(err);
        return res.status(400).json(err)
    }
}
