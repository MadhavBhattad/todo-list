import { combineReducers, createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { todoReducer } from './reducers/todoReducer.js'
import { tabReducer } from './reducers/tabReducer.js'

const reducer = combineReducers({
    todos: todoReducer,
    currentTab: tabReducer
})

const middleware = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;