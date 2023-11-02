import React, { useEffect, useState } from "react";
import Artist from "./artist.jsx";

export default function Artists() {
  const [data, setData] = useState(null);
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://mabi-testdata-01.azurewebsites.net/artists");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const arrayPlz = await response.json();
      setData(arrayPlz);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  useEffect(() => {
    if (data) {
      console.log(data);
      const artistComponents = data.map(artist => {
        return <Artist key={artist.id} fullName={artist.name} careerStart={artist.career_start} img={artist.img} />;
      });
      setArtists(artistComponents);
    }
  }, [data]);

  return (
    <div id="artist-div">
      {artists.length > 0 ? (
        <div id="artist-list" className="grid-container">
          {artists}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
