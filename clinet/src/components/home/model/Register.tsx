import { ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, Input, ModalFooter, Flex, Button,Text } from '@chakra-ui/react'
import React from 'react'

function Register(props:any) {
  return (
    <ModalContent>
    <ModalHeader>Register form</ModalHeader>
    <ModalCloseButton />
    <ModalBody pb={4}>
        <FormControl>
            <FormLabel>usename</FormLabel>
            <Input />
        </FormControl>

        <FormControl mt={4}>
            <FormLabel>password</FormLabel>
            <Input type={'password'} />
        </FormControl>
        <FormControl mt={4}>
            <FormLabel>re-password</FormLabel>
            <Input type={'password'} />
        </FormControl>
        <FormControl>
            <FormLabel>email</FormLabel>
            <Input type={'email'}/>
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
                <Button colorScheme='blue' mr={3}>
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