import * as React from "react"
import {
  ChakraProvider,
} from "@chakra-ui/react"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from "./components/Header/Nav"
import Home from "./components/home/Home"
import AboutUs from "./components/pages/aboutus/AboutUs"
import DashBord from "./components/pages/dashbord/dash/DashBord"
import NodeEdit from "./components/pages/dashbord/NodeEditPage/NodeEdit"

export const App = () => (
  <ChakraProvider>
    
    <BrowserRouter>
    <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/dash" element={<DashBord/>}/>
        <Route path="/edit/:id" element={<NodeEdit/>}/>
      </Routes>
    </BrowserRouter>
  </ChakraProvider>
)
