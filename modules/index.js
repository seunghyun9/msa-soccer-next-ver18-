import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import counter, { counterSaga } from './counter';
import user, { userSaga } from './user';
import auth, { authSaga } from './auth'
import loading from './loading';

const rootReducer = combineReducers({
  counter,
  user,
  auth,
  loading
});

export function* rootSaga() {
  yield all([counterSaga(), userSaga(),authSaga()]);
}

export default rootReducer;