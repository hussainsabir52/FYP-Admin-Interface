import { useState, useEffect } from "react"
import React from 'react'
import getUsers from "../../services/getUsers"
import { useHistory } from "react-router";

export default function UserDataTable() {
    const [userData, setUserData] = useState([]);
    const history = useHistory();

    const fetchUserData = async () => {
        const users = await getUsers();
        setUserData(users);
        console.log(users);
    }

    useEffect(() => {
        fetchUserData();
    }, [])

    const editHandler = (id) => {
        history.push('/user-info',{uID: id});
    }

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
                    <th className="py-2.5 px-3">Edit</th>
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
                        <td className="py-2.5 px-3"><button className="bg-gray-800 text-white rounded text-sm pl-2 pr-2" onClick={() => {editHandler(user['userID'])}}>EDIT</button></td>
                    </tr>))}
                </tbody>
            </table>
        </div>
    )
}
