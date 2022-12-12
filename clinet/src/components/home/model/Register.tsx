import { ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, Input, ModalFooter, Flex, Button,Text, Select,useToast } from '@chakra-ui/react'
import axios from 'axios';
import React,{useRef, useState} from 'react'



function Register(props:any) {
    const [regData, setregData] = useState({username:"",password:"",contact:"",contact_type:"email"});
    const re_pass = useRef('')
    const toast=useToast();
    const egisterUser=async()=>{
        await axios.post('http://localhost:5000/api/v1/user/register',regData, {
            headers: {
                'Content-Type': 'application/json',
            }}).then(res=>{
                if(res.status===201){
                    console.log(res.data.msg);
                    toast({
                        duration:3000,
                        position:'bottom',
                        status:'success',
                        description:res.data.msg
                    })
                    props.onClose()
                }
            });
    }
  return (
    <ModalContent>
    <ModalHeader>Register form</ModalHeader>
    <ModalCloseButton />
    <ModalBody pb={4}>
        <FormControl>
            <FormLabel>usename</FormLabel>
            <Input onChange={e=>{setregData({...regData,username:e.target.value})}}/>
        </FormControl>

        <FormControl mt={4}>
            <FormLabel>password</FormLabel>
            <Input type={'password'} onChange={e=>{setregData({...regData,password:e.target.value})}}/>
        </FormControl>
        <FormControl mt={4}>
            <FormLabel>re-password</FormLabel>
            <Input type={'password'} onChange={e=>{re_pass.current=e.currentTarget.value}}/>
        </FormControl>
        <FormControl >
            <FormLabel>contact</FormLabel>
            <Input onChange={e=>{setregData({...regData,contact:e.target.value})}}/>
            <Select mt={4} onChange={e=>{console.log(e.currentTarget.value);
            }}>
                <option value='email'>email</option>
                <option value='phone'>phone</option>
            </Select>
        </FormControl>
    </ModalBody>

    <ModalFooter pt={0}>
        <Flex direction={'column'} pb={2} w='100%'>
            <Flex pb={2}>
                <Text mr={2}>
                already registered ?
                </Text>
                <Button variant={'link'} onClick={()=>{props.setIsLoginView(true)}}>Login</Button>
            </Flex>
            <Flex justifyContent={'end'}>
                <Button colorScheme='green' mr={3}
                onClick={e=>{
                    console.log(regData);
                    
                    if(regData.username!=null && regData.password!=null && regData.contact!=null && regData.contact_type!= null &&regData.password===re_pass.current)
                    egisterUser()
                }}>
                    Register
                </Button>
                <Button onClick={()=>{props.setIsLoginView(true);props.onClose();}}>Cancel</Button>
            </Flex>
        </Flex>
    </ModalFooter>
</ModalContent>
  )
}

export default Register