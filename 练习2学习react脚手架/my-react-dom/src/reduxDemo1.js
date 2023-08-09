import React from 'react';
import axios from 'axios';
// import WithRouter from './router/withRouter';
import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './store/actions';

// 静态的函数写在普通函数内
function Namesss(props) {
 const navigate = useNavigate();
 let state = props.state

 const count = useSelector((state) => state.counter.count);
 console.log(count)
 const dispatch = useDispatch();

 let goLink = (e)=>{
  navigate('/demo?name=11224')
 }
 let goLink2 = (e)=>{
  navigate('/?id='+e)
 }
 return(
  <div>
    <div onClick={props.goLink}>加值, <span>{state.aaa}</span> </div>
    <div onClick={goLink}>跳转</div>
    <div onClick={()=>goLink2('1425')}>跳转redux带参数</div>
    <div onClick={() => dispatch(increment())}>redux: 点击改变++：{count}</div>
    <div onClick={() => dispatch(decrement(123))}>redux: 点击改变为传入的值--：{count}</div>
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
   // console.log(navigator.geolocation.getCurrentPosition)
   navigator.geolocation.getCurrentPosition(position=>{
    // console.log("123465",position)
   },error=>{
    // console.log(error)
   })
   axios.get('https://jsonplaceholder.typicode.com/posts').then(res=>{
    // console.log(res)
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