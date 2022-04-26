import { createSlice } from "@reduxjs/toolkit"

export interface TodoType{ 
    userid: string,
    task: string,
}
export interface TdoState{
    loading: boolean;
    data: TodoType[];
    error: any;
}
const initialState: TdoState = {
    loading: false,
    data: [],
    error: null,
}
const todoSlice = createSlice({ // 객체임 , Join---이 기능임. 원래{}는 키값을 가진 스트링이지만, 여기서는 액션으로 활용한다.
    name: 'todos',
    initialState,
    reducers: {
        taskRequest(state: TdoState, payload)
        {  alert('진행2: 리듀서내부')
            state.loading = true},

        taskSuccess(state: TdoState, {payload})
        { state.data = [...state.data, payload]
          state.loading = false;
        
        },
        taskFailure(state: TdoState, {payload})
        { state.data = payload; 
          state.loading = false;
        }
    }
})
const { reducer, actions } = todoSlice
export const todoActions = actions
export default reducer