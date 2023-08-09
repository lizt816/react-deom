// src/store/reducers.js
import { combineReducers } from 'redux';
// 导入其他Reducers，比如：
import counterReducer from './counterReducer';

const rootReducer = combineReducers({
  // 在这里将所有的Reducers组合起来
  counter: counterReducer,
});

export default rootReducer;