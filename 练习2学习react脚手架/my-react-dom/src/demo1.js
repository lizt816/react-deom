import React from 'react';
import axios from 'axios';
// import WithRouter from './router/withRouter';
import { useNavigate } from "react-router-dom";

// 静态的函数写在普通函数内
function Namesss(props) {
 const navigate = useNavigate();
 let state = props.state


 let goLink = ()=>{
  navigate('/demo')
 }
 return(
  <div>
    <div onClick={props.goLink}>加值, <span>{state.aaa}</span> </div>
    <div onClick={goLink}>跳转</div>
    {state.data.map(e=><div key={e.id}>{e.title}</div>)}
  </div>
 )
}


// 动态的数据写在class内
function myCoponent(MyComponent) {
 return class Hello1 extends React.Component {
  state = {
   aaa:0,
   data:[]
  }
  componentDidMount(){
   axios.get('https://jsonplaceholder.typicode.com/posts').then(res=>{
    console.log(res)
    this.setState({
     data:res.data
    })
   })
  }
  goLink = ()=>{
    this.setState({
     aaa:this.state.aaa+1
    })
  }
  render(){
   return (
       <MyComponent {...this}></MyComponent>
     )
   }
 }
}

let hello6 = myCoponent(Namesss)

export default hello6