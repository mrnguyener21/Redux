import { combineReducers } from 'redux';
import counterReducer from './counter';
import resultReducer from './resultReducer';

const allReducers = combineReducers({
    counter: counterReducer,
    results: resultReducer,
});

export default allReducers;