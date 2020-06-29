import { combineReducers } from 'redux';

import counter from './counter';
import results from './results';

const allReducers = combineReducers({ counter, results });

export default allReducers;