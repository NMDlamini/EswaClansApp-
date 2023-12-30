/**Source code of Nkhambule clan page */

import Clans from "../Clans";
import Header from "../header";

/**Nkhambule function creates/returns the Nkhambule clan page, as will be displayed in web browser
 * It contains header component, clans-navigation component and lyrics-to-Nkhambule component
 */
export default function Nkhambule() {
    return(
        <>
        <Header/>
        <div className='vipflexbox'>
        <Clans/>
    <div className="lyrics">
   
        <h1 className="surname">Nkhambule</h1>
    <p>
    nkambule, msutfu , msutfu mswati , gasolo, mtilankhatsa, <br></br>
    malandzelalilanga na liyoshona emancubeni, <br></br>
    ncube lonsundvu ngetinyawo takho, wena wasenhla , <br></br>
    wena uyitsatsa inkhosi uyibeke enhlambelweni 
    </p>
    </div>
    </div>
    </>
    )
}