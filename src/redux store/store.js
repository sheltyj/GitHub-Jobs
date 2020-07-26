import {createStore, applyMiddleware} from 'redux'
import {jobsReducer} from './jobsReducer'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension' 

export const store = createStore(jobsReducer,composeWithDevTools(applyMiddleware(thunk)))