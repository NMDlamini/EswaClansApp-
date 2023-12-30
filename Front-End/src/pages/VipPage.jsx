/**Code for Vip page of our react app */

import React from 'react';                           /**all imports used in code */
import 'bootstrap/dist/css/bootstrap.css';
import Clans from './Clans';
import Header from './header';
import {useEffect} from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import {useCookies} from "react-cookie";
import "react-toastify/dist/ReactToastify.css";

/**VipPage  function creates/returns the vip page of our react app, as will be displayed in web browser
 *It contains react hooks useNavigate, useCookes and useEffect, a verifyUser function, and returns the vip page interface*/
export default function VipPage() {                                           

  const navigate = useNavigate();                               //React hook navigates to a parsed link of our react-app  
  
  const [cookies, setCookie, removeCookie] = useCookies([]);    //React hook that manages Cookies
  
  /**VerifyUser is an async function that validates user's web session and
   * is wrapped inside useEffect hook to perform side effects*/
  useEffect(()=> {                                             
    const verifyUser = async () => {                
      if (!cookies.jwt){                                        //conditional premise that user's web session contains no session id 
        navigate("/");                                          //navigates react-app to sign-in page ()
      }
      else{
        const {data} = await axios.post("http://localhost:4000/vip",{}, {withCredentials:true});     //awaits response of http post resquest to server
          if (!data.status){                                    //condition premise that user's web session id does not match session id saved on the server
          removeCookie("jwt");                                  //deletes users invalid session id
          navigate("/");                                        //navigates to sign-in page
        }
      }
    };
    verifyUser();
  }, [cookies, navigate, removeCookie]);
  
  /**return contains structure of vip page interface which is made of three components
  * header component, clans component and lyrics component*/
  return (                                          
    <>
  <Header/>
  
  <div className='vipflexbox'>
  <Clans/>
  <div className='lyrics'>
    <br></br><br></br><br></br>
    Select a clan on the side navigation to  display its lyrics
  </div>
  </div>
    </>
  );
}
