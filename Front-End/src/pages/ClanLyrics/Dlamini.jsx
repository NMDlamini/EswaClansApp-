/**Source code of Dlamini clan page */

import Clans from "../Clans";
import Header from "../header";

/**Dlamini function creates/returns the Dlamini clan page, as will be displayed in web browser
 * It contains header component, clans-navigation component and lyrics-to-Dlamini component
 */
export default function Dlamini() {
    return(
        <>
        <Header/>
        <div className='vipflexbox'>
     <Clans/>
    
      <div className="lyrics">
    
     <h1 className="surname">Dlamini</h1>
     <p>
     (lokulandzelako kutawuvakala ebukhosini ) <br></br>
    nkhosi , dlamini , wena wekunene , wena lomuhle kakhulu, nkhosi <br></br>
    (emakhaya, bangahle bengeta lokulandzelako) <br></br>
    wena weluhlanga lwakaNgwane , hlubi, mlangeni , <br></br>
    wena lowacedza Lubombo ngekuhlehletela, <br></br>
    wabophela lokuhle emfuntini , <br></br>
    wena longayidli imvu , wesaba umcondvo nemafinyela 
     </p>
      </div>
    </div>
    </>
    )
}