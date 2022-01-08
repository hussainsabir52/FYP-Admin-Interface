import React from "react";
import Dashboard from "../dashboard";
import QuickMenu from "../quick-menu";

export default function Sidebar() {
  return (
    <div
      style={{ flex: "1", height: "calc(100vh - 50px)" }}
      className="sticky top-12 bg-gray-200"
    >
      <div className="p-5 text-gray-800">
        <Dashboard/>
        <QuickMenu/>
      </div>
    </div>
  );
}
