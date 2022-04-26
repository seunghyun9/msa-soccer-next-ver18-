import React,{useState} from "react";

export default function Grade(){
    const[inputs,setInputs]=useState({})
    const{name,kor,eng,math}=inputs;

    const handleChange=(e)=>{
        e.preventDefault()
        const{value,name}=e.target;
        setInputs({
            ...inputs,[name]:value
        })
    }

    const handleClick=(e)=>{
        e.preventDefault()
        const gradeRequest={name,kor,eng,math}
        alert(`사용자이름:${JSON.stringify(gradeRequest)}`)
    }
    
    return <><h1>성적표</h1>

    <label htmlFor="">이름</label><br />
    <input type="text" name="name" onChange={handleChange}/><br />
    <label htmlFor="">국어점수</label><br />
    <input type="text" name="kor" onChange={handleChange}/><br />
    <label htmlFor="">영어점수</label><br />
    <input type="text" name="eng" onChange={handleChange}/><br />
    <label htmlFor="">수학점수</label><br />
    <input type="text" name="math" onChange={handleChange}/><br />
    <button onClick={handleClick}>입력</button><br />
    </>
}