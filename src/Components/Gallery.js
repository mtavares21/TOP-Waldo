import React from "react";

export default function Gallery({ images, handleNewImage }) {
  return (
    <div
      style={{
        display: "flex",
        width: "1300px",
        flexWrap: "nowrap",
        alignItems: "center",
        justifyContent: "left",
        margin: "auto",
        overflowX: "auto"
      }}
    >
      {images.map((img) => (
        <img
          onClick={ ()=> handleNewImage(img)}
          style={{
            objectFit: "cover",
            width: "200px",
            height: "130px",
            margin: "20px",
          }}
          key={img.src}
          src={img.src}
          alt="preview"
        />
      ))}
    </div>
  );
}
