import { useState } from "react";
import "../styles/drop-down.css";
import { LocationData } from "../constants/locationData";

export function DropDown() {
  const [selectCountry, setSelectedCountry] = useState("");

  function handleCountrySelector(e) {
    setSelectedCountry(e.target.value);
  }

  return (
    <div>
      <h1>Drop Down</h1>
      <div className="container">
        <select
          className="selectCountry"
          value={selectCountry}
          onChange={handleCountrySelector}
        >
          <option value="" disabled className="unselect">
            --Select Country--
          </option>
          {LocationData.map((ele) => {
            return <option value={ele.country}>{ele.country}</option>;
          })}
        </select>
      </div>
    </div>
  );
}
