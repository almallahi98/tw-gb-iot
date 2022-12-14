import { type } from 'os';
import {TypeOf, z} from 'zod'
export const nodeSchema =z.object({
    body:z.object({
        node_name:z.string({required_error:'node name is required',invalid_type_error:'node name must be string'}),
        active:z.enum(['true','false'],{required_error:'active mode must be selected',invalid_type_error:'active mode must be string'}),
        user_id:z.string({required_error:'user id is required'})
    })
})
export type nodeSchemaType=TypeOf <typeof nodeSchema>['body'];

export const nodesSchema=z.object({
    body:z.object({
        node_name:z.string({required_error:"node name is required"}),
        active:z.enum(['true','false'],{required_error:"statuse is required",invalid_type_error:"statuse must be string"})
    }),
    params:z.object({
        node_id:z.string({required_error:"node id is required.."})
    })
})
export type nodesSchemaType=TypeOf <typeof nodesSchema>['body'];
export type nodesSchemaTypeId=TypeOf<typeof nodesSchema>['params'];