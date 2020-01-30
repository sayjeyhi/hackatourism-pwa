import { takeLatest } from 'redux-saga/effects';
import { coreTypes } from '..';

export function* clearCore() {
  console.log('clearCore saga ');
}

export default [takeLatest(coreTypes.CLEAR_CORE, clearCore)];
