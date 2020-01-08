import {fetchData, ageUpAsync, ageDownAsync, logger} from "./saga";
import {takeLatest, all, takeEvery } from 'redux-saga/effects';
import {actionTypes} from "../store/actions";

export function* watchAgeUp() {
  yield takeLatest(actionTypes.AGE_UP, ageUpAsync)
}

export function* watchAgeDown() {
  yield takeLatest(actionTypes.AGE_DOWN, ageDownAsync)
}

function* watchFetchData() {
  yield takeLatest(actionTypes.FETCH_PLACEHOLDER_REQUEST, fetchData);
}

function* watchAndLog() {
  yield takeEvery('*', logger)
}

export function* rootSaga() {
  yield all([
    watchAgeUp(),
    watchAgeDown(),
    watchFetchData(),
    watchAndLog(),
  ])
}