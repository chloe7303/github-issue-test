import { legacy_createStore as createStore } from 'redux';
import allReducers from './allReducers';

const store = createStore(allReducers);

// console test
store.subscribe(() => console.log(store.getState()));

export default store;
