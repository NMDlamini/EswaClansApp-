/*Source Code of Sign-In page of our react-app*/

import React from 'react';                     //imports of all functions and constants used in code
import { useState } from 'react';
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

/**SignIn function creates/returns the Sign-in page of our react app, as will be displayed in web browser
 *It contains react hooks useNavigate and useState, a handleSubmit function, and returns the sign-in page interface*/
export default function SignIn() {                  
  
  const navigate = useNavigate();                   //React hook navigates to a parsed link of our react-app

  const [values, setvalues] = useState({            //React hook stores and tracks/updates state of user input entered in sign-un form
    email:"",
    password:"",
  })

  const [errors, setErrors] = useState({            //React hook stores and tracks/updates state of errors from failed post requests
  });
  
 /**handleSubmit is an async function that handles event of clicking on the sign-in button
  *It contains preventDefault function and a try block that attempts a post request to the server*/
  const handleSubmit = async (e) => {               
    
    e.preventDefault();                             //cancels default response inside browser on sign-in button click
    
    try{                                                                    
      const {data} = await axios.post("http://localhost:4000/signin", {     //attempts post request to server and awaits response which will be stored on const data
        ...values,                                  //form user input is what's contained in post request
      },
      {
        withCredentials: true,                      //form input fields must not be empty 
      });
      console.log(data);                   
      if (data) {                          
        if (data.errors) {                          //conditional premise for a server response containing errors (failed post request)
         setErrors(data.errors);                    //updates state of errors in related hook
        } 
        else {                                      //conditional premise for a server response with no errors (successfull post request)
          navigate("/vip");                         //navigates react-app to vip page 
        }
      }
    }
    catch(errors){
    }
  }
  /**return contains structure of sign-in page interface which is the site theme and sign-in form 
   * all wrapped in react-bootstrap grid container*/
  return (                                          
    <>
    <Container>                         
    <Row className='loginPage'>
      
      <Col sm={6} md={6} lg={6} className='eswadesc'>
        <h1><br></br>
          Swati Clan Praises</h1>
        <br></br>
        <h4>Find accurate and fact-checked lyrics to clan praises of Swati clans.</h4> 
      </Col>
        
      <Col sm={6} md={6} lg={6}  className='logbox'>
    <form onSubmit={(e) => handleSubmit(e)}>
      <div>
        <input type='email' name='email' placeholder='Email' onChange={(e)=>
          setvalues({...values,[e.target.name]:e.target.value})} />
          {errors.email && <span className= 'text-danger'> {errors.email} </span>}
      </div>
      <div>
        <input type='password' name='password' placeholder='Password' onChange={(e)=>
        setvalues({...values,[e.target.name]:e.target.value})} />
        {errors.password && <span className= 'text-danger'> {errors.password} </span>}
      </div>
      <button type='submit'>Sign In</button>
      <span>
        Have no account? <Link to="/SignUp">Sign-up</Link>
      </span>
    </form>
    </Col>
    </Row>
  </Container>
  </>
  );
}