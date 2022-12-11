import { Box, Flex } from '@chakra-ui/react'
import React from 'react'

function Home() {
  return (
    <> 
        <Box
        h={'80vh'}
        bgImage={"./res/joshua-sortino-LqKhnDzSF-8-unsplash.jpg"}
        backgroundPosition={'center'}
        backgroundSize={'cover'}
        >
            <Box
            h={'100%'}
            pt={'4%'}
            backdropFilter='auto'
            backdropBlur={'8px'}>
                <Flex justifyContent={''}>
                    <Box w={'100%'}>
                        1
                    </Box>
                    <Box w={'100%'}>
                        2
                    </Box>
                </Flex>
            </Box>
            
        </Box>
        <Box bg={'green'} h={'100px'}>

        </Box>
    </>
  )
}

export default Home