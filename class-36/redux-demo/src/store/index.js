import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import myCounterReducer from './Votes'; // this is the reducer function 
// import shihab from './Votes';

// import campaign from './Campaign'

let reducers = combineReducers({
    myCounterReducer: myCounterReducer,
    // campaign:campaign
})

const store = () => {
    return createStore(reducers, composeWithDevTools())
}

export default store();

