import { Box, Flex, SimpleGrid,Image,Text, Heading } from '@chakra-ui/react'
import React from 'react'

function AboutUs() {
  return (
    <Flex justifyContent={'center'} h={'100vh'}>
        <Flex bg={'gray.700'} h={'80vh'} w={'80vw'} mt={'12vh'} shadow={'dark-lg'}>
            <SimpleGrid columns={[1]}>
                <Flex w={'100%'}>
                    <Image src='/res/joshua-sortino-LqKhnDzSF-8-unsplash.jpg' w={'30%'}/>
                    <Box m={5} w={'100%'}>
                        <Heading>
                            Contact us...
                        </Heading>
                        <Flex h={'100%'} w={'100%'} >
                        <Text p={'5%'} fontSize={'large'}>
                           Email: x52-@hotmail.com
                           <br/>
                           phone: 0544444444
                        </Text>
                        </Flex>
                    </Box>
                </Flex>
            </SimpleGrid>

        </Flex>
    </Flex>
  )
}

export default AboutUs