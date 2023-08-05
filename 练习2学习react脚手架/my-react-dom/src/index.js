import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './demo.css';
import Hello from './demo.js';
const root = ReactDOM.createRoot(document.getElementById('root'));

let getFun = (e)=>{
 console.log(e)
}

root.render(
 <div>
  <Hello name='123' getFun={getFun} />
  <div style={{'paddingBottom':'80px'}}></div>
 </div>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
