import {put, takeEvery, call} from 'redux-saga/effects'
import axios from "axios";
import {addManyCustomersAction, FETCH_USERS} from "../store/customers-reducer";

const fetchUser = e => axios.get("https://jsonplaceholder.typicode.com/users")
function* fetchUsersWorker() {
    const datum = yield call(fetchUser)
    console.log(datum.data)
    yield put(addManyCustomersAction(datum.data))
}

export function* userWatcher() {
    yield takeEvery(FETCH_USERS, fetchUsersWorker)
}