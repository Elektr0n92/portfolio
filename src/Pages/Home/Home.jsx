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
        <div className="text-5xl font-extrabold" onClick={handleClick}>
          {generateLetterClasses()},
        </div>
        <div className="flex flex-wrap items-center justify-center flex-row font-raleway">
          <p>
            Je m'appelle Timothé Lauvernier, j'ai réalisé ce petit site internet
            afin de présenter mon profil professionnelle grâce à mes
            compétences. Compétences que j'ai pu intégrer au cours de ma
            formation de développeur web.
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
