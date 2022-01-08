import React from 'react'
import UserDataTable from '../../Components/user-datatable'

export default function Users() {
    return (
        <div style={{ flex: "4", height: "calc(100vh - 50px)" }} className="">
            <p className="text-center mt-7 font-bold text-4xl">USERS</p>
            <UserDataTable/>
        </div>
    )
}
