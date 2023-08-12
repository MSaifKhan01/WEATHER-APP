import React, { useState, useEffect } from "react";

const HomePage = () => {
  const arr = [
    require("./Images/weather-app.png"),
    "https://apppearl.com/wp-content/uploads/2021/04/Untitled-Design-10.jpg.webp",
    "https://weatherdownload.com/wp-content/uploads/2020/03/weather-checking.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === arr.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-page">
      
      <img
        src={arr[currentImageIndex]}
        alt="Slideshow"
        className="slideshow"
      />

    </div>
  );
};

export default HomePage;
