import React, { useState } from "react";
import "./BackgroundArrow.css";

function BackgroundArrow({ image, name }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPreviewing, setIsPreviewing] = useState(false);

  const handlePreviewClick = () => {
    setIsPreviewing(!isPreviewing);
  };

  return (
    <div
      className={`container border-black border-2 w-full bg-cover flex flex-col justify-center items-center pb-5`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {isExpanded && (
        <div className="preview-overlay" onClick={handlePreviewClick}>
          <img src={image} alt={name} className="preview-image" />
        </div>
      )}
      <div className="font-extrabold">{name}</div>
      <hr className=" separateur mt-2 w-full mx-auto"></hr>
      <div>{name} est mon premier projet OPENCLASSROOMS</div>
    </div>
  );
}

export default BackgroundArrow;
