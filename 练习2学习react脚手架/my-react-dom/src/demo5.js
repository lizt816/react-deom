import React from 'react';
class Hello extends React.Component {
  state = {
   count:0,
  }
 render(){
  return (
      <div style={{background:'#00990d',padding:'20px'}}>
        <div>333孙级组件</div>
      </div>
    )
 }
}
export default Hello