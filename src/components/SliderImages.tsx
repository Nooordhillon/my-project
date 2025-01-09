import React, { useState, useEffect } from "react";

const SliderImages = () => {
  const images = [
    "https://static.toiimg.com/thumb/width-400,resizemode-4,msid-112042835/112042835.jpg ",
    "https://4kwallpapers.com/images/walls/thumbs_3t/19269.jpg",
    "https://fictionhorizon.com/wp-content/uploads/2024/03/Dandan.jpg",
   "https://rukminim2.flixcart.com/image/850/1000/kvlaaa80/poster/i/n/g/medium-jujutsu-kaisen-yuji-itadori-sakuna-anime-boys-matte-original-imag8g96jnafsqnh.jpeg?q=20&crop=false",
   "https://4kwallpapers.com/images/walls/thumbs_3t/19529.jpg",
   
   
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

 
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative  w-[full] h-screen mx-auto overflow-hidden -z-0">
     
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full flex-shrink-0"
          />
        ))}
      </div>

      
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
      >
        &#10094;
      </button>

      
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
      >
        &#10095;
      </button>

      
      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 mx-1 rounded-full cursor-pointer ${
              index === currentIndex
                ? "bg-black"
                : "bg-gray-400 hover:bg-gray-600"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default SliderImages;