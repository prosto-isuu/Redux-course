import {put, takeEvery} from 'redux-saga/effects'
import {ADD_CASH_ASYNC, GET_CASH_ASYNC, addCashAction, addCashAsyncAction, decrementAction} from "../store/cash-reducer";
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))
function* incrementWorker() {
    yield delay(1000)
    console.log('delay')
    yield put(addCashAction())
}
function* decrementWorker() {
    yield delay(100)
    yield put(decrementAction())

}

export function* countWatcher() {
    yield takeEvery(ADD_CASH_ASYNC, incrementWorker);
    yield takeEvery(GET_CASH_ASYNC, decrementWorker)
}
