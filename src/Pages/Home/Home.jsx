import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useLayoutEffect, useEffect } from "react";

function Home() {
  const [animate, setAnimate] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [showTooltip, setShowTooltip] = useState(false);
  const mobile = screenWidth > 768;

  const handleMouseEnter = () => {
    if (!mobile) {
      setShowTooltip(true);
    }
  };

  const handleMouseLeave = () => {
    if (!mobile) {
      setShowTooltip(false);
    }
  };

  useLayoutEffect(() => {
    setAnimate(true);
  }, []);

  const handleClick = () => {
    setAnimate(false);
    setTimeout(() => {
      setAnimate(true);
    }, 100);
  };

  useEffect(() => {
    if (mobile) {
      setShowTooltip(false);
    }
  }, [mobile]);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
        <div
          className="text-3xl lg:text-4xl  xl:text-5xl font-extrabold"
          onClick={handleClick}
        >
          {generateLetterClasses()},
        </div>
        <div className="flex flex-wrap items-center flex-row font-raleway">
          <p>
            Développeur WEB actuellement en recherche d'emploi, je répertorie
            sur cette application web :
            <ul className="list-disc m-5">
              <li>
                Mon parcours professionnel, mes compétences et centres
                d'intérêt.
              </li>
              <li>
                Les différents projets que j'ai réalisés au cours de ma
                formation.
              </li>
              <li>Les réseaux sociaux sur lesquels je suis actif</li>
            </ul>
          </p>
          <p className="">
            Ce site a été réalisé par le biais de différents
            langages(JavaScript, HTML et CSS). Afin d'optimiser son
            développement, j'ai appliqué les frameworks React et tailwindCSS.
            L'application web a été propulsée par CRA.
          </p>
          <p className="mt-2">
            Ces langages et outils précités étant une liste non-exhaustive des
            stacks technologiques que je maîtrise
          </p>
          <p className="italic flex justify-center mt-10 gap-5 items-center w-full">
            <div className="flex flex-col justify-center item-center gap-5 lg:gap-0">
              <FontAwesomeIcon
                icon={faCircleExclamation}
                size="xl"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="tooltip-container"
              />
              {showTooltip && (
                <div className="tooltip-content">
                  Ce site est susceptible d'être mise à jour afin d'apporter des
                  corrections/améliorations de l'expérience utilisateurs/ajout
                  de contenus...
                </div>
              )}
            </div>
            {mobile
              ? "Ce site est susceptible d'être mis à jour afin d'apporter des corrections, des améliorations de l'expérience utilisateur et l'ajout de contenus."
              : null}
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
