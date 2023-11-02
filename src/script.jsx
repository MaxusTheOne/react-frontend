import React from "react";
import { useState } from "react";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

function doTheThing() {
  setNum += 1;
  console.log("efnwi");
}
export default function Script() {
  const [num, setNum] = useState([]);
  return (
    <>
      <div> I'm a component mom</div>
      <AwesomeButton type="primary" onPressed={doTheThing}>
        BUGEAUGNOEG
      </AwesomeButton>
    </>
  );
}
