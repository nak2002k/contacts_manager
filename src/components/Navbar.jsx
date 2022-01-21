import React from 'react';
import {  Link } from 'react-router-dom';

const Navbar = () => {
  return <nav className='nabbar navbar-expand-lg navbar-dark bg-dark py-2'>
      <Link to="/" className='navbar-brand m1-5'>
          Contacts Manager</Link>
       


  </nav>
  
};

export default Navbar;
