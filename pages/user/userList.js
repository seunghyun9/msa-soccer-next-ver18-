import React, {useEffect, useState} from "react";
import UserList from "react";
import { useSelector } from "react-redux";

const UserListPage = () => {
    const form = useSelector()
    return(<UserList onSubmit = {onsubmit} onChange={onChange} form={form}/>)
}
export default UserListPage