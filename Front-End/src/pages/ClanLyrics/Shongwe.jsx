/**Source code of Shongwe clan page */

import Clans from "../Clans"
import Header from "../header"
import {useEffect} from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import {useCookies} from "react-cookie";

/**Shongwe function creates/returns the Shongwe clan page, as will be displayed in web browser.
 * It contains header component, clans-navigation component and lyrics-to-Shongwe component,
 * and a verifyUser function that makes use of react hooks useNavigate, useCookes and useEffect*/
export default function Shongwe() {

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

    return(
        <>
        <Header/>
        <div className='vipflexbox'>
    <Clans/>
    <div className="lyrics">
    
        <h1 className="surname">Shongwe</h1>
    <p>
    shongwe, kunene , mntimandze , <br></br>
    akuvalwa ngemahlahla , kuvalwa ngemakhandza emadvodza <br></br>
    (NOMA sibiya ngenkomo , abafokozana babiya ngamahlahla) <br></br>
     ndaba wakomkhulu, mtshekula onjengethole , wena wakaMgokolwane 
    </p>
    </div>
    </div>
    </>
    )
}