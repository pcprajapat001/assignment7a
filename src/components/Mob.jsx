import React, { useState } from "react";

export const Mob = () => {
  const [bname, setBname] = useState("");
  const [mname, setMname] = useState("");
  const [cname, setCname] = useState("");
  const [pname, setPname] = useState("");

  return (
    <div className="sub">
      <table>
        <tr>
          <td>
            <input
              type="text"

              
              onChange={(e) => setBname(e.target.value)}
              placeholder="Enter Brand Name"
            />
          </td>
          <td>{bname}</td>
        </tr>
        <tr>
          <td>{mname}</td>
          <td>
            <input
              type="text"
              onChange={(e) => setMname(e.target.value)}
              placeholder="Enter Model Name"
            />
          </td>
        </tr>
        <tr>
          <td>
            <input
              type="text"
              onChange={(e) => setCname(e.target.value)}
              placeholder="Color Name"
            />
          </td>
          <td>{cname}</td>
        </tr>
        <tr>
          <td>{pname}</td>
          <td>
            <input
              type="text"
              onChange={(e) => setPname(e.target.value)}
              placeholder="Enter Price"
            />
          </td>
        </tr>
      </table>
    </div>
  );
};
