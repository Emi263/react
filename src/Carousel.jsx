import React, { useState } from "react";

function Carousel() {
  const [images, setImages] = useState(["image1", "image2", "image3", "image4"]);

  const [date, setDate] = useState(new Date());

  console.log(date.toLocaleTimeString());
  function changeTime() {
   setDate(new Date())
  }

  setInterval(changeTime,1000);

  return (
    <div>
      {images.map((image) => {
        return <h1>{image}</h1>;
      })}
      {date.toLocaleTimeString()}
    </div>
  );
}

export default Carousel;

