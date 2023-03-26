import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import {Route,Routes} from 'react-router-dom'
import React from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar';
import About from '../src/pages/About'
import Contact from './pages/Contact'
import Blogs from './pages/Blogs'
import Services from './pages/Service'
import LogIn from './pages/LogIn';

function App() {
  return (
    <div className="App">
              <Navbar></Navbar>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/login" element={<LogIn/>}/>



        {/* <Route path="/cart" element={<Cart />} /> */}
        </Routes>
         </div>
  );
}

export default App;
