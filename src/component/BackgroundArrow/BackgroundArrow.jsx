import React, { useState } from "react";
import Portfolio from '../../Datas/Portfolio.json'
import "./BackgroundArrow.css";

function BackgroundArrow({ image, imageExpend }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPreviewing, setIsPreviewing] = useState(false);
  const elements = Portfolio.elements

  const handlePreviewClick = () => {
    setIsPreviewing(!isPreviewing);
  };

  return (
    elements.map((obj, index) => (
      <div
        className={`${obj.name} container border-black border-2 bg-cover flex justify-center items-center`}
        onClick={() => setIsExpanded(!isExpanded)}
        key={obj.name + index}
      >
        {isExpanded && (
          <div className="preview-overlay" onClick={handlePreviewClick}>
            <img src={imageExpend} alt={obj.name} className="preview-image" />
          </div>
        )}
        <img src={image} alt={obj.name} />
      </div>
    ))
  );
}

export default BackgroundArrow;