import { useState, useEffect } from "react"
import React from 'react'
import getUsers from "../../services/getUsers"

export default function UserDataTable() {
    const [userData, setUserata] = useState([]);

    const fetchUserData = async () => {
        const users = await getUsers();
        setUserata(users);
        console.log(users);
    }

    useEffect(() => {
        fetchUserData();
    }, [])

    return (
        <div className="flex justify-center">
            <table className="p-2 border-collapse my-6 text-base shadow-xl w-100">
                <thead >
                <tr className="text-left bg-yellow-400 font-bold">
                    <th className="py-2.5 px-3">User ID</th>
                    <th className="py-2.5 px-3">First Name</th>
                    <th className="py-2.5 px-3">Middle Name</th>
                    <th className="py-2.5 px-3">Last Name</th>
                    <th className="py-2.5 px-3">Email</th>
                    <th className="py-2.5 px-3">Phone Number</th>
                    <th className="py-2.5 px-3">Is Verified</th>
                </tr>
                </thead>
                <tbody>
                    {userData.map((user) => (<tr className="border-b border-gray-500 border-solid">
                        <td className="py-2.5 px-3">{user['userID']}</td>
                        <td className="py-2.5 px-3">{user['firstName']}</td>
                        <td className="py-2.5 px-3">{user['middleName']}</td>
                        <td className="py-2.5 px-3">{user['lastName']}</td>
                        <td className="py-2.5 px-3">{user['email']}</td>
                        <td className="py-2.5 px-3">{user['mobile']}</td>
                        <td className="py-2.5 px-3">{user['isEmailVerified'] === 1?"YES":"NO"}</td>
                    </tr>))}
                </tbody>
            </table>
        </div>
    )
}
