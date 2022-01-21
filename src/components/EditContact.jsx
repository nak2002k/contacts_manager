import React from 'react';
import { Link,useParams } from 'react-router-dom';

const EditContact = () => {
    const {id} = useParams();
  return <div className='container'>
  <h1 className='display-3 my-5  text-center'>
      Edit Contact {id}
    </h1>
<div className='row'>

  
  <div className='col-md-6 shadow mx-auto p-5'>
      <form>
          <div className='form-group'>
              <input type="text" placeholder='Name' className='form-control'/>
          </div>
          <div className='form-group'>
              <input type="email" placeholder='Email'className='form-control'/>
          </div>
          <div className='form-group'>
              <input type="number" placeholder='Phone number'className='form-control'/>
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

</div>;
};

export default EditContact;
