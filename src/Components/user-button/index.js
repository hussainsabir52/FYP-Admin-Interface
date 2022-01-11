import { PersonOutline } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";

export default function UserButton() {
  return (
    <div>
      <li className="p-1 cursor-pointer flex items-center rounded-xl hover:bg-gray-100">
        <PersonOutline className="mr-1 text-xl" />
        <Link to="/users">Users</Link>
      </li>
    </div>
  );
}
