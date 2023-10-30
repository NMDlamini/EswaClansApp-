import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import VipPage from './pages/VipPage'; 

export default function App() {
  return (
   //<div>fok</div>
    <BrowserRouter>
    <Routes>
        <Route exact path='/signin' element={<SignIn />} />
        <Route exact path='/signup' element={<SignUp />} />
        <Route exact path='/' element={<VipPage />} />
    </Routes>
    </BrowserRouter>
  );
}
