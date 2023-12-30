/*Source code for creating our react-app */

/*group of imports used within code */
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import 'react-bootstrap';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));  
root.render(
  <React.StrictMode>
  
    < App/>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: h ttps://bit.ly/CRA-vitals
/** reportWebVitals(); **/      //excluded fuction      
