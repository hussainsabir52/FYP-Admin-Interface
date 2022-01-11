import React from "react";
import Topbar from "../../Components/topbar";
import Sidebar from "../../Components/sidebar"
import Home from "../../Views/home"

export default function Main() {
  return (
    <div>
        <Topbar />
        <div className="flex">
        <Sidebar />
        <Home/>
        </div>


    </div>
  );
}
