import React from "react";
import HomeButton from "../home-button";
import UserButton from "../user-button";

export default function Dashboard() {
  return (
    <div className="mb-2">
      <h3 className="text-xs text-gray-700">Dashboard</h3>
      <ul className="list-none p-1">
        <HomeButton />
        <UserButton />
      </ul>
    </div>
  );
}
