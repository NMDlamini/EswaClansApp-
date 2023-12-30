/**Source code of Khoza clan page */

import Clans from "../Clans";
import Header from "../header";

/**Maziya function creates/returns the Maziya clan page, as will be displayed in web browser
 * It contains header component, clans-navigation component and lyrics-to-Maziya component
 */
export default function Maziya() {
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