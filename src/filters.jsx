import React from "react";

export default class Filters extends React.Component {
  render() {
    return (
      <>
        <button id="artistsBtn" className="optionBtn" value="artists">
          Artists
        </button>
        <button id="albumsBtn" className="optionBtn" value="albums">
          Albums
        </button>
        <button id="tracksBtn" className="optionBtn" value="tracks">
          Tracks
        </button>
      </>
    );
  }
}
