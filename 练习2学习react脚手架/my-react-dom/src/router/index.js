import { BrowserRouter as Router,Routes,Route,createBrowserRouter } from "react-router-dom";
import Demo1 from "../demo1.js";
import Demo from "../demo.js";

let router = createBrowserRouter([
 {
  path: "/",
  element:(<Demo1 />)
 },
 {
  path: "/demo",
  element:(<Demo />)
 }
])

export default router
// (<Router>
//   <Routes>
//     <Route path='/' element={<Demo1 />}></Route>
//     <Route path='/demo' element={<Demo />}></Route>
//     <Route path='*' element={<div>没有页面</div>}></Route>
//   </Routes>
// </Router>)