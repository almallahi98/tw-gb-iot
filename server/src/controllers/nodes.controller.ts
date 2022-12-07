import { Request, response, Response } from "express";
import { dbcontext } from "../context/context.db";
import { nodesSchemaTypeId } from "../schema/nodes.schema";

export const getAllNodes = async (req: Request, res: Response) => {
    const { user_id } = req.params as nodesSchemaTypeId;
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