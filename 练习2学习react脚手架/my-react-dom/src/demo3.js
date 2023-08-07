import React from 'react';


const {Provider,Consumer} = React.createContext()

let Hello = ()=> {
  return (
      <Provider value='1*-vlue12456456---*2456'>
        <div style={{background:'red',padding:'20px'}}>
          <div>111兄弟2{}</div>
            <Hello4></Hello4>
        </div>
      </Provider>
    )
}

class Hello4 extends React.Component {
 state = {
  count:0,
 }
render(){
 return (
       <div style={{background:'#fff',padding:'20px'}}>
        444
        <Hello5></Hello5>
       </div>
   )
 }
}

class Hello5 extends React.Component {
 state = {
  count:0,
 }
render(){
 return (
       <div style={{background:'#00990d',padding:'20px'}}>
        555
         <Consumer>
         {
          (value) => <span>---{value}---</span>
         }
        </Consumer>
       </div>
   )
 }
}

export default Hello