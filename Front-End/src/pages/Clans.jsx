/**Source code of Clans function, i.e the side navigation menue bar listing clans in the vip home page and clan pages of our react-app*/

/*group of imports used within code */
import {Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css'

/*Clans function creates/returns structure of side navigation menue listing clans as will be displayed in web browser */
export default function Clans() {
return(
    
    <div>
        
    <nav>

       <h5>Clans</h5>
        <ul>
        <li> <Link to="/vip/bhembhe" >Bhembhe </Link> </li>
        <li> <Link to="/vip/cindzi" >Cindzi </Link> </li>
        <li> <Link to="/vip/dlamini" >Dlamini </Link> </li>
        <li> <Link to="/vip/fakudze" >Fakudze </Link> </li>
        <li> <Link to="/vip/jele" >Jele </Link> </li>
        <li> <Link to="/vip/khoza" >Khoza </Link> </li>
        <li> <Link to="/vip/maziya" >Maziya </Link> </li>
        <li> <Link to="/vip/nkhambule" >Nkhambule</Link> </li>
        <li> <Link to="/vip/shongwe" >Shongwe </Link> </li>
        <li> <Link to="/vip/zwane" >Zwane </Link> </li>
        </ul>

    </nav>   
    </div>
)
}