import React, { useEffect, useRef, useState } from "react";

const ImageCarousel = ({ images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState();
  const carouselItemsRef = useRef([]);

  useEffect(() => {
    if (images && images[0]) {
      carouselItemsRef.current = carouselItemsRef.current.slice(
        0,
        images.length
      );

      setSelectedImageIndex(0);
      setSelectedImage(images[0]);
    }
  }, [images]);

  const handleSelectedImageChange = (newIdx) => {
    if (images && images.length > 0) {
      setSelectedImage(images[newIdx]);
      setSelectedImageIndex(newIdx);
    }
  };

  return (
    <div className="carousel-container">
      <div
        className="selected-image bg-center bg-cover rounded-2xl transition-transform duration-500 hover:scale-105"
        style={{ backgroundImage: `url(${selectedImage})` }}
      />

      <div className="carousel-images flex gap-3 mt-4">
        {images &&
          images.map((image, idx) => (
            <div
              onClick={() => handleSelectedImageChange(idx)}
              style={{ backgroundImage: `url(${image})` }}
              key={image.id}
              className={`carousel-image bg-center bg-cover rounded-xl cursor-pointer 
                     transition-transform duration-500 hover:scale-110 ${
                       selectedImageIndex === idx &&
                       "carousel-image-selected ring-2 ring-blue-500"
                     }`}
              ref={(el) => (carouselItemsRef.current[idx] = el)}
            />
          ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
