import IMG from "../../Assets/wallpapersden.com_showtime-retro_2560x1440.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

import "./Identify.css";
function Identify() {
  return (
    <>
      <div className="p-7 flex flex-col border-b md:flex-row-reverse lg:flex-col items-center lg:border-r border-white">
        <div className="identity-picture">
          <img src={`${IMG}`} alt="identité"></img>
        </div>

        <div className="text-xl flex-1 lg:flex-initial text-end font-extrabold mr-6 ml-10 lg:mt-6 text-center">
          LAUVERNIER TIMOTHE
        </div>

        <ul className=" ml-5 lg:mt-20 lg:ml-0 flex flex-row lg:flex-col font-extrabold space-x-2 lg:space-y-2 flex-1 items-center justify-between lg:justify-normal">
          <li>HOME</li>
          <li>CV</li>
          <li>PORTFOLIO</li>
          <li>CONTACT</li>
        </ul>

        <ul>
          <li>
            <FontAwesomeIcon
              icon={icon({ name: "twitter", style: "brands" })}
            />
          </li>
        </ul>
      </div>
    </>
  );
}

export default Identify;
