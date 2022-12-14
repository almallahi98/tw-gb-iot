import { FormLabel } from '@chakra-ui/form-control'
import { Input } from '@chakra-ui/react'
import React from 'react'

function OtherType(props:any) {
  return (
    <>
        <FormLabel>Range start</FormLabel>
            <Input onChange={e=>{
              props.setSensor({...props.Sensor,start_r:e.target.value})
            }}/>
            <FormLabel>Range Ends</FormLabel>
            <Input onChange={e=>{
              props.setSensor({...props.Sensor,end_r:e.target.value})
            }}/>
    </>
  )
}

export default OtherType