import { Button, Center, Flex, SimpleGrid, Table, TableContainer, Tbody, Td, Thead, Tr } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'
import axios from "axios";
import AddNode from "./addModel/AddNode";

interface node{
    node_id:string,
    active:string,
    node_name:string,
    user_id:string
}


function DashBord() {
    const [Nodes, setNodes] = useState([])
    const navigate = useNavigate();
    const getAllNodes= async()=>{
        await axios.get('http://localhost:5000/api/v1/nodes/getnodes',{headers: {
            'Authorization': 'Bearer '+localStorage.getItem('token')
        }}).then(res=>{
            console.log(res.data);
            setNodes(res.data.nodeList);
        })
    }
    
    useEffect(() => {
     if(!localStorage.getItem('token')){
        navigate('/');
        }
        getAllNodes();
        // eslint-disable-next-line
    }, [])
    
    return (
        <SimpleGrid pt={'10vh'} columns={[1]} w={'100vw'}>
            <Center px={'25%'}>
                
            </Center>
            <Flex justifyContent={'end'} w={'90%'}>
                <AddNode />
                {/* add model */}
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
                        {
                            Nodes.map((elm:node,i)=>{
                                return(<Tr key={i}>
                                    <Td>{i}</Td>
                                    <Td>{elm.node_name}</Td>
                                    <Td>{elm.active}</Td>
                                    <Td>
                                        <Button colorScheme='yellow' size='md' data-id={elm.node_id}
                                        onClick={()=>{
                                            navigate('/edit/'+elm.node_id);
                                        }}
                                    >
                                        Edit
                                    </Button>
                                    {/* <Edit/> */}
                                    </Td>
                                </Tr>)
                            })
                        }
                    </Tbody>
                </Table>
            </TableContainer>
            </Center>
        </SimpleGrid>
    );
}

export default DashBord;
