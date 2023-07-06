import "./Home.css";
import React, { useState, useLayoutEffect } from "react";

function Home() {
  const [animate, setAnimate] = useState(false);

  useLayoutEffect(() => {
    setAnimate(true);
  }, []);

  const handleClick = () => {
    setAnimate(false);
    setTimeout(() => {
      setAnimate(true);
    }, 100);
  };

  const word = "BIENVENUE";
  const letterDelay = 0.1; // Décalage d'animation entre chaque lettre en secondes

  const generateLetterClasses = () => {
    return word.split("").map((letter, index) => {
      const animationDelay = index * letterDelay;
      return (
        <span
          key={index}
          className={`${animate ? "welcome" : ""}`}
          style={{ animationDelay: `${animationDelay}s` }}
        >
          {letter}
        </span>
      );
    });
  };

  return (
    <>
      <div className=" space-y-6 flex flex-col lg:justify-center mt-5 lg:mt-0">
        <div className="text-3xl lg:text-4xl  xl:text-5xl font-extrabold" onClick={handleClick}>
          {generateLetterClasses()},
        </div>
        <div className="flex flex-wrap items-center justify-center flex-row font-raleway">
          <p>
            Je suis développeur WEB, actuellement en recherche d'emploi je vous présente ici mon site qui sert de répertoire pour mes portfolios,
            mais aussi des informations à mon sujet.
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
