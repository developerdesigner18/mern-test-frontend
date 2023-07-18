import { takeEvery, put } from 'redux-saga/effects';
import { decrement, increment } from '../reducers/counterReducer';

function* handleIncrementAsync() {
    yield put(increment());
}

function* handleDecrementAsync() {
    yield put(decrement());
}

export function* watchIncrementAsync() {
    yield takeEvery('increment_async', handleIncrementAsync);
}

export function* watchDecrementAsync() {
    yield takeEvery('decrement_async', handleDecrementAsync);
}