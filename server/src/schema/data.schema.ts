import {string, TypeOf, z} from 'zod';

const dataSchema=z.object({
    body:z.object({
        input_value:z.string({required_error:'input value is requierd'}),
        sensor_id:string({required_error:'sensor id is required'})
    }),
    params:z.object({
        node_id:z.string({required_error:'node id is requierd'})
    })
});
export type dataSchemaTypeBody=TypeOf <typeof dataSchema>['body'];
export type dataSchemaTypeParams=TypeOf <typeof dataSchema>['params'];