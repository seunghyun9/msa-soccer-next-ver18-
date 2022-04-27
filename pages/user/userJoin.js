import { userJoin } from "@/modules";
import React, {useEffect, useState} from "react";
import UserJoin from '@/components/user/UserJoin'
import { useDispatch, useSelector } from "react-redux";

const UserJoinPage = () =>{ //받는 값이 없음
  const dispatch = useDispatch()
  const {form, auth, user} =useSelector(({auth,user})=>({
    auth:auth.auth,
    user:user.user,
    authError:auth.authError,
    form:auth.userJoin
  }))//순수함수 리턴은 생량됨 
  const onSubmit = e =>{
    e.preventDefault()
    const {userid,name,email, password, phone, birth, address} = form
    alert("1단계"+JSON.stringify(form))
    dispatch(userJoin({userid,name,email, password, phone, birth, address}))
  }
  const onChange = e =>{
    e.preventDefault()
  }
  return(<UserJoin onSubmit = {onSubmit} onChange={onChange} form={form}/>)
}

export default UserJoinPage