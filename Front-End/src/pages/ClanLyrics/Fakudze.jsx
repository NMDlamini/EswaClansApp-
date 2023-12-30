/**Source code of Fakudze clan page */

import Clans from "../Clans";
import Header from "../header";

/**Fakudze function creates/returns the Fakudze clan page, as will be displayed in web browser
 * It contains header component, clans-navigation component and lyrics-to-Fakudze component
 */
export default function Fakudze() {
    return(
        <>
        <Header/>
        <div className='vipflexbox'>
     
     <div>
     <Clans/>
     </div>
     
      <div className="lyrics">
    
     <h1 className="surname">Fakudze</h1>
     <p>
     akudze , mntolo , mayisandzaba enkhos ini, <br></br>
    mphotolozi , inkhaba leyashona emabhod leleni, <br></br>
    ndzaba lomuhle lotifungako lonjengenkhosatane <br></br>
     </p>
      </div>

    </div>
    </>
    )
}