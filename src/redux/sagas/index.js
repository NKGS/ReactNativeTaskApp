
import { all, fork } from 'redux-saga/effects';
import login from './login.saga';

export function* saga() {
    yield all([
        yield fork(login)
    ]);
}
