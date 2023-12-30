/**Source code of Khoza clan page */

import Clans from "../Clans"
import Header from "../header"

/**Khoza function creates/returns the Khoza clan page, as will be displayed in web browser
 * It contains header component, clans-navigation component and lyrics-to-Khoza component
 */
export default function Khoza() {
    return(
        <>
        <Header/>
        <div className='vipflexbox'>
    <Clans/>
    <div className="lyrics">
    
        <h1 className="surname">Khoza</h1>
    <p>
    1. (eMvembili H., Nelspruit District S. A.) <br></br>
    khoza, mabona, wenawasemandleni , <br></br>
    muzi awulandwa kulandwa ebeNguni , umkhonto uyifunela izitha ebumnyameni <br></br>
    wena owabona umuzi waseNgutjeni <br></br>
    2. (kalomahasha L, eMayiwane H )<br></br>
    khoza, mayisane , mhlane lomuhle lotondvwa batsakatsi, chawe lemachawe, <br></br>
    wena wabulala umuntfu enaganini kamandlakazi 
    </p>
    </div>
    </div>
    </>
    )
}