import React from 'react';
import { useNavigate } from "react-router-dom";

class Hello1 extends React.Component {
 goLink = ()=>{
  // console.log(this.props.navigate,123456)
  console.log(this.props.history,123456)
  console.log(useNavigate(),123456)
  
 }
 render(){
  return (
      <div>
        <div onClick={this.goLink}>js跳转到指定路由</div>
      </div>
    )
  }
}
export default Hello1