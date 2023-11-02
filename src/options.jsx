import React, { useState } from "react";
import Search from "./search";
import Filters from "./filters";
import "./style.css";
export default function Options(props) {
  const [text, setInputText] = useState("");
  return (
    <>
      <div className="option-grid">
        <button id="create-artist-button">Register</button>
        <Search text={text} setInputText={setInputText} />
        <Filters></Filters>
      </div>
    </>
  );
}
