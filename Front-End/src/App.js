/**Source code for our react-app tree of routes or pages*/

/*all imports used in code */
import React from 'react';                                      
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'react-bootstrap';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import VipPage from './pages/VipPage';
import Bhembhe from './pages/ClanLyrics/Bhembhe';
import Cindzi from './pages/ClanLyrics/Cindzi';
import Dlamini from './pages/ClanLyrics/Dlamini';
import Fakudze from './pages/ClanLyrics/Fakudze';
import Jele from './pages/ClanLyrics/Jele';
import Khoza from './pages/ClanLyrics/Khoza';
import Maziya from './pages/ClanLyrics/Maziya';
import Nkhambule from './pages/ClanLyrics/Nkhambule';
import Shongwe from './pages/ClanLyrics/Shongwe';
import Zwane from './pages/ClanLyrics/Zwane';

/**function App creates/returns our react-app tree of 13 unique routes or pages */
export default function App() {
  return (
   <BrowserRouter>
    <Routes>
        <Route exact path='/signup' element={<SignUp />} />
        <Route exact path='/' element={<SignIn />} />
        <Route exact path='/vip' element={<VipPage />} />
        <Route exact path='/vip/bhembhe' element={<Bhembhe/>}/>
        <Route exact path='/vip/cindzi' element={<Cindzi/>}/>
        <Route exact path='/vip/dlamini' element={<Dlamini/>} />
        <Route exact path='/vip/fakudze' element={<Fakudze/>}/>
        <Route exact path='/vip/jele' element={<Jele/>}/>
        <Route exact path='/vip/khoza' element={<Khoza/>}/>
        <Route exact path='/vip/maziya' element={<Maziya/>}/>
        <Route exact path='/vip/nkhambule' element={<Nkhambule/>}/>
        <Route exact path='/vip/shongwe' element={<Shongwe/>}/>
        <Route exact path='/vip/zwane' element={<Zwane/>} />
    </Routes>
    </BrowserRouter>
  );
}