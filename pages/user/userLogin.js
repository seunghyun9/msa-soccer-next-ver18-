import React, {useEffect, useState} from "react";
import UserLogin from 'react'


const UserLoginPage = () =>{ //받는 값이 없음
  const onSubmit = e =>{
    e.preventDefault()
    const {} = form
  }
  const onChange = e =>{
    e.preventDefault()
  }
  return(<UserLogin onSubmit = {onSubmit} onChange={onChange} form={form}/>)
}

export default UserLoginPage