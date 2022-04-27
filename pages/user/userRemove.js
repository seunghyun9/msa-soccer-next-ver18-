import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import UserRemove from 'react'

const UserRemovePage= ()=>{
    const from = useSelector()
    return (<UserRemove onSubmit={onSubmit} onChange={onChange} form={form}/>)
}
export default UserRemovePage