import {createStore, combineReducers, compose, applyMiddleware} from 'redux'

//Reducers
import restListReducer from '../Reducers/restlistReducer'

const AllReducers = combineReducers({
    restList: restListReducer
})

let composeEnhancers = compose;

if(__DEV__){
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}
export default configStore = () =>{
    return createStore(AllReducers, composeEnhancers())
}