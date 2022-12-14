import { Box, Button, FormControl, FormLabel, Input, Select } from '@chakra-ui/react'

import React, {useState } from 'react'
import OtherType from '../OtherType';
import{sensor}from './AddNode';

function AddingSensor(props:any) {
  const GetType= [
    {type:'Analog',start_r:'0',end_r:'1023'},
    {type:'Digital',start_r:'0',end_r:'1'}]
    const [Sensor, setSensor] = useState<sensor>(
      {sensors_name:'',type:'Analog',end_r:'',start_r:'',sensors_target_value:''});


 
  const [IsOther,setIsOther] = useState(true);
  return (
    <Box border={'1px'} borderRadius={'5px'} w={'100%'} p={2}>
        <FormControl>
            <FormLabel>sensor name</FormLabel>
            <Input onChange={e=>{
              setSensor({...Sensor,sensors_name:e.target.value});
            }}/>
            <FormLabel>Sensor Target value</FormLabel>
              <Input placeholder="Target" onChange={e => {
                setSensor({ ...Sensor, sensors_target_value: e.target.value })
              }} />
            {(IsOther)?<OtherType setSensor={setSensor} Sensor={Sensor}/>:null} 
            
            <FormLabel>sensor Type</FormLabel>
            <Select onChange={e=>{
                if(e.target.value ==='Analog'){ 
                setIsOther(true)
                }
                else
                {
                setIsOther(!true)
              }
              setSensor({...Sensor,type:e.target.value});
            }}>
              {
                GetType.map((elm,i)=>{
                  return (<option key={i} value={elm.type}> {elm.type} </option>)
                })
                
              }
            </Select>
            <Button mt={2} onClick={e=>{
              const sen=[...props.Data.sensors,Sensor];
              console.log(sen);
              
                  props.setData({...props.Data,sensors:sen})
                  
                }}>add sensor</Button>
        </FormControl>
    </Box>
  )
}

export default AddingSensor
