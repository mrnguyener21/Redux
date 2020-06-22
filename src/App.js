import React from 'react';
import { increment, decrement } from './actions'
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    return (
        <div className="container">
            {/* CREATE SUBTRACT BUTTON THAT SUBTRACTS 5 FROM A COUNTER */}
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <h1>{counter}</h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            {/* CREATE ADD BUTTON THAT ADDS 5 TO A COUNTER */}
        </div>
    );
}

export default App;

// MAKE USE OF A COUNTER VARIABLE IN OTHER COMPONETNS, SOMEHWERE ELSE.

// TAKE SOMETHING FROM THE GLOBAL STORE => useSelector Hook (coming from react-redux)
// UPDATE/DISPATCH SOMETHING TO THE STATE => useDispatch Hook (coming from react-redux)