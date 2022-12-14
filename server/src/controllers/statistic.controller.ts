import { Request, Response } from "express";
import { dbcontext } from "../context/context.db";

export const avrNum = async (req: Request, res: Response) => {
    const n=Date.now();
    console.log(n);
    
    const x=Math.floor(n / 1000)
    console.log(x);
    // return res.status(200).json({x});
    
    const avr = await dbcontext.data_input.aggregate(
        {
            _avg:{
                input_value:true
            },
            where:{
                date:{
                    gte: ''
                }
            }
        }


    )
}