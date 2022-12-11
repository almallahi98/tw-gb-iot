import { Box } from "@chakra-ui/react";
import React from "react";

function Home() {
    return (
        <>
            <Box
                bgImage={"./res/joshua-sortino-LqKhnDzSF-8-unsplash.jpg"}
                backgroundPosition={"center"}
                backgroundSize={"cover"}
                >
                <Box pt={"4%"} h={'60vh'}  backdropFilter="auto" backdropBlur={"8px"}>
                <Box bgGradient={"linear(to-t, rgba(30,34,37,1) 25%, transparent)"} h={'100%'}/>
                </Box>
                
            </Box>
            <Box 
            bg={'rgb(30,34,37)'}
            h={'100vh'}
            >
                z
            </Box>

            
        </>
    );
}

export default Home;
