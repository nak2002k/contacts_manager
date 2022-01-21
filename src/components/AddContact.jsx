import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const AddContact = () => {
    const[name,setName] = useState("");
    const[email,setEmail] = useState("");
    const[number,setNumber] = useState("");
   
    const contacts = useSelector((state)=>state);
    const checkEmail=contacts.find(contact=> contact.email===email &&email);
    const checkNumber=contacts.find(contact=> contact.number===parseInt(number) );
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (!email || !number || !name){
            return toast.warning("Please fill in all details")
        }
        if (checkEmail){
            return toast.error("This email already Exists!");
    
        }
        if (checkNumber){
            return toast.error("This number already Exists!");
    
        }
    }
    
  return <div className='container'>
      <h1 className='display-3 my-5  text-center'>
          Add Contact
        </h1>
  <div className='row'>

      
      <div className='col-md-6 shadow mx-auto p-5'>
          <form onSubmit={handleSubmit}>
              <div className='form-group'>
                  <input type="text" placeholder='Name' 
                  className='form-control'
                  value={name} onChange={e=>setName(e.target.value)}/>
              </div>
              <div className='form-group'>
                  <input type="email" placeholder='Email'
                  className='form-control'
                  value={email} onChange={e=>setEmail(e.target.value)}/>
              </div>
              <div className='form-group'>
                  <input type="number" placeholder='Phone number'
                  className='form-control'
                  value={number} onChange={e=>setNumber(e.target.value)}/>
              </div>
              <div className='form-group'>
                  <input type="submit" value='Add contact'
                  className='btn btn-block btn-dark m-2'/>
              </div>
            </form>
            
      </div>
  </div>

</div>;
};
  
export default AddContact;
