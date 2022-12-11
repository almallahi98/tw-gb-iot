import { ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, Input, ModalFooter, Flex, Button, Text } from '@chakra-ui/react'
import React from 'react'


function Login(props: any) {
    return (
        <ModalContent>
            <ModalHeader>login form</ModalHeader>
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
                        <Button colorScheme='blue' mr={3}>
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