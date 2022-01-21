import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import AddContact from './components/AddContact';
import EditContact from './components/EditContact';
import Home from './components/Home';
import Navbar from './components/Navbar';

const App = ()=> {
  return (
    <div className="App">
      <ToastContainer/>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/
        >
          
        <Route path="/add"element={<AddContact/>}/>
        <Route path="/edit/:id"element={<EditContact/>}/>
        
      
    {/* <h1>hello</h1> */}
    </Routes>
    </div>
    
  );
}

export default App;
