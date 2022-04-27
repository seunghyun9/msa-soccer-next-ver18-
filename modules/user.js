import {createAction, handleActions} from 'redux-actions'
import {call, delay, put, takeLatest} from 'redux-saga/effects'
import createRequestSaga from '@/apis/createRequestSaga'
import { HYDRATE } from 'next-redux-wrapper'
import * as api from '@/apis/api'

const USER_JOIN = 'user/USER_JOIN'
const USER_JOIN_SUCCESS = 'user/USER_JOIN_SUCCESS'


export const userJoin = createAction(USER_JOIN, payload => payload) // 액션 생성함수


const userJoinSaga = createRequestSaga(USER_JOIN, api.userJoin)


export function* userSaga() {
    alert("진행2 Saga가 이벤트를 인지함")
    yield takeLatest(USER_JOIN, userJoinSaga)

}
const initialState ={
    users:[],
    loginUser:{
        isLogginIn:false,
        data: null
    }
}
const user = handleActions({
    [HYDRATE]: (state, action) => ({
        ...state,
        post: action.payload
    }),
    [USER_JOIN_SUCCESS]: (state, action) => ({
        ...state,
        post: action.payload
    }),

}, initialState);
export default user;