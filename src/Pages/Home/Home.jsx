import "./Home.css";
import React, { useState } from "react";

function Home() {
  const [animate, setAnimate] = useState(true);

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
        <div className="text-5xl font-extrabold flex" onClick={handleClick}>
          {generateLetterClasses()},
        </div>
        <div className="flex flex-wrap items-center justify-center flex-row font-raleway">
          <p>
            Je m'appelle Timothé Lauvernier, j'ai 26 ans fezfz fze fzefze fz
            fezfezfzihuohfizeof fds ds fsd fds fds qs d qsd sq dsq fs qf sq fsq
            f qs f sqf sqs fq hfoiezihfoizehfizeohfzoh
          </p>
        </div>
      </div>
    </>
  );
}
export default Home;
