import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import tableStyles from '../common/styles/table.module.css'
import { teamActions } from '../../_redux/reducers/todoReducer.ts'
export default function AddTeam() {
    const [team, setTeam] = useState({TeamId: '', homeTown: '',TeamName: '',foundingDate: '',
                                        stadiumName: '',address: '',tel: '',  })
    const dispatch = useDispatch()
    const handleChange = e =>{
      e.preventDefault()
      const{name, value} = e.target;
      setTeam({...team, [name]: value})
    }
    return (
        <form onSubmit={ e => {
            e.preventDefault()
            alert('진행1 : 팀등록 클릭')
            dispatch(teamActions.teamRequest(team))
            setTeam({TeamId: '', homeTown: '',TeamName: '',foundingDate: '',
            stadiumName: '',address: '',tel: '',  })
        }}>
          <table className={tableStyles.table}>
          <thead>
              <tr>
                  <th colSpan={2}><h2>팀 등록</h2></th>
              </tr>
          </thead>
          <tbody>
          <tr>
          <td><label><b> Team ID </b></label> </td>
          <td>
                <input 
                  type="text"
                  className="input input_lg"
                  name= "TeamId"
                  autoComplete="off"
                  onChange={handleChange}
              /><br />
              </td>
              </tr>
              <tr>
          <td><label><b> 연고지 </b></label> </td>
          <td>
                <input 
                  type="text"
                  className="input input_lg"
                  name= "homeTown"
                  autoComplete="off"
                  onChange={handleChange}
              /><br />
              </td>
              </tr>
              <tr>
          <td><label><b> 팀이름 </b></label> </td>
          <td>
                <input 
                  type="text"
                  className="input input_lg"
                  name= "TeamName"
                  autoComplete="off"
                  onChange={handleChange}
              /><br />
              </td>
              </tr>
              <tr>
          <td><label><b> 창단연도 </b></label> </td>
          <td>
                <input 
                  type="text"
                  className="input input_lg"
                  name= "foundingDate"
                  autoComplete="off"
                  onChange={handleChange}
              /><br />
              </td>
              </tr>
              <tr>
          <td><label><b> 스타디움 </b></label> </td>
          <td>
                <input 
                  type="text"
                  className="input input_lg"
                  name= "stadiumName"
                  autoComplete="off"
                  onChange={handleChange}
              /><br />
              </td>
              </tr>
              <tr>
          <td><label><b> 주소 </b></label> </td>
          <td>
                <input 
                  type="text"
                  className="input input_lg"
                  name= "address"
                  autoComplete="off"
                  onChange={handleChange}
              /><br />
              </td>
              </tr>
              <tr>
          <td><label><b> 전화번호 </b></label> </td>
          <td>
                <input 
                  type="text"
                  className="input input_lg"
                  name= "tel"
                  autoComplete="off"
                  onChange={handleChange}
              /><br />
              </td>
              </tr>
              <tr >
              <th colSpan={2}>
          <button type="submit" style={{marginLeft:"20px"}}  
          className="btn btn__primary btn__lg">
            Submit
          </button></th >
              </tr>
        
                  </tbody>
              </table>
              </form>
       
    );
}