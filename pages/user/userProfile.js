import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux '
import UserProfile from 'react'

const UserProfilePage = () =>{
    const from =useSelector()
    return(<UserProfile onSubmit={onSubmit} onChange={onChange} form={form}/>)

}
export default UserProfilePage