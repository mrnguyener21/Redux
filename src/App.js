import React, { useState } from 'react';
import { increment, decrement, add, subtract, save, remove } from './actions'
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
    const counter = useSelector((state) => state.counter); // Select what do you want from the Store
    const results = useSelector((state)=> state.results);
    const dispatch = useDispatch(); // Preparing to dispatch some actions
    const [number, setNumber] = useState(0);

    return (
        <div className="container">
            {/* <input placeholder='number' value={number} onChange={(event) => setNumber(event.target.value)} /> */}
            {/* <button onClick={() => dispatch(subtract(number))}>Subtract {number}</button> */}
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <h1>{counter}</h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            {/* <button onClick={() => dispatch(add(number))}>Add {number}</button> */}
            <button onClick={() => dispatch(save(counter))}>SAVE</button>
            <ul>
                {results.map((result, i) => <li onClick={() => dispatch(remove(i))} key={i}>{result} - {i}</li>)}
            </ul>
        </div>
    );
}

export default App;

// MAKE USE OF A COUNTER VARIABLE IN OTHER COMPONETNS, SOMEHWERE ELSE.

// TAKE SOMETHING FROM THE GLOBAL STORE => useSelector Hook (coming from react-redux)
// UPDATE/DISPATCH SOMETHING TO THE STATE => useDispatch Hook (coming from react-redux)

// Reducer is a function that accepts a state and an action as params and return a new state
// Then, based on the action.type it (! DOESEN'T change the state !)
// Then, based on the action.type it return a NEW STATE.

// THE STATE CAN NOT BE MUTATED.

// we need to have default state.