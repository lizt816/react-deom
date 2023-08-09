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
 setCount = ()=>{
  this.setState({
   count:this.state.count+1
  })
 }
render(){
 return (
       <div style={{background:'#fff',padding:'20px'}}>
        444 {this.state.count}
        <Hello5 setCount={this.setCount}></Hello5>
       </div>
   )
 }
}

class Hello5 extends React.Component {
 state = {
  count:0,
 }
render(){
 console.log(this.props)
 return (
       <div onClick={this.props.setCount} style={{background:'#00990d',padding:'20px'}}>
        555  点击子传父
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