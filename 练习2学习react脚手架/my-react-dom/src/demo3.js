import React from 'react';

import Hello4 from './demo4.js';
class Hello extends React.Component {
  state = {
   count:0,
  }
 render(){
  return (
      <div style={{background:'red',padding:'20px'}}>
        <div>111兄弟2{this.props.xdddd}</div>
        <Hello4></Hello4>
      </div>
    )
 }
}
export default Hello