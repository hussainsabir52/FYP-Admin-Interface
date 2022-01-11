import React from "react";
import { LineStyle } from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function HomeButton() {
  return (
    <li className="p-1 cursor-pointer flex items-center rounded-xl hover:bg-gray-100">
      <LineStyle className="mr-1 text-xl" />
      <Link to="/home">Home</Link>
    </li>
  );
}
