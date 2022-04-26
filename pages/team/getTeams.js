import axios from 'axios';
import { useEffect, useState } from 'react';
import tableStyles from '../common/styles/table.module.css'
import Link from 'next/link'

export default function TeamList(){

    const columns = ["팀ID", "연고지", "팀이름", "창단연도", "스타디움", "주소","전화번호"];
    const [data, setData] = useState([])
    useEffect(()=>{
      axios.get('http://localhost:5000/api/team/team-list').then(res=>{
        setData(res.data.users)
      }).catch(err=>{})
    },[])
    return (
      <table className={tableStyles.table}>
        <thead>
            <tr>
                <th colSpan={7}><h1>팀목록</h1></th>
            </tr>
            
        </thead>
        <tbody>
              <tr>
                  {columns.map((column, index) => (
                        <td key={index} >{column}</td>
                  ))}
                </tr>
                { data.length == 0  ?<tr >
                                      <td colSpan={6} >데이터가 없습니다</td>
                                      </tr>
                :data.map((team) => (
                <tr key={team.TeamId} >
                  <td >
                    <Link href={{pathname:`/team/[TeamId]`,
                                query:{selectedUser: 'test'}}} as={`/team/${user.userid}`}>
                      <a>{user.userid}</a>
                    </Link>
                  </td>
                  <td >{user.name}</td>
                  <td >{user.email}</td>
                  <td >{user.phone}</td>
                  <td >{user.birth}</td>
                  <td >{user.address}</td>
                </tr>
            ))}
            
        </tbody>
      </table>
    );
}