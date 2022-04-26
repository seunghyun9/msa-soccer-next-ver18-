
import React, {useState} from 'react'
import tableStyles from '../common/styles/table.module.css'
import { useDispatch } from 'react-redux'
import { addBoard } from '../../redux/reducers/boardReducer.ts'

// export default function Board(){
//     const [value, setValue] = useState('') /*아래 setInputs과 형식을 맞춰줌 */
//     const dispatch = useDispatch()
//     const handleChange = e => { /*e는 소비자가 행동하는 액션(이벤트) 아규먼트가 상수처리가 됨*/
//         e.preventDefault() /* 원래값(디폴트)값으로 돌아가는걸 막아줌 */
//         const {value, name} = e.target; /* argument란 함수가 호출될 때 함수로 값을 전달해주는 값을 말합니다 
//         target 속성은 이벤트가 발생한 대상 객체, 상태 데이터(이벤트 안에 변하는 공간을 줘서 상수로 만듬) */
//         setInputs({...inputs, [name]: value}) /*JSON >"name": "식빵" , [name]은 변하지 않는 값(상수)이고 value 는 변하는 값(변수)  상태를 저장해줌*/
//     }
    
//     // const handleSubmit = e => {
//     //     e.preventDefault()
//     //     alert(`등록할 게시글 : ${ JSON.stringify(inputs) }`)
//     //     axios.post('http://localhost:5000/api/board/write', inputs)
//     //     .then(res => {
//     //         alert(`결과: ${res.data.result}`)
//     //     })
//     //     .catch(err => alert(err))
//     //     /*axios는 출발지 app은 도착지 /가는것은 req(담겨져있음) 와서 작동하는 것은 res 
//     //     req는 헤드와 바디로 이루어져있다. 데이터는 보통 바디에 찍혀져있음. req.body , req은 아규먼트*/

//     // }
export default function Board(){
    const dispatch = useDispatch()
    const [inputs, setInputs] = useState({})

    const handleChange = e => {
       const {name, value} = e.target 
       setInputs({...inputs, [name]: value})
    }

   
    return (<form onSubmit={e => {
        e.preventDefault()
        
        if(inputs) dispatch(addBoard(inputs))
    }}><table className={tableStyles.table}>
        <thead>
            <tr>
                <th colSpan={2}><h2>게시판 글쓰기</h2></th>
            </tr>
        </thead>
        <tbody>
            <tr >
                <td><label>제 목</label></td>
                <td><input type="text" onChange={handleChange}
                        id="title" name="title" placeholder="제목 입력"/></td>
            </tr>
            <tr>
                <td>
                    <label>작성자</label>
                </td>
                <td >
                    <input type="text" onChange={handleChange}
                        id="name" name="name" placeholder="게시글 작성자 이름 입력"/>
                </td>
            </tr>
            <tr >
                <td >
                    <label htmlFor="team">주제</label>
                </td>
                <td >
                    <select id="teamId"   e="teamId" onChange={handleChange}>
                        <option value="">주제 선택</option>
                        <option value="K09">영화</option>
                        <option value="K02">도서</option>
                        <option value="K04">여행</option>
                    </select>
                </td>
            </tr>
           
            <tr >
                <td >
                    <label htmlFor="subject">내용</label>
                </td>
                <td >
                    <input type="textarea"  id="subject" name="subject" onChange={handleChange} style={{height:200 + "px"}}></input>
                </td>
            </tr>
            <tr >
                <td colSpan={2}><input type="submit" value="Submit"/></td >
            </tr>
                </tbody>
            </table>
            </form>)
}