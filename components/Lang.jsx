import React from "react";
import "./Lang.css";

function Lang() {
  return (
    <div className="lan">
      <select name="lan" id="lan">
        <span>🌐</span>
        <option value="English">English</option>
        <option value="Hindi">Hindi</option>
      </select>
      <h4>Netflix India</h4>
    </div>
  );
}

export default Lang;
