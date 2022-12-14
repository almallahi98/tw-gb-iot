import { Box, Button, Center, Flex, FormControl, FormLabel, Heading, Input, SimpleGrid, Switch, useColorModeValue } from '@chakra-ui/react'
import React, { useState } from 'react'
import BarChar from '../charts/Bar'
import LineChart from '../charts/Charts'
import DoughnutCahrt from '../charts/Doughnut'
import { nodeData } from '../dash/addModel/AddNode'
import EditNameActiv from './EditNameActiv'

function NodeEdit() {
  const [nData, setnDate] = useState<nodeData>({ node_name: 'cdcdcdc', active: 'true', sensors: [] })
  return (
    <>

      <SimpleGrid px={4} pt={'15vh'} columns={[1, 3]}>
        <Box><LineChart /></Box>
        <Box><DoughnutCahrt /></Box>
        <Box><BarChar /></Box>
      </SimpleGrid>
      <Center m={5} p={5} bg={'greay'} borderRadius={'5px'}>
        
        <EditNameActiv setnDate={setnDate} nData={nData}/>
        
      </Center>
      <Button p={'25px'} colorScheme={'yellow'}>Edit Node</Button>
    </>
  )
}

export default NodeEdit