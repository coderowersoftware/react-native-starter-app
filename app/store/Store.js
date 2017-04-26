/**
 * Created by garima.kaila on 2017-04-14.
 */

import {createStore, applyMiddleware} from 'redux';
import reducers from '../reducers';
import thunk from 'redux-thunk';

const store = createStore(reducers, applyMiddleware(thunk));
console.log(store.getState());
console.log("Ishaan");
export default store;

