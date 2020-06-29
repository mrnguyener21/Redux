
// Reducer is a function that accepts a state and an action as params and return a new state
// Then, based on the action.type it (! DOESEN'T change the state !)
// Then, based on the action.type it return a NEW STATE.

// THE STATE CAN NOT BE MUTATED.

// we need to have default state.

import { v4 as uuidv4 } from 'uuid';
import { STORE_RESULT, REMOVE_RESULT } from '../constants/actionTypes';


export default (state = [], action) => {
    switch (action.type) {
        case STORE_RESULT: return [...state, { value: action.payload, id: uuidv4() }];
        case REMOVE_RESULT: return state.filter((result) => result.id !== action.payload);
        default: return state;
    }
}