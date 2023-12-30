/**Source code of Shongwe clan page */

import Clans from "../Clans"
import Header from "../header"

/**Shongwe function creates/returns the Shongwe clan page, as will be displayed in web browser
 * It contains header component, clans-navigation component and lyrics-to-Shongwe component
 */
export default function Shongwe() {
    return(
        <>
        <Header/>
        <div className='vipflexbox'>
    <Clans/>
    <div className="lyrics">
    
        <h1 className="surname">Shongwe</h1>
    <p>
    shongwe, kunene , mntimandze , <br></br>
    akuvalwa ngemahlahla , kuvalwa ngemakhandza emadvodza <br></br>
    (NOMA sibiya ngenkomo , abafokozana babiya ngamahlahla) <br></br>
     ndaba wakomkhulu, mtshekula onjengethole , wena wakaMgokolwane 
    </p>
    </div>
    </div>
    </>
    )
}