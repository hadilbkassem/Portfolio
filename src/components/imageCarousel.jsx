
import { useState } from 'react';

function ImageCarousel({ images, className }) {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % images.length);
  const prev = () => setIndex((index - 1 + images.length) % images.length);

  return (
    <div className={`carousel ${className || ''}`}>
      <button onClick={prev}>  ◀  </button>
      <img src={images[index]} alt={`Slide ${index}`} />
      <button onClick={next}>▶ </button>
    </div>
  );
}

export default ImageCarousel;
