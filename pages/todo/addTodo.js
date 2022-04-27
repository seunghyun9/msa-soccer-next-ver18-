import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import tableStyles from '../common/styles/table.module.css'
import { todoActions } from '../../_redux/reducers/todoReducer.ts' //구조분해로 할당해 임포트
export default function AddTodo() {
    const [todo, setTodo] = useState({userid: '', task: ''})
    const dispatch = useDispatch()
    const handleChange = e =>{
      e.preventDefault()
      const{name, value} = e.target;
      setTodo({...todo, [name]: value})
    }
  return (
      <form onSubmit={ e => {
          e.preventDefault()
          alert('진행1 : 일정등록 클릭')
          dispatch(todoActions.taskRequest(todo))
          setTodo({userid: '', task: ''})
      }}>
        <table className={tableStyles.table}>
        <thead>
            <tr>
                <th colSpan={2}><h2>투두리스트</h2></th>
            </tr>
        </thead>
        <tbody>
        <tr>
        <td><label><b> ID </b></label> </td>
        <td>
              <input 
                type="text"
                className="input input_lg"
                name= "userid"
                autoComplete="off"
                onChange={handleChange}
            /><br />
            </td>
            </tr>
            <tr >
                <td><label>할일등록</label></td>
                <td>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="task"
          autoComplete="off"
          onChange={handleChange}
        />
        <button type="submit" style={{marginLeft:"20px"}}  
        className="btn btn__primary btn__lg">
          Add
        </button></td >
            </tr>
      
                </tbody>
            </table>
            </form>
     
  );
}