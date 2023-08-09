import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice.js'
console.log(counterReducer)
const store = configureStore({
 reducer: {
   counter: counterReducer, // 将你的 reducer 添加到根 reducer
 },
 // 可选的其他配置项
});

export default store