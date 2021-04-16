import React from 'react';
import { takeLatest, call } from 'redux-saga/effects'
import { TEST_NAVIGATION } from '../actions/actionTypes';
import { NavigationActions } from '../../navigation/NavigationActionClass';

export function* watchTestNavigation(payload) {
    try {
        yield call(NavigationActions.push, { screen: 'screen1', stackId:'Test' });
    } catch(e) {

    }
}

export default function* root() {
    yield takeLatest(TEST_NAVIGATION, watchTestNavigation);
}