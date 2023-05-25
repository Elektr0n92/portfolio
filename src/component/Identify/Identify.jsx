import IMG from "../../Assets/wallpapersden.com_showtime-retro_2560x1440.jpg";
import "./Identify.css";
function Identify() {
  return (
    <>
      <div>
        <div className="identity-picture">
          <img src={`${IMG}`} alt="identité"></img>
        </div>
      </div>
    </>
  );
}

export default Identify;
