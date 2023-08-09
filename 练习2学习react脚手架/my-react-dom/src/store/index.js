// src/store/index.js
// import { legacy_createStore as createStore } from 'redux';这个写法是防止vscode报警告；
import { legacy_createStore as createStore } from 'redux';
import rootReducer from './reducers'; // 导入根Reducer

const store = createStore(rootReducer);

export default store;
