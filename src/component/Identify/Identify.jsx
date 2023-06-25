import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

import IMG from "../../Assets/identity.png";
import "./Identify.css";

function Identify() {
  return (
    <div className="gap-2 p-7 flex flex-col border-b lg:border-r lg:border-b-0 md:flex-row-reverse md:flex-wrap md:gap-0 lg:flex-col lg:flex-nowrap items-center border-white">
      <div className="identity-picture">
        <img src={IMG} alt="identité" />
      </div>

      <div className="name text-xl basis-auto sm:basis-4/12 lg:flex-initial text-end font-extrabold mr-6 ml-10 lg:mt-6 text-center">
        LAUVERNIER TIMOTHE
      </div>

      <ul className="ml-5 lg:mt-20 lg:ml-0 flex flex-row lg:flex-col font-extrabold space-x-2 lg:space-y-2 flex-1 items-center justify-between lg:justify-normal">
        <li>
          <NavLink to="/">HOME</NavLink>
        </li>
        <li>
          <NavLink to="/Cv">CV</NavLink>
        </li>
        <li>
          <NavLink to="/Projects">PORTFOLIO</NavLink>
        </li>
        <li>
          <NavLink to="/Contact">CONTACT</NavLink>
        </li>
      </ul>

      <ul className="flex flex-row gap-4 tems-center justify-center md:basis-full lg:basis-auto">
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
          <a
            href="https://www.linkedin.com/in/timoth%C3%A9-lauvernier-142354146/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={icon({ name: "linkedin", style: "brands" })}
            />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Identify;
