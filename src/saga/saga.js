import { put, take, select, takeEvery } from 'redux-saga/effects';
import {successPlaceholder, errorPlaceholder, actionTypes} from "../store/actions";

const delay = (ms) => new Promise(res => setTimeout(res, ms));
const DELAY = 1000;
export function* ageUpAsync(action) {
  yield delay(DELAY);
  yield put({
    type: actionTypes.AGE_UP_ASYNC,
    payload: 1,
  })
}

export function* ageDownAsync(action) {
  yield delay(DELAY);

  yield put({
    type: actionTypes.AGE_DOWN_ASYNC,
    payload: 1,
  })
}

export function* logger(action) {
  while (true) {
    const action = yield take('*');
    const state = yield select()

    console.log('action', action)
    console.log('state after', state)
  }
}

export function* fetchData(action) {
  try {
    const response = yield fetch('https://jsonplaceholder.typicode.com/todos');
    const data = yield response.json();

    yield put(successPlaceholder(data));
  } catch (error) {
    yield put(errorPlaceholder(error));
  }
}



