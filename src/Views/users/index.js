import React from 'react'
import Sidebar from '../../Components/sidebar'
import Topbar from '../../Components/topbar'
import UserDataTable from '../../Components/user-datatable'

export default function Users() {
    return (
        <div>
            <Topbar/>
            <div className='flex'>
            <Sidebar/>
        <div style={{ flex: "4", height: "calc(100vh - 50px)" }} className="">
            
            <p className="text-center mt-7 font-bold text-4xl">USERS</p>
            <UserDataTable/>
            
        </div>
        </div>
        </div>
    )
}
