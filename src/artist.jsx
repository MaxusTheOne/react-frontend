import React from "react";

export default function Artist(props) {
  const { fullName, careerStart, img } = props;
  console.log(props);
  return (
    <>
      <article className="grid-item-artist">
        <h2>{fullName}</h2>
        <img class="grid-item-artist-img" src={img} alt="No image"></img>
      </article>
    </>
  );
}
