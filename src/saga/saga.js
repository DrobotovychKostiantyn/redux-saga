import { put } from 'redux-saga/effects';
import {successPlaceholder, errorPlaceholder, actionTypes} from "../store/actions";

const delay = (ms) => new Promise(res => setTimeout(res, ms));

export function* ageUpAsync(action) {
  yield delay(1000);
  yield put({
    type: actionTypes.AGE_UP_ASYNC,
    payload: 1,
  })
}

export function* ageDownAsync(action) {
  yield delay(1000);

  yield put({
    type: actionTypes.AGE_DOWN_ASYNC,
    payload: 1,
  })
}

// function* logger(action) {
//   const state = yield select()
//
//   console.log('action', action)
//   console.log('state after', state)
// }

export function* fetchData(action) {
  try {
    const response = yield fetch('https://jsonplaceholder.typicode.com/todos');
    const data = yield response.json();

    yield put(successPlaceholder(data));
  } catch (error) {
    yield put(errorPlaceholder(error));
  }
}



