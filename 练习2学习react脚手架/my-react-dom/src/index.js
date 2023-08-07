import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './demo.css';
import Hello from './demo.js';
import { BrowserRouter as Router,Routes,Route,Link,RouterProvider } from "react-router-dom";
import router from "./router/index.js";

const root = ReactDOM.createRoot(document.getElementById('root'));

let getFun = (e)=>{
 console.log(e)
}

// let router = <Router>
//            <Link to="/hello">
//              首页
//            </Link>
//            <Routes>
//              <Route path='/hello' element={<Hello />}></Route>
//            </Routes>
//           </Router>
root.render(
 // router
 <RouterProvider router={router} />
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
