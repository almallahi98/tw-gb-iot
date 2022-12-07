import { type } from 'os';
import {TypeOf, z} from 'zod';

export const RegisterSchema=z.object({
    body:z.object({
        username:z.string({required_error:'username is required..',invalid_type_error:'username must be string'}).min(6,'username min length is 6'),
        password:z.string({required_error:'password is required..',invalid_type_error:'password must be string'})
        .min(8,'password min length is 8').max(12,'password max length is 12'),
        contact:z.string({required_error:'contact is required'}),
        contact_type:z.enum(['email','phone'],{required_error:"you must select a contact type",invalid_type_error:"contact type is string value"})
    })
})
export type RegisterSchemaType=TypeOf <typeof RegisterSchema>['body'];