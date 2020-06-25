
// Reducer is a function that accepts a state and an action as params and return a new state
// Then, based on the action.type it (! DOESEN'T change the state !)
// Then, based on the action.type it return a NEW STATE.

// THE STATE CAN NOT BE MUTATED.

// we need to have default state.
        
export default (state = [], action) => {
    switch (action.type) {
        case 'SAVE': 'test'

        default: return state;
    }
}