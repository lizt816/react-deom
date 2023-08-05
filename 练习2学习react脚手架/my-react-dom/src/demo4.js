import React from 'react';
import Hello5 from './demo5.js';
class Hello extends React.Component {
  state = {
   count:0,
  }
 render(){
  return (
      <div style={{background:'pink',padding:'20px'}}>
        <div>222隔开的组件</div>
        <Hello5></Hello5>
      </div>
    )
 }
}
export default Hello