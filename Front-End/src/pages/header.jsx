/**Source code for the header component/section of our react-app in the vip home page and the clan pages */

/*group of imports used within code */
import React from "react";
import { useNavigate } from "react-router-dom"
import { useCookies} from "react-cookie";
import { Link } from "react-router-dom";

/**Header function creates/returns structure of header section as will be displayed in web browser.
 * It contains useNavigate and useCookies hooks and a logOut function*/
export default function Header (){

    const navigate = useNavigate();

    const [cookies, removeCookie] = useCookies([]);

/*logOut function deletes user's web-session id and subsequently navigates to login page */
    const logOut = () => {
        removeCookie("jwt");
        navigate("/");
    }
    return(
        <div className='header'> <Link to="/vip"><h4>Swati Clans</h4></Link>
    <button onClick={logOut}>Sign Out</button>
    </div>
    )
}