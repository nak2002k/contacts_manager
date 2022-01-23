import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link,useNavigate,useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditContact = () => {
        const[name,setName] = useState("");
        const[email,setEmail] = useState("");
        const[number,setNumber] = useState("");
    const {id} = useParams();
    const contacts = useSelector(state=>state
    )
    const dispatch = useDispatch();
    const history = useNavigate();
    const currentContact = contacts.find(
        (contact) => contact.id === parseInt(id)
      );
      useEffect(()=>{
          if (currentContact){
              setName(currentContact.name)
              setEmail(currentContact.email)
              setNumber(currentContact.number)
          }
        

      }, [currentContact])

      const handleSubmit = (e)=>{
        e.preventDefault();
        const checkEmail=contacts.find(contact=> contact.id !== parseInt(id) && contact.email===email &&email);
        const checkNumber=contacts.find(contact=> contact.id !== parseInt(id) &&  contact.number===parseInt(number) );
        if (!email || !number || !name){
            return toast.warning("Please fill in all details")
        }
        if (checkEmail){
            return toast.error("This email already Exists!");
    
        }
        if (checkNumber){
            return toast.error("This number already Exists!");
    
        }
        const data={
            id: parseInt(id),
            name,
            email,
            number,
        }
       dispatch({type:"UPDARE_CONTACT",payload:data});
       toast.success("Contact updated added Successfully!")
       history ("/")
       
    }
     
  return <div className='container'>
  <h1 className='display-3 my-5  text-center'>
      Edit Contact {id}
    </h1>
<div className='row'>

  
  <div className='col-md-6 shadow mx-auto p-5'>
      <form onSubmit={handleSubmit}>
          <div className='form-group'>
              <input type="text" placeholder='Name' className='form-control'
               value={name} onChange={e=>setName(e.target.value)}/>
          </div>
          <div className='form-group'>
              <input type="email" placeholder='Email'className='form-control'
               value={email} onChange={e=>setEmail(e.target.value)}/>
          </div>
          <div className='form-group'>
              <input type="number" placeholder='Phone number'className='form-control'
               value={number} onChange={e=>setNumber(e.target.value)}/>
          </div>
          <div className='form-group'>
              <input type="submit" value='Update contact'className='btn  btn-dark m-2'/>
          </div>
          <div className='form-group'>
              <Link to ="/" className='btn btn-dark btn-danger  ml-3'> Cancel </Link>
          </div>
        </form>
  </div>  
</div>
</div>

};

export default EditContact;
