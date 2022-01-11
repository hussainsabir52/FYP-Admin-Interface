import React from "react";
import Topbar from "../../Components/topbar";
import { useState } from "react";
import { useHistory } from "react-router";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const loginHandler = (e) => {
      e.preventDefault();
      if (username === 'admin' && password === 'admin')
      {
        history.replace("/home");
      }
  }


  return (
    <div>
      <Topbar/>
      
      <div className="w-96 overflow-hidden m-auto mt-40 p-14 bg-yellow-500 rounded">
        <h1 className="text-center font-bold text-2xl -mt-4">LOGIN</h1>
        <form onSubmit={loginHandler}>
      <label className="text-lg font-bold" htmlFor="username">Username:  </label>
      <input
        className="w-64 h-7 border-none rounded pl-2"
        type="text"
        id="username"
        placeholder=" Username"
        required
        autoComplete="off"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      ></input>
      <label className="text-lg font-bold" htmlFor="password">Password:  </label>
      <input
        className="w-64 h-7 border-none rounded pl-2"
        type="password"
        id="password"
        placeholder="Password"
        required
        autoComplete="off"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button className="h-7 rounded bg-gray-800 w-28 mt-4 text-white" type="submit">Login</button>
      </form>
      </div>
    </div>
  );
}
