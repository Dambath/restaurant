import { all } from 'redux-saga/effects';
import { authSaga } from './authSaga';
import {kitchenSaga} from './kitchenSaga';
import {restaurantsSaga} from './restaurantsSaga'

export default function* rootSaga() {
    yield all([
        authSaga(),
        kitchenSaga(),
        restaurantsSaga()
    ])
}