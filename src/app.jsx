import React from "react";
import { useState } from "react";
import Script from "./script.jsx";
import Title from "./title.jsx";
import Options from "./options.jsx";
import Artists from "./artists.jsx";
import Artist from "./artist.jsx";

export default function App() {
  const [text, setInputText] = useState("");

  return (
    <>
      <Title />
      <Options text={text} setInputText={setInputText} />
      <Artists />
    </>
  );
}
