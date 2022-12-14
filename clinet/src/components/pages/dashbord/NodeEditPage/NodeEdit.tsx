import { Box, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import LineChart from '../charts/Charts'

function NodeEdit() {
  return (
    <>
    <SimpleGrid pt={'10vh'} columns={[1,3]} bg={'whiteAlpha.900'}>
        <Box><LineChart /></Box>
        <Box></Box>
        <Box></Box>
    </SimpleGrid>
    </>
  )
}

export default NodeEdit