// Action - An object that contains a type property and can also contain payload.
// Action Creator - A function that returns an action.
import { INCREMENT, DECREMENT, ADD, SUBTRACT, STORE_RESULT, REMOVE_RESULT } from '../constants/actionTypes';

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const add = (number) => ({ type: ADD, payload: number });
export const subtract = (number) => ({ type: SUBTRACT, payload: number });
export const save = (counter) => ({ type: STORE_RESULT, payload: counter });
export const remove = (result) => ({ type: REMOVE_RESULT, payload: result });

// COMPONENT (Person adding the address) => ACTION (Letter) => DISPATCH (Mail it) => REDUCER (Post Office)

