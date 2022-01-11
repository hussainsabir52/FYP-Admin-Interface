import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router'
import Sidebar from '../../Components/sidebar';
import Topbar from '../../Components/topbar';
import getuserbyID from '../../services/getuserbyID';

export default function UserInfo () {
    const location = useLocation();
    const [userInfo, setUserinfo] = useState([]);

    const fetchUserInfo = async () => {
        const user = await getuserbyID(location.state.uID);
        setUserinfo(user[0]);
        console.log(user[0]);
    }

    useEffect(() => {
        fetchUserInfo();
    }, [])


    return (
        <div>
            <Topbar/>
            <div className='flex'>
                <Sidebar/>
            <div style={{ flex: "4", height: "calc(100vh - 50px)"}}>
                <div className="shadow-2xl border-1 border-gray-400 w-4/5 m-auto mt-6 mb-4 rounded-xl">
                <div className="flex justify-center">
                <img src={require('../../profile-iplaceholder.png')} alt='user' className="mt-4 w-40 h-40"/>
                </div>
                <h1 className="text-3xl font-bold text-center text-black">{userInfo['firstName']}</h1>
                <div className="inline-block m-auto mt-10 mb-4 ml-64">
                    <label className="text-black table-row text-center font-bold" htmlFor='fname'>FIRST NAME</label>
                    <input className="rounded h-6 w-80 p-1 border-none inline-block mb-2 mt-1" value={userInfo['firstName']} id='fname'></input>
                    <label className="text-black table-row font-bold" htmlFor='lname'>LAST NAME</label>
                    <input className="rounded h-6 w-80 p-1 border-none inline-block mb-2 mt-1" value={userInfo['lastName']} id='lname'></input>
                    <label className="text-black table-row font-bold" htmlFor='mname'>MIDDLE NAME</label>
                    <input className="rounded h-6 w-80 p-1 border-none inline-block mb-2 mt-1" value={userInfo['middleName']} id='mname'></input>
                    <label className="text-black table-cell font-bold" htmlFor='email'>EMAIL</label>
                    <input className="rounded h-6 w-80 p-1 border-none  mb-2 mt-1" value={userInfo['email']} id='email'></input>
                    <label className="text-black table-cell font-bold" htmlFor='mobile'>MOBILE</label>
                    <input className="rounded h-6 w-80 p-1  mb-2 mt-1" value={userInfo['mobile']} id='mobile'></input>
                </div>
            </div>
            </div>
            </div>
        </div>
    )
}