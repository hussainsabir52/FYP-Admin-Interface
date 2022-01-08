import React from "react";

export default function Textbox(props) {
  return (
    <div>
      <label className="text-lg font-bold">{props.name}: </label>
      <input
        className="w-64 h-7 border-none rounded pl-2"
        type="text"
        id={props.id}
        placeholder={props.name}
      ></input>
    </div>
  );
}
