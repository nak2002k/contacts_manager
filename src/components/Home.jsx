import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Home = () => {
    const contacts = useSelector(state=>state);
  return <div className='container'>
      <div className='row'>

          <div className='col-md12 my-5 text-right'>
              <Link to="/add" className='btn btn-outline-dark'>Add Contact</Link>
          </div>
          <div className='col-md-10 mx-auto'>
              <h1>Welcome to the Contacts Manager</h1>
              <table className='table table-hover'>

                  <thead className='text-white bg-dark text-center mr-4'>
                      <tr>
                          <th scope='col'>#</th>
                          <th scope='col'>Name</th>
                          <th scope='col'>Email</th>
                          <th scope='col'>Number</th>
                          <th scope='col'>Action</th>
                      </tr>
                  </thead>
                  <tbody>
                      {
                          contacts.map((contact,id)=>(
                              <tr>
                                  <td>{id+1}</td>
                                  <td>{contact.name}</td>
                                  <td>{contact.email}</td>
                                  <td>{contact.number}</td>
                                  <td>
                                  <Link to={{pathname: `/edit/${contact.id}` }} className='btn btn-small btn-primary'>Edit</Link>
                                      <button type='button' className='btn btn-small btn-danger m-1'>Delete</button>
                                  </td>
                              </tr>
                          ))
                      }
                  </tbody>
              </table>
          </div>
      </div>

  </div>;
};

export default Home;
