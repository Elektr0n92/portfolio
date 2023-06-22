import React, { useState, useEffect } from "react";
import Portfolio from "../../Datas/Portfolio.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
import { css } from "@emotion/react";
import { RingLoader } from "react-spinners";
import "./BackgroundArrow.css";

function BackgroundArrow() {
  const [isLoading, setIsLoading] = useState(false);

  const handleImageLoad = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Délai de 2000 millisecondes (2 secondes)
  };

  const handleImageError = () => {};

  useEffect(() => {
    handleImageLoad();
  }, [isLoading]);

  const elements = Portfolio.elements;
  const initialState = elements.reduce((acc, obj) => {
    acc[obj.name] = false;
    return acc;
  }, {});
  const [expandedStates, setExpandedStates] = useState(initialState);

  useEffect(() => {
    // Gérer la modification de la propriété CSS du body
    const hasExpandedState = Object.values(expandedStates).some(
      (state) => state
    );
    if (hasExpandedState) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [expandedStates]);

  const handlePreviewClick = (name) => {
    setExpandedStates((prevState) => ({
      ...prevState,
      [name]: !prevState[name],
    }));
    setIsLoading(true);
  };

  return elements.map((obj, index) => {
    const concatenatedName = obj.name.replace(/\s/g, "-");

    return (
      <div
        className={`${concatenatedName} container border-black border-2 bg-cover flex justify-center items-center w-24 h-24 xl:w-40 xl:h-40`}
        onClick={() => handlePreviewClick(obj.name)}
        key={obj.name + index}
      >
        {expandedStates[obj.name] && (
          <div className="preview-overlay" onClick={() => handlePreviewClick}>
            {isLoading ? (
              <div className="spinner-container">
                <RingLoader css={spinnerStyles} size={60} color={"#123abc"} />
              </div>
            ) : (
              <>
                <img
                  src={process.env.PUBLIC_URL + obj.imgExpend}
                  alt={obj.name}
                  className="preview-image"
                  onLoad={() => handleImageLoad}
                  onError={handleImageError}
                />

                <div className="flex items-center gap-5">
                  Lien GitHub{" "}
                  <span className="text-3xl">
                    <FontAwesomeIcon
                      icon={icon({ name: "arrow-right", style: "solid" })}
                    />
                  </span>
                  <a href={obj.github} target="_blank" rel="noreferrer">
                    <div className="btn">{obj.github}</div>
                  </a>
                </div>
              </>
            )}
          </div>
        )}
        <img src={process.env.PUBLIC_URL + obj.imgLogo} alt={obj.name} />
      </div>
    );
  });
}

export default BackgroundArrow;

const spinnerStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
