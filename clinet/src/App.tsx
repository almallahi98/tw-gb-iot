import * as React from "react"
import {
  Box,
  ChakraProvider,
 
} from "@chakra-ui/react"
import Nav from "./components/Header/Nav"
import Home from "./components/home/Home"

export const App = () => (
  <ChakraProvider>
    <Box>
      <Nav/>
      <Home/>
    </Box>
  </ChakraProvider>
)
