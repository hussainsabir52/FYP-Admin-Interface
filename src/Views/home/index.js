import React from 'react'
import Chart from '../../Components/chart'
import FeaturedInfo from '../../Components/featured-info'
import Sidebar from '../../Components/sidebar'
import Topbar from '../../Components/topbar'

export default function Home() {
    return (
        <div>
        <Topbar/>
            <div className='flex'>
            <Sidebar/>
        <div style={{ flex: "4", height: "calc(100vh - 50px)" }}>
            <FeaturedInfo/>
            <Chart/>
        </div>
        </div>
        </div>
    )
}
