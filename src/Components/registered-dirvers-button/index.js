import { AssignmentTurnedIn } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";

export default function RegisteredDriversButton() {
  return (
    <li className="p-1 cursor-pointer flex items-center rounded-xl hover:bg-gray-100">
      <AssignmentTurnedIn className="mr-1 text-xl" />
      <Link to="/registered-drivers">Registered Drivers</Link>
    </li>
  );
}
