import React, { useEffect, useRef, useState } from "react";

const imageSources = [
  "https://res.cloudinary.com/dameng/image/upload/v1515753435/highway-bg_yurafx.jpg",
  "https://res.cloudinary.com/dameng/image/upload/v1528980400/bg103_wbllvp.jpg",
  "https://res.cloudinary.com/dameng/image/upload/v1528980405/bg102_llvhrx.png"
];
const delay = 2000;

export default function SliderShow() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current); // reset timeout
    }
  }

  useEffect(() => {
    resetTimeout();

    timeoutRef.current = setTimeout(
      () =>
        setIndex(prevIndex =>
          prevIndex === imageSources.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {imageSources.map((url, index) => (
          <img className="slide" key={`${index}${url}`} src={url} alt={url} />
        ))}
      </div>
      <div className="slideshowDots">
        {imageSources.map((url, idx) => (
          <div
            key={`${idx}${url}`}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
