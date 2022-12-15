import { Box, Flex, SimpleGrid,Image,Text, Heading, Card, Center, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

function AboutUs() {
  return (

    <Flex justifyContent={'center'} h={'100vh'}>
        <Flex bg={useColorModeValue('#ece4da','#cea36f')} h={'80vh'} w={'80vw'} mt={'12vh'} shadow={'dark-lg'}>
            <SimpleGrid columns={[1]}>
                <Flex w={'100%'}>
                    <Image src='/res/joshua-sortino-LqKhnDzSF-8-unsplash.jpg' w={'30%'}/>
                    <Box m={5} w={'100%'}>
                        <Heading>
                            Contact us...
                        </Heading>
                        <Flex h={'40%'} w={'100%'} justifyContent={'space-around'} >
                            

  <Card backgroundImage={'./res/4.png'} backgroundSize={'cover'} backgroundRepeat={'no-repeat'} >
           <Text  fontSize='2xl' color={'#bf996d'} background={'blackAlpha.600'}> Email:</Text>
           <Text fontSize='sm' color={'#ffffff'} background={'blackAlpha.600'}> x52-@hotmail.com</Text>
  </Card>
  <Card backgroundImage={'./res/4.png'} backgroundSize={'cover'} backgroundRepeat={'no-repeat'}>
           <Text  fontSize='2xl' color={'#bf996d'} background={'blackAlpha.600'}> phone:</Text>
           <Text fontSize='sm' color={'#ffffff'} background={'blackAlpha.600'}> 0544444444</Text>
  </Card>
  <Card backgroundImage={'./res/4.png'} backgroundSize={'cover'} backgroundRepeat={'no-repeat'}>
           <Text  fontSize='2xl' color={'#bf996d'} background={'blackAlpha.600'}> Address:</Text>
           <Text fontSize='sm' color={'#ffffff'} background={'blackAlpha.600'}> Saudi Arabia - Riyadh</Text>
  </Card>
  </Flex>
                    </Box>
                </Flex>
            </SimpleGrid>
    
        </Flex>
    </Flex>
  )
}

export default AboutUs