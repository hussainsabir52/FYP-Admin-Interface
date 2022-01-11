import React, { useState } from "react";
import Sidebar from "../../Components/sidebar";
import Topbar from "../../Components/topbar";
import { nanoid } from "nanoid";


export default function Locations() {

  const [entry, setEntry] = useState([{
    ID: nanoid(),
    Name: "Lucky Star",
    Longitude: "24.6521",
    Latitude: "65.1423"
  }, {
    ID: nanoid(),
    Name: "North Nazimabad Town",
    Longitude: "22.5612",
    Latitude: "60.1234"
  }]);
  const [name, setName] = useState("");
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");

  const submitHandler = (e) => {
      e.preventDefault();
      const Row = {
          ID: nanoid(),
          Name: name,
          Longitude: longitude,
          Latitude: latitude
      }
      setEntry([...entry, Row]);
  }

  const removeHandler = (id) => {
    for (var i = 0; i < entry.length; i++) {
      var obj = entry[i];
  
      if (obj['ID'] === id) {
          entry.splice(i, 1);
          break;
      }
  }
  setEntry([...entry]);
  }

  return (
    <div>
      <Topbar />
      <div className="flex">
        <Sidebar />

        <div style={{ flex: "4", height: "calc(100vh - 50px)" }}>
          <form onSubmit={submitHandler} className="m-auto mt-10 mb-4 ml-4 p-4">
            <label htmlFor="name" className="text-black text-center font-bold">
              Location Name:{" "}
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Location Name"
              className="rounded h-6 p-1 border-gray-800 border-2 ml-2 mr-2"
              required
            ></input>
            <label
              htmlFor="longitude"
              className="text-black text-center font-bold"
            >
              Longitude:{" "}
            </label>
            <input
              type="number"
              id="longitude"
              value={longitude}
              onChange={(e) => setLongitude(e.target.value)}
              placeholder="Longitude"
              className="rounded h-6 p-1 border-gray-800 border-2 ml-2 mr-2"
              required
            ></input>
            <label
              htmlFor="latitude"
              className="text-black text-center font-bold"
            >
              Latitude:{" "}
            </label>
            <input
              type="number"
              id="latitude"
              value={latitude}
              onChange={(e) => setLatitude(e.target.value)}
              placeholder="Latitude"
              className="rounded h-6 p-1 border-gray-800 border-2 ml-2 mr-2"
              required
            ></input>
            <button
              className="h-7 rounded bg-gray-800 w-20 mt-4 text-white"
              type="submit"
            >
              Add
            </button>
          </form>
          <p className="text-center mt-7 font-bold text-4xl">lOCATIONS</p>
          <div className="flex justify-center">
            <table className="p-2 border-collapse my-6 text-base shadow-xl w-100">
              <thead>
                <tr className="text-left bg-yellow-400 font-bold">
                <th className="py-2.5 px-3">Location ID</th>
                  <th className="py-2.5 px-3">Location Name</th>
                  <th className="py-2.5 px-3">Longitutde</th>
                  <th className="py-2.5 px-3">Latitude</th>
                  <th className="py-2.5 px-3">Remove</th>
                </tr>
              </thead>
              <tbody>
              {entry.map((row) => (<tr className="border-b border-gray-500 border-solid">
                        <td className="py-2.5 px-3">{row['ID']}</td>
                        <td className="py-2.5 px-3">{row['Name']}</td>
                        <td className="py-2.5 px-3">{row['Longitude']}</td>
                        <td className="py-2.5 px-3">{row['Latitude']}</td>
                        <td className="py-2.5 px-3"><button className="bg-gray-800 text-white rounded text-sm pl-2 pr-2" onClick={() => {removeHandler(row['ID'])}}>REMOVE</button></td>
                    </tr>))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
