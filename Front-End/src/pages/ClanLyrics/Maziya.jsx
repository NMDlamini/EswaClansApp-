/**Source code of Khoza clan page */

import Clans from "../Clans";
import Header from "../header";
import {useEffect} from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom';
import {useCookies} from "react-cookie";

/**Maziya function creates/returns the Maziya clan page, as will be displayed in web browser
 * It contains header component, clans-navigation component and lyrics-to-Maziya component
 */
export default function Maziya() {

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
  
        <h1 className="surname">Maziya</h1>
    <p>
    maziya, mcanco, wena welangeni, <br></br>
    wena wacedza Lubombo ngekuhlehlete la, <br></br>
    phuma sikotse , ngubo yabolanga , mant sengwane, <br></br>
    waphuma phansi elubonjeni kalomahasha , <br></br>
    weta uvivile sikake lizinyane lengongoni , <br></br>
    umbetse emashoba etingongoni, <br></br>
    mlangeni, ninjengelif u lemvula , mtsimkhulu waselan geni 
    </p>
    </div>
    </div>
    </>
    )
}