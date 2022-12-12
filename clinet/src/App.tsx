import * as React from "react"
import {
  ChakraProvider,
} from "@chakra-ui/react"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from "./components/Header/Nav"
import Home from "./components/home/Home"
import AboutUs from "./components/pages/aboutus/AboutUs"

export const App = () => (
  <ChakraProvider>
    <Nav />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs/>}/>
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
)
