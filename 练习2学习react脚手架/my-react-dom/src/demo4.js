import PropsTypes from 'prop-types'

let Hello4 = ()=>{
 return (
     <div style={{padding:'20px'}}>
      <Hello4_1 colors={[]}></Hello4_1>
     </div>
   )
}

let Hello4_1 = (props)=>{
 // console.log(props)
 return (
     <div style={{padding:'20px'}}>
      4-1----- {props.children}
     </div>
   )
}

Hello4_1.propTypes = {
 colors:PropsTypes.array
}
export default Hello4