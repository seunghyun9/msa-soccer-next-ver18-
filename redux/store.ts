import { configureStore } from "@reduxjs/toolkit";
import { createWrapper} from "next-redux-wrapper";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from './sagas/index.ts'
import rootReducer from './reducers/index.ts'


const isDev = process.env.NODE_ENV !== 'development'
//const idProd =process.env.NODE_ENV !== 'production'

const SagaMiddleware = createSagaMiddleware()

export const createStore = () =>{
    const store = configureStore({
        reducer: rootReducer,
        devTools: true,
        middleware: [ SagaMiddleware]
    })
    SagaMiddleware.run(rootSaga)
    return store
}

export const wrapper = createWrapper(createStore,{debug: isDev})
export default wrapper // 자주 가는 통로이기에 속도를 빠르게 하기 위해서 추가