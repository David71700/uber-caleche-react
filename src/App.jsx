import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login';
import Profile from './components/Profile';
import Contact from './components/Contact';
import Selector from './components/Selector'
import Available from './components/Available';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        
        <Route path='/' element={<Home />}  />
         <Route
          path='/login'
          element={<Login />}
        />
        <Route path='/profile' element={<Profile />} />
        <Route path='/contact' element={<Contact />} />
         
         <Route path='/selector' element={<Selector />} /> 
         <Route path='/available' element={<Available />} /> 
      </Routes> 
        <Footer />
      
    </div>
  );
};

export default App;
