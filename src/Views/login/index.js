import React from "react";
import Textbox from "../../Components/textbox";
import Topbar from "../../Components/topbar";
import { Link } from 'react-router-dom';

export default function Login() {
    const loginHandler = () => {
        <Link to='/main'></Link>
    }
  return (
    <div>
      <Topbar/>
      <div className="w-96 overflow-hidden m-auto mt-40 p-14 bg-yellow-500 rounded">
        <h1 className="text-center font-bold text-2xl -mt-4">LOGIN</h1>
        <Textbox id="username" name="User Name" />
        <Textbox id="password" name="Password" />
        <button className="h-7 rounded bg-gray-800 w-28 mt-4 text-white" onClick={loginHandler}>Login</button>
      </div>
    </div>
  );
}
