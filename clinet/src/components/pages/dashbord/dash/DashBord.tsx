import { Box, Button, Center, Flex, SimpleGrid, Switch, Table, TableContainer, Tbody, Td, Text, Thead, Tr } from "@chakra-ui/react";
import React, { useEffect } from "react";
import LineChart from "../charts/Charts";
import {useNavigate} from 'react-router-dom'
import axios from "axios";
import AddNode from "./addModel/AddNode";

// const AddNewNode= async()=>{
//     const result = await axios.post('http://localhost:5000/api/v1/nodes/add')
// }

function DashBord() {
    const navigate = useNavigate();
    useEffect(() => {
     if(!localStorage.getItem('token')){
        navigate('/')
     }
    }, [])
    
    return (
        <SimpleGrid pt={'10vh'} columns={[1]} w={'100vw'}>
            <Center px={'25%'}>
                <LineChart />
            </Center>
            <Flex justifyContent={'end'} w={'90%'}>
                <AddNode />
                </Flex>
            <Center mt={5}>  
            <TableContainer w={'80%'} border={'1px'} borderColor={'white'} borderRadius={'5px'}>
                <Table size='sm'>
                    <Thead>
                        <Tr>
                            <Td>#</Td>
                            <Td>Node Name</Td>
                            <Td>Active</Td>
                            <Td>Edit</Td>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>1</Td>
                            <Td>home</Td>
                            <Td><Switch colorScheme='teal' size='lg' /></Td>
                            <Td><Button colorScheme='yellow' size='md'>
                                Edit
                            </Button></Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
            </Center>
        </SimpleGrid>
    );
}

export default DashBord;
