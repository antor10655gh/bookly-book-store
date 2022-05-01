import React, { useEffect, useState } from "react";
import "./Gallery.css";
import SingleGallery from "./SingleGallery/SingleGallery";

const Gallery = () => {
  const [gallerys, setGallerys] = useState([]);
  useEffect(() => {
    fetch("gallery.json")
      .then((res) => res.json())
      .then((json) => setGallerys(json));
  }, []);
  return (
    <div className="container py-3 py-lg-0 pb-lg-5">
      <header className="text-center pt-3 pt-lg-4 pb-lg-4">
        <h2>
          <span id="span">G</span>
          <span id="span">A</span>
          <span id="span">L</span>
          <span id="span">L</span>
          <span id="span">E</span>
          <span id="span">R</span>
          <span id="span">Y</span>
        </h2>
        <div
          style={{
            width: "150px",
            borderBottom: "3px solid var(--green)",
            margin: "0 auto",
          }}
        ></div>
      </header>
      <div className="row row-cols-1 row-cols-lg-3 g-4">
        {gallerys.map((gallery) => (
          <SingleGallery key={gallery.id} gallery={gallery}></SingleGallery>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
