// Reducer is a function that accepts a state and an action as params and return a new state
// Then, based on the action.type it (! DOESEN'T change the state !)
// Then, based on the action.type it return a NEW STATE.

// THE STATE CAN NOT BE MUTATED.

// we need to have default state.
import { INCREMENT, DECREMENT, ADD, SUBTRACT } from '../constants/actionTypes';

export default (state = 0, action) => {
    switch (action.type) {
        case INCREMENT: return state + 1;
        case DECREMENT: return state - 1;           
        case ADD: return state + parseInt(action.payload);           
        case SUBTRACT: return state - parseInt(action.payload);          
        default: return state;
    }
}

