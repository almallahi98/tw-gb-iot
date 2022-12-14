import {z,TypeOf} from 'zod';
export const sensorNodeSchema=z.object({
    body:z.object({
        node_id:z.string({required_error:"node id is required"}),
        sensors_target_value:z.string({required_error:" sensor target is required"}),
        sensors_name:z.string({required_error:"sensor name is required"}),
        type:z.enum(['Analog','Digital'],{required_error:'type must me Analog or Digital'}),
        sensor_type:z.string({required_error:"seneor type is required"}),
        start_r:z.string({required_error:"sensor stayrt range is required"}),
        end_r:z.string({required_error:"sensor end rabge is required"})

    })
})
export type sensorNodeSchemaType=TypeOf<typeof sensorNodeSchema>['body'];


export const sensorTypeSchema=z.object({
    body:z.object({
        type:z.string({required_error:" sensor type is required"}),
        start_r:z.string({required_error:"sensor start range is required"}),
        end_r:z.string({required_error:"sensor end range is required"})
    })
})
export const dataInputSchema=z.object({
    body:z.object({
        input_value:z.string({required_error:"input value is required"}),
        node_id:z.string({required_error:"node id is required"}),
        date:z.date({required_error:"date is required"}),
        sensor_id:z.string({required_error:"sensor id is required"})
    })
})
