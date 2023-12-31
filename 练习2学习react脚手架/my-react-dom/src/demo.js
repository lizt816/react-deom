import React from 'react';
import Hello2 from './demo2.js';
import Hello3 from './demo3.js';
import Hello4 from './demo4.js';
import Hello5 from './demo5.js';
import Hello6 from './demo6.js';

import { useNavigate } from "react-router-dom";


function Navigate(params) {
 const navigate = useNavigate();
 let golingk=(e)=>{
  navigate('/Redux?id='+e)
 }
 return (
  <div onClick={()=>golingk('987')} >点击我跳转</div>
 );
}


class Hello extends React.Component {
  state = {
   count:0,
   count2:'1',
   count3:true,
   arr:[111],
   xdddd:'123456',
  }
  reffff =  React.createRef()
  setCount = ()=>{
   this.setState({
    count:this.state.count+1
   })
  }

  handleForm = e =>{
    const target = e.target
    const value = target.type === 'checkbox' ? target.checked:target.value
    const name = target.name
    this.setState({
       [name]:value
    })
   }

   getDom = e=>{
    console.log(this.reffff.current)
   }
   addArr = e=>{
    let list = JSON.parse(JSON.stringify(this.state.arr)) 
    list.push("111")
    this.setState({
       arr:list
    })
   }
   changexdd = (e)=>{
    console.log(e,"eee")
    let aaa = JSON.parse(JSON.stringify(e))
    console.log(aaa)
    this.setState({
     xdddd:aaa
    })
   }
 render(){
  return (
      <div>
        <Navigate></Navigate>
        <div onClick={this.getDom} >点击我获取实例对象</div>
        <div onClick={this.addArr} >点击我添加arr</div>

        
        
        {this.state.arr.map((e,i)=><div key={i}>{e}</div>)}


        <input ref={this.reffff} name='count' value={this.state.count} onChange={this.handleForm} ></input>

        <select name='count2' value={this.state.count2} onChange={this.handleForm} >
         <option value='1'>111</option>
         <option value='2'>222</option>
         <option value='3'>333</option>
        </select>

        <input name='count3' type='checkbox' checked={this.state.count3} onChange={this.handleForm}></input>

        <div style={{'paddingBottom':'80px'}}></div>
        <Hello2 xdddd={this.state.xdddd} myFun={this.changexdd} />
        <div style={{'paddingBottom':'80px'}}></div>
        <Hello3 xdddd={this.state.xdddd} myFun={this.changexdd} />
        <div style={{'paddingBottom':'80px'}}></div>
        <Hello4 xdddd={this.state.xdddd} myFun={this.changexdd} />
        <div style={{'paddingBottom':'80px'}}></div>
        <Hello5 xdddd={this.state.xdddd} myFun={this.changexdd} />
        <div style={{'paddingBottom':'80px'}}></div>
        <Hello6 aaa={'123456'} />
      </div>
    )
 }
}





function App(props) {
  return (
   <h1>{props.name}</h1>
  )
 }

export default Hello