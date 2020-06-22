// Reducer is a function that accepts a state and an action as params and return a new state
// Then, based on the action.type it (! DOESEN'T change the state !)
// Then, based on the action.type it return a NEW STATE.

// THE STATE CAN NOT BE MUTATED.

// we need to have default state.

export default (counter = 0, action) => {
    switch (action.type) {
        case 'INCREMENT': return counter + 1;
        case 'DECREMENT': return counter - 1;           
        default: return counter;
    }
}

