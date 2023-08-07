import React from 'react';


class Hello5 extends React.Component{
 state = {
  c:0
 }
 render(){
   let changec = ()=>{
    this.setState({
     c:this.state.c+1
    })
   } 
   // console.log('更新dom就会触发')
   return (
     <div style={{background:'pink',padding:'20px'}}>
      生命周期
      <div onClick={changec}>点击触发更新 --- {this.state.c}</div>
      { this.state.c < 3 ? <Hellosss></Hellosss> : '????' }
     </div>
   )
 }
 componentDidMount(e){
  // console.log(e,'挂载完毕')
 }
 componentDidUpdate(e){
  // console.log(e,'更新完毕')
 }
 componentWillUnmount(e){
  // console.log(e,'卸载完毕')
 }
}

class Hellosss extends React.Component{
 render(){
   return (
     <div style={{background:'#ccc',padding:'20px'}}>
      卸载
     </div>
   )
 }
 componentWillUnmount(e){
  // console.log(e,'卸载完毕')
 }
}

export default Hello5