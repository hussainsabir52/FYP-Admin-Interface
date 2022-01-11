import React from 'react'
import Sidebar from '../../Components/sidebar'
import Topbar from '../../Components/topbar'
import DriverDataTable from '../../Components/driver-datatable'

export default function RegisteredDrivers() {
    return (
        <div>
            <Topbar/>
            <div className="flex">
                <Sidebar/>
        <div style={{ flex: "4", height: "calc(100vh - 50px)" }}>
        <p className="text-center mt-7 font-bold text-4xl">DRIVERS</p>
        <DriverDataTable/>
        </div>
        </div>
        </div>
    )
}
