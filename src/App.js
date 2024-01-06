import React from 'react';
import Home from './Components/Home/Home'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';
import Calci from './Components/Calculator/Calci';
import './App.css';
import 'animate.css';

function App() {
    return (
        <ChakraProvider>
            <Router>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/calculator' element={<Calci/>}/>
                </Routes>
            </Router>
        </ChakraProvider>
    )
}

export default App
