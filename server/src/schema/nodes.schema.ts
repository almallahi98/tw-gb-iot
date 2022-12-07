import {TypeOf, z} from 'zod';
export const nodesSchema=z.object({
    body:z.object({
        node_name:z.string({required_error:"node name is required"}),
        active:z.enum(['active','inactive'],{required_error:"statuse is required",invalid_type_error:"statuse must be string"}),
        user_id:z.string({required_error:'user id is required'})
    }),
    params:z.object({
        user_id:z.string({required_error:"user id is required.."})
    })
})
export type nodesSchemaType=TypeOf <typeof nodesSchema>['body'];
export type nodesSchemaTypeId=TypeOf<typeof nodesSchema>['params'];