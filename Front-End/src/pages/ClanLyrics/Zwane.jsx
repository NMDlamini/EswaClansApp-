/**Source code of Zwane clan page */

import Clans from "../Clans"
import Header from "../header"

/**Zwane function creates/returns the Zwane clan page, as will be displayed in web browser
 * It contains header component, clans-navigation component and lyrics-to-Zwane component
 */
export default function Zwane() {
    return(
        <>
        <Header/>
        <div className='vipflexbox'>
    <Clans/>
    <div className="lyrics">
 
        <h1 className="surname">Zwane</h1>
    <p>
    zwane , mangweni, zikodze, shangase, <br></br>
    mangweni loluhlata njengencoshane, <br></br>
    nselendvuna , nsele yemangweni, <br></br>
    tfwalatfwala sensele, wena watfwala silo sensele , <br></br>
    wena wad la insele kantsi wasenseleni, <br></br>
    lindzumkhontfo , wena wamafu akalingani ngaphansi nangetulu , <br></br>
    wena wejojo kaMangetse, Mangetse waNtje.nteka, shobane, <br></br>
    nibahle boZwane nmJengetinkhwapha tetimphala na liyoshona lilanga 
    </p>
    </div>
    </div>
    </>
    )
}