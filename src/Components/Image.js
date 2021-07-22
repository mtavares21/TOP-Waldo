import React from "react";

export default function Image({image, onClick}) {
  return <img
    src={image.src}
    width="1000px"
    alt="Find Waldo."
    onClick={onClick}
  />;
}
