import { ArrowDownward, ArrowUpward } from '@material-ui/icons'
import React from 'react'

export default function FeaturedInfo() {
    return (
        <div className="flex justify-between w-full">
            <div className="my-0 mx-5 mt-2 flex-1 p-8 cursor-pointer rounded-lg shadow-lg">
                <span className="text-base">Total Customers</span>
                <div className="my-2 mx-0 flex items-center">
                    <span className="text-xl font-semibold">23,657</span>
                    <span className="flex items-center ml-5">+580<ArrowUpward className="text-xs ml-1 text-green-700" /></span>
                </div>
                <span className="text-xs text-gray-700">Compared to last month</span>
            </div>

            <div className="my-0 mx-5 mt-2 flex-1 p-8 cursor-pointer rounded-lg shadow-lg">
                <span className="text-base">Total Drivers</span>
                <div className="my-2 mx-0 flex items-center">
                    <span className="text-xl font-semibold">3,225</span>
                    <span className="flex items-center ml-5">-19<ArrowDownward className="text-xs ml-1 text-red-700" /></span>
                </div>
                <span className="text-xs text-gray-700">Compared to last month</span>
            </div>

            <div className="mx-5 mt-3 flex-1 p-8 cursor-pointer rounded-lg shadow-lg">
                <span className="text-base">Total Users</span>
                <div className="my-2 mx-0 flex items-center">
                    <span className="text-xl font-semibold">26,882</span>
                    <span className="flex items-center ml-5">+561 <ArrowUpward className="text-xs ml-1 text-green-700" /></span>
                </div>
                <span className="text-xs text-gray-700">Compared to last month</span>
            </div>
        </div>
    )
}
