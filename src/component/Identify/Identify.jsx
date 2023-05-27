import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

import IMG from "../../Assets/wallpapersden.com_showtime-retro_2560x1440.jpg";
import "./Identify.css";

function Identify() {
  return (
    <div className="p-7 flex flex-col border-b lg:border-r lg:border-b-0 md:flex-row-reverse lg:flex-col items-center border-white">
      <div className="identity-picture">
        <img src={IMG} alt="identité" />
      </div>

      <div className="text-xl basis-auto sm:basis-5/12 lg:flex-initial text-end font-extrabold mr-6 ml-10 lg:mt-6 text-center">
        LAUVERNIER TIMOTHE
      </div>

      <ul className="ml-5 lg:mt-20 lg:ml-0 flex flex-row lg:flex-col font-extrabold space-x-2 lg:space-y-2 flex-1 items-center justify-between lg:justify-normal">
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>CV</li>
        <li>
          <Link to="/Projects/*">PORTFOLIO</Link>
        </li>
        <li>CONTACT</li>
      </ul>

      <ul className="flex flex-row gap-4">
        <li>
          <FontAwesomeIcon icon={icon({ name: "twitter", style: "brands" })} />
        </li>
        <li>
          {" "}
          <a
            href="https://github.com/Elektr0n92"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={icon({ name: "github", style: "brands" })} />
          </a>
        </li>
        <li>
          {" "}
          <FontAwesomeIcon icon={icon({ name: "linkedin", style: "brands" })} />
        </li>
      </ul>
    </div>
  );
}

export default Identify;
