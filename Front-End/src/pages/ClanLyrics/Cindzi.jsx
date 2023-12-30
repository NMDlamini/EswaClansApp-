/**Source code of Cindzi clan page */

import Clans from "../Clans";
import Header from "../header";

/**Cindzi function creates/returns the Cindzi clan page, as will be displayed in web browser
 * It contains header component, clans-navigation component and lyrics-to-Cindzi component
 */
export default function Cindzi() {
    return(
        <>
        <Header/>
        <div className='vipflexbox'>
        <Clans/>
    
    <div className="lyrics">
    
        <h1 className="surname">Cindzi</h1>
    <p>
    XMaseko XX <br></br>
    cindzi, maseko, masekwane, nabonkhosi, <br></br>
    nabogana kaMlambo, nabonkhosi wetiveni , tigewu tatsabane 
    </p>
    </div>
    </div>
    </>
    )
}