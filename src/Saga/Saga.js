import {all} from 'redux-saga/effects'
import {countWatcher} from "./CountSaga";
import {userWatcher} from "./UsersSaga";

export function* rootWatcher() {
    yield all([
        countWatcher(),
        userWatcher(),
    ])
}