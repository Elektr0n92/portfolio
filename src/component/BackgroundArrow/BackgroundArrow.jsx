import React, { useState } from "react";
import "./BackgroundArrow.css";

function BackgroundArrow({image, imageExpend, name }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPreviewing, setIsPreviewing] = useState(false);

  const handlePreviewClick = () => {
    setIsPreviewing(!isPreviewing);
  };

  return (
    <div
      className={`container border-black border-2 bg-cover flex justify-center items-center`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {isExpanded && (
        <div className="preview-overlay" onClick={handlePreviewClick}>
          <img src={imageExpend} alt={name} className="preview-image" />
        </div>
      )}
     <img src={image} alt={name}/>
    </div>
  );
}

export default BackgroundArrow;
