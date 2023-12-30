/**Source Bhembhe clan page*/

import Clans from "../Clans";
import Header from "../header";

/**Bhembhe function creates/returns the Bhembhe clan page, as will be displayed in web browser
 * It contains header component, clans-navigation component and lyrics-to-Bhembhe component
*/
export default function Bhembhe() {                   
    return(
        <>
        <Header/>
        <div className='vipflexbox'>
     
     <div>
     <Clans/>
     </div>
     
      <div className="lyrics">
     <h1 className="surname">Bhembhe</h1>
     <p>
     bhembe, mavundla, mgabhi , wakhota, <br></br>
    mnteni loluhlata lonjengencoshane, <br></br>
    sinuka kamnandzi njengesindvwane,  <br></br>
    nabondlovu, nabondangalazela bangwane, <br></br>
    ndlovu ayisitsi layihambe khona ngayitolo <br></br>
    dlani lilunga, mine ngidle lugaba, <br></br>
    wabhodla ebusweni benkhosi , yangete yasho lutfo
     </p>
      </div>

    </div>
    </>
    )
}