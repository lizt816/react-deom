// src/store/actions.js
// 定义Action Types
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

// 定义Action Creators
export const increment = () => ({ type: INCREMENT});
export const decrement = (value) => ({ type: DECREMENT,count:value});