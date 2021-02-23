import * as types from '../actions/types'

const initialState = {
    signUpResponse: '',
}

export default function authReducer (state = initialState, action) {
    switch (action.type) {
        case types.SIGN_UP:
            return {...state, isLoaded: true}
        case types.SIGN_UP_SUCCESS: 
            return {...state, isLoaded: false, signUpResponse: action.payload}
        case types.SIGN_UP_FAILED:
            return {...state, isLoaded: false, error: action.error}
        default:
            return state;
    }
}
