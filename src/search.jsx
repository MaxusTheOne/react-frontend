import React, { useState } from "react";
import "./style.css";

export default function Search(props) {
  const { text, setInputText } = props;
  const onSearchInput = event => {
    setInputText(event.target.value);
  };
  return (
    <>
      <div>
        <label htmlFor="searchbar"></label>
        <input type="search" id="searchbar" placeholder="Search for ..." onChange={onSearchInput} />
      </div>
    </>
  );
}
