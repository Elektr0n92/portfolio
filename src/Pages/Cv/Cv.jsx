import CV from "../../Assets/CV.png";
import "./Cv.css";
function Cv() {
  return (
    <div className="max-h-full">
      <a href={CV} alt="CV" target="_blank" rel="noreferrer">
        <img src={CV} alt="CV" className="max-h-full" />
      </a>
    </div>
  );
}

export default Cv;
