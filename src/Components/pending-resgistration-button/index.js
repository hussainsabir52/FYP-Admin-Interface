import { HourglassEmptyOutlined } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";

export default function PendingRegistrationButton() {
  return (
    <li className="p-1 cursor-pointer flex items-center rounded-xl hover:bg-gray-100">
      <HourglassEmptyOutlined className="mr-1 text-xl" />
      <Link to="/pending-registration">Pending Registration</Link>
    </li>
  );
}
