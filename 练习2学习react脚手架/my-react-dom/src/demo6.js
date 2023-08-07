import React,{Component} from 'react';

let getPoition = (e)=>{
 // console.log(e)
 return <p>{e.x}-高阶组件--{e.y} ---- 组件的参数----{e.aaa}</p>
}
 function withMouse(WrappedComponent){
  class Mouse extends Component{
   state = {
       x: 0,
       y:0
    }
    handleMouseMove = e=>{
        this.setState({
           x:e.clientX,
           y:e.clientY
        })
    }
    componentDidMount(){
       window.addEventListener('mousemove',this.handleMouseMove)
     }
    shouldComponentUpdate(nextProps,nextState){
     // console.log(nextProps,nextState)
     // console.log(this.state)
     return nextProps ===  nextProps
    }
    compoentWillUnmount(){
       window.remove.EventListener('mousemove',this.handleMouseMove)
    }
    render(){
     // console.log(this.props)
     return (<WrappedComponent {...this.state} {...this.props} />)
    }
  }
  Mouse.displayName = `withMouse${getDisplayName(WrappedComponent)}`
  return Mouse
}
function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}
let hello6 = withMouse(getPoition)
export default hello6