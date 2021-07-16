import React from "react";

export default function Image({image, onClick}) {
  return <img
    width="1150px"
    src={image.src}
    alt="Find Waldo."
    onClick={onClick}
  />;
}
