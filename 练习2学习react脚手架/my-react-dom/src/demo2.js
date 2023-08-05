import React from 'react';
class Hello extends React.Component {
  state = {
   count:0,
  }

  aaa = ()=>{
   this.props.myFun(this.props.xdddd+'88')
  }
 render(){
  return (
      <div>
        <div onClick={this.aaa}>兄弟1点击我{this.props.xdddd}</div>
      </div>
    )
 }
}
export default Hello