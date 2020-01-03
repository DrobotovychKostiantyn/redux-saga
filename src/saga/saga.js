import {takeLatest, put, all, takeEvery, select} from 'redux-saga/effects';
const delay = (ms) => new Promise(res => setTimeout(res, ms));

function* ageUpAsync() {
  console.log("up");
  yield delay(1000);
  yield put({
    type: 'AGE_UP_ASYNC',
    payload: 1,
  })
}

export function* watchAgeUp() {
  yield takeLatest('AGE_UP', ageUpAsync)
}

function* ageDownAsync() {
  console.log("down");
  yield delay(1000);

  yield put({
    type: 'AGE_DOWN_ASYNC',
    payload: 1,
  })
}

export function* watchAgeDown() {
  console.log('1');
  yield takeLatest('AGE_DOWN', fetchData)
}

function* logger(action) {
  const state = yield select()

  console.log('action', action)
  console.log('state after', state)
}

function* watchAndLog() {
  yield takeEvery('*', logger)
}

export function* fetchData(action) {
  try {

    const response = yield fetch('https://jsonplaceholder.typicode.com/todos');
    // yield put({type: "FETCH_SUCCEEDED", data})

    const data = yield response.json();
    yield console.log(data)
  } catch (error) {
    // yield put({type: "FETCH_FAILED", error})
    yield console.log({type: "FETCH_FAILED", error});
  }
}

function* watchFetchData() {
  yield takeLatest('FETCH_REQUESTED', fetchData);
}

export function* rootSaga() {
  yield all([
    watchAgeUp(),
    watchAgeDown(),
    watchFetchData(),
    watchAndLog(),
  ])
}