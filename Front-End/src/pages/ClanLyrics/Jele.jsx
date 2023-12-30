/**Source code of Jele clan page */

import Clans from "../Clans";
import Header from "../header";

/**Jele function creates/returns the Jele clan page, as will be displayed in web browser
 * It contains header component, clans-navigation component and lyrics-to-Jele component
 */
export default function Jele() {
    return(
        <>
        <Header/>
        <div className='vipflexbox'>
     
     <div>
     <Clans/>
     </div>
      <div className="lyrics">
 
     <h1 className="surname">Jele</h1>
     <p>
     X Ngubeni X Nkomo  <br></br>
    jele, luvuno, nabogasa ngubo yengwe yesilwane, <br></br>
    khokhotela lelinjengelingcina lidla ligucile, <br></br>
    mnguni wasentasi kaZwide walanga 
     </p>
      </div>

    </div>
    </>
    )
}