import { combineReducers } from 'redux';
import auth from './authReducer'
import kitchen from './kitchenReducer'
import restaurants from './restaurantsReducer'

export default combineReducers({
    auth,
    kitchen,
    restaurants
})