import React from 'react'

export default function DriverDataTable() {
    return (
        <div className="flex justify-center">
            <table className="p-2 border-collapse my-6 text-base shadow-xl w-100">
                <thead >
                <tr className="text-left bg-yellow-400 font-bold">
                    <th className="py-2.5 px-3">Driver ID</th>
                    <th className="py-2.5 px-3">First Name</th>
                    <th className="py-2.5 px-3">Last Name</th>
                    <th className="py-2.5 px-3">Phone Number</th>
                    <th className="py-2.5 px-3">CNIC</th>
                    <th className="py-2.5 px-3">Vehicle</th>
                    <th className="py-2.5 px-3">License ID</th>
                    <th className="py-2.5 px-3">Number Plate</th>
                    <th className="py-2.5 px-3">Edit</th>
                </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-gray-500 border-solid">
                        <td className="py-2.5 px-3">01</td>
                        <td className="py-2.5 px-3">Bashir</td>
                        <td className="py-2.5 px-3">Khusroo</td>
                        <td className="py-2.5 px-3">0300-3536400</td>
                        <td className="py-2.5 px-3">42201-XXXXXXX-X</td>
                        <td className="py-2.5 px-3">Toyota Corolla</td>
                        <td className="py-2.5 px-3">123456789</td>
                        <td className="py-2.5 px-3">ABC-454</td>
                        <td className="py-2.5 px-3"><button className="bg-gray-800 text-white rounded text-sm pl-2 pr-2">EDIT</button></td>
                    </tr>
                    <tr className="border-b border-gray-500 border-solid">
                        <td className="py-2.5 px-3">02</td>
                        <td className="py-2.5 px-3">Shoaib</td>
                        <td className="py-2.5 px-3">sumroo</td>
                        <td className="py-2.5 px-3">0300-3536400</td>
                        <td className="py-2.5 px-3">42201-XXXXXXX-X</td>
                        <td className="py-2.5 px-3">Honda Civic</td>
                        <td className="py-2.5 px-3">123456789</td>
                        <td className="py-2.5 px-3">DEF-545</td>
                        <td className="py-2.5 px-3"><button className="bg-gray-800 text-white rounded text-sm pl-2 pr-2">EDIT</button></td>
                    </tr>
                    <tr className="border-b border-gray-500 border-solid">
                        <td className="py-2.5 px-3">03</td>
                        <td className="py-2.5 px-3">Mohammad</td>
                        <td className="py-2.5 px-3">Qasim</td>
                        <td className="py-2.5 px-3">0300-3536400</td>
                        <td className="py-2.5 px-3">42201-XXXXXXX-X</td>
                        <td className="py-2.5 px-3">Toyota Vitz</td>
                        <td className="py-2.5 px-3">123456789</td>
                        <td className="py-2.5 px-3">GHI-122</td>
                        <td className="py-2.5 px-3"><button className="bg-gray-800 text-white rounded text-sm pl-2 pr-2">EDIT</button></td>
                    </tr>
                    <tr className="border-b border-gray-500 border-solid">
                        <td className="py-2.5 px-3">04</td>
                        <td className="py-2.5 px-3">Fawad</td>
                        <td className="py-2.5 px-3">Khan</td>
                        <td className="py-2.5 px-3">0300-3536400</td>
                        <td className="py-2.5 px-3">42201-XXXXXXX-X</td>
                        <td className="py-2.5 px-3">Mercedes Benz</td>
                        <td className="py-2.5 px-3">123456789</td>
                        <td className="py-2.5 px-3">JKL-696</td>
                        <td className="py-2.5 px-3"><button className="bg-gray-800 text-white rounded text-sm pl-2 pr-2">EDIT</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
