import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Switch,
  Flex,
  Table,
  TableContainer,
  Thead,
  Tr,
  Tbody,
  Td,
  Th,
  Box,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import AddingSensor from "./AddingSensor";
export interface sensor {
  sensors_name: string,
  type: string,
  start_r?:string,
  end_r?:string,
  sensors_target_value:string,
  sensors_id?:string
 }

 export interface nodeData{
  node_id?:string,
  node_name: string,
  active: string,
  sensors: sensor[]
 }
function AddNode() {
  //const [AddingSensor, setAddingSensor] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [Data, setData] = useState<nodeData>({
    node_name: '',
    active: 'true',
    sensors: []
  })

  const addNode=async()=>{
   
    
    
    await axios.post('http://localhost:5000/api/v1/nodes/add',Data, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+localStorage.getItem('token')
        }}).then(res=>{
            if(res.status===201){
              console.log(res.status);
              
                //localStorage.setItem('token',res.data.token);
                // props.onClose();
                // props.setLoginStat('Logout')
            }
        
    });
};

  return (
    <>
      <Button onClick={onOpen}>Add new Node</Button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size='xl'
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>adding Node</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl mt={3}>
              <FormLabel>Node Name</FormLabel>
              <Input placeholder="Node Name" onChange={e => {
                setData({ ...Data, node_name: e.target.value })
              }} />
              
              <Flex mt={2}>
                <FormLabel>is active</FormLabel>
                <Switch colorScheme="green" size="lg" onChange={e => {
                  setData({ ...Data, active: String(e.target.checked) }) //console.log(Data);
                }} isChecked/>
              </Flex>
              <Box>
                <Flex>
                  <AddingSensor setData={setData} Data={Data}/>
                </Flex>

              </Box>
              <TableContainer border={'1px'} borderRadius={'5px'} mt={2}>
                <Table size={"sm"}>
                  <Thead>
                    <Tr>
                      <Th>name</Th>
                      <Th>type</Th>
                      <Th>start</Th>
                      <Th>End</Th>
                      <Th>End</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {
                      Data.sensors.map((elm:sensor,i) => {
                        return (
                          <Tr key={i}>
                            <Td>{elm.sensors_name}</Td>
                            <Td>{elm.type}</Td>
                            <Td>{elm.start_r}</Td>
                            <Td>{elm.end_r}</Td>
                            <Td><Button size={'sm'} colorScheme={'red'}
                            data-delete={elm.sensors_name}
                            onClick={e=>{
                              const fill=Data.sensors.filter((elm:sensor)=>{
                                return elm.sensors_name!== e.currentTarget.getAttribute('data-delete'); 
                              })
                              setData({...Data,sensors:fill});
                              
                            }}
                            >X</Button></Td>
                          </Tr>
                        )
                      })
                    }
                  </Tbody>
                </Table>
              </TableContainer>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3}
            onClick={()=>{
              console.log(Data);
              addNode()
            }}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
export default AddNode;

