import { Box, Button, Center, Flex, FormControl, FormLabel, Heading, Input, SimpleGrid, Switch, Table, TableContainer, Tbody, Td, Text, Thead, Tr, useColorModeValue } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BarChar from '../charts/Bar'
import LineChart from '../charts/Charts'
import DoughnutCahrt from '../charts/Doughnut'
import { nodeData, sensor } from '../dash/addModel/AddNode'
import EditNameActiv from './EditNameActive'

function NodeEdit() {
  const [nData, setnDate] = useState<nodeData>({ node_id:'',node_name: 'cdcdcdc', active: 'true', sensors: [] })
  const [Sensors, setSensors] = useState<Array<sensor>>([{sensors_name:'',sensors_target_value:'',type:'',end_r:'',start_r:''}])
  const routeParams = useParams();

  const getNode=async()=>{
    await axios.get('http://localhost:5000/api/v1/nodes/getnode/'+routeParams.id,{headers:{
      'Authorization': 'Bearer '+localStorage.getItem('token')
    }}).then(res=>{
      const d=res.data as nodeData;
      setnDate({...nData,node_id:d.node_id,active:d.active,node_name:d.node_name});
      console.log("nData");
      })
  }

  const getSensors=async()=>{
    await axios.get('http://localhost:5000/api/v1/sensors/getseneors/'+routeParams.id,{headers:{
      'Authorization': 'Bearer '+localStorage.getItem('token')
    }}).then(res=>{
      setSensors([...res.data])
      console.log(Sensors);
    })
  }
  useEffect(() => {
    getNode();
    getSensors();     
  }, [])
  
  console.log(routeParams.id);
  
  return (
    <>
      
      <SimpleGrid px={4} pt={'15vh'} columns={[1, 2]}>
        <Center h={'450px'}><LineChart /></Center>
        {/* <Box><DoughnutCahrt /></Box> */}
        <Center h={'450px'}><BarChar /></Center>
      </SimpleGrid>
      <Heading mt={'40px'}>{nData.node_id}</Heading>
      <Text>{nData.active}</Text>
      <Text>{nData.node_name}</Text>
      <Center m={5} p={5} bg={'greay'} borderRadius={'5px'}>
      
        <EditNameActiv setnDate={setnDate} nData={nData}/>
       
      </Center>
      <Button p={'25px'} colorScheme={'yellow'}>Edit Node</Button>

      <Center pt={'20px'} w={'100%'} >
      
            <TableContainer w={'80%'} border={'1px'} borderColor={'white'} borderRadius={'5px'}>
                <Table size='sm'>
                    <Thead>
                        <Tr>
                            <Td>#</Td>
                            <Td>Node Name</Td>
                            <Td>Active</Td>
                            <Td>Edit</Td>
                            <Td>Node Name</Td>
                            <Td>Active</Td>
                            <Td>Sensor address</Td>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {Sensors.map((elm,i)=>{
                          return(
                            <Tr key={i}>
                              <Td>{i}</Td>
                          <Td>{elm.sensors_name}</Td>
                          <Td>{elm.sensors_target_value}</Td>
                          <Td>{elm.start_r}</Td>
                          <Td>{elm.end_r}</Td>
                          <Td>{elm.type}</Td>
                          <Td>{elm.sensors_id}</Td>
                        </Tr>
                          )
                        })}
                      </Tbody>
                       </Table>
                      </TableContainer>
                      
                      </Center>
    </>
  )
}

export default NodeEdit