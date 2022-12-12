import { ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, Input, ModalFooter, Flex, Button, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import axios from "axios";


function Login(props: any) {
    const [LoginData, setLoginData] = useState({
        username:'',
        password:''
     });
    const login=async()=>{
        console.log('from login');
        console.log(LoginData);
        
        
        await axios.post('http://localhost:5000/api/v1/user/login',LoginData, {
            headers: {
                'Content-Type': 'application/json',
            }}).then(res=>{
                if(res.status===200){
                    console.log(res.data.msg);
                    localStorage.setItem('token',res.data.token);
                    props.onClose();
                }
            
        });
    };
    
    return (
        <ModalContent>
            <ModalHeader>login form</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={4}>
                <FormControl>
                    <FormLabel>usename</FormLabel>
                    <Input onChange={e=>{
                        setLoginData({...LoginData,username:e.target.value})
                        }}/>
                </FormControl>

                <FormControl mt={4}>
                    <FormLabel>password</FormLabel>
                    <Input type={'password'} 
                    onChange={e=>{
                        setLoginData({...LoginData,password:e.target.value})
                        }}
                    />
                </FormControl>
            </ModalBody>

            <ModalFooter pt={0}>
                <Flex direction={'column'} pb={2} w='100%'>
                    <Flex pb={2}>
                        <Text mr={2}>
                            join us and
                        </Text>
                        <Button variant={'link'} onClick={()=>{props.setIsLoginView(false)}}>Reigister</Button>
                    </Flex>
                    <Flex justifyContent={'end'}>
                        <Button colorScheme='blue' mr={3} onClick={()=>{login()}}>
                            Login
                        </Button>
                        <Button onClick={props.onClose}>Cancel</Button>
                    </Flex>
                </Flex>
            </ModalFooter>
        </ModalContent>
    )
}

export default Login