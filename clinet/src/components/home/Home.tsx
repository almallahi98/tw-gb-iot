import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, CardHeader, Center, Flex, Heading, SimpleGrid, Text, WrapItem } from "@chakra-ui/react";

import React from "react";

function Home() {
    return (
        <>
        
            <Box
                // bgImage={"./res/joshua-sortino-LqKhnDzSF-8-unsplash.jpg"}
                backgroundPosition={"center"}
                backgroundSize={"cover"}
                >
                <Box h={'60vh'}  backdropFilter="auto" backdropBlur={"8px"}>
                <Box>
                    <Flex justifyContent={'end'}>
                        <Box mt={'250px'} mr={'200px'} >
                            <Center>
                            <Text fontSize='6xl' as='b' color={'#bf996d'} >IOT</Text>
                            </Center>
                        <Text fontSize='3xl' >Internet of things</Text>
                            <Box>
                            <ButtonGroup gap='4'>
                            <Button colorScheme='whiteAlpha'> 
                                <Text  color={'#bf996d'} >xxxxxxxxxxxxxxxxxxxxxxx</Text>
                            </Button>
                        </ButtonGroup>
                            </Box>
                            </Box>
                    </Flex>
                    <Flex justifyContent={'start'}>
                        <Box mt={'-250px'} mr={'70px'}  > 
                        <img src="./res/a.png" alt="" />
                        </Box>
                    </Flex>
                   
                </Box>
                <Box bgGradient={"linear(to-t, rgba(30,34,37,1) 25%, transparent)"} h={'100%'} mt={'390px'}/>
                <Box >
                </Box>
              
                </Box>
                
            </Box>
            <Box 
            bg={'rgb(30,34,37)'}
            h={'42vh'}
            mt={'360px'}
            >

<SimpleGrid columns={[3]}  p={'5'}>

  <Card backgroundImage={'./res/1.png'} backgroundSize={'cover'} backgroundRepeat={'no-repeat'} w={'95%'}  h={'300px'}>
  <Center pt={'250px'}>
           <Text fontSize='3xl' color={'#bf996d'} background={'blackAlpha.600'}>Internet of things</Text>
</Center>
  </Card>
  

  <Card backgroundImage={'./res/2.png'} backgroundSize={'cover'} backgroundRepeat={'no-repeat'} w={'95%'}  h={'300px'}>
  <Center pt={'250px'}>
           <Text fontSize='3xl' color={'#bf996d'} background={'blackAlpha.600'}>Internet of things</Text>
</Center>
  </Card>

  <Card backgroundImage={'./res/3.png'} backgroundSize={'cover'} backgroundRepeat={'no-repeat'} w={'95%'}  h={'300px'}>
  <Center pt={'250px'}>
           <Text fontSize='3xl' color={'#bf996d'} background={'blackAlpha.600'}>Internet of things</Text>
</Center>

  </Card>
</SimpleGrid>
                
            </Box>

            
        </>
    );
}

export default Home;
