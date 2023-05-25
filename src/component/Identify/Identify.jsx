import IMG from "../../Assets/wallpapersden.com_showtime-retro_2560x1440.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

import "./Identify.css";
function Identify() {
  return (
    <>
      <div className="p-7 flex flex-col items-center border-r border-white">
        <div className="identity-picture">
          <img src={`${IMG}`} alt="identité"></img>
        </div>

        <div className="text-xl font-extrabold mt-6 text-center">LAUVERNIER TIMOTHE</div>

        
        <ul className=" nav flex flex-col font-extrabold space-y-2 flex-1 items-center">
          <li>HOME</li>
          <li>CV</li>
          <li>PORTFOLIO</li>
          <li>CONTACT</li>
        </ul>

        <ul>
        <li><FontAwesomeIcon icon={icon({name: 'twitter', style: 'brands'})} /></li>
        </ul>
      </div>
    </>
  );
}

export default Identify;
