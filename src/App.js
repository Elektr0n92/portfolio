import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Identify from "./component/Identify/Identify";
import Cv from "./Pages/Cv/Cv";
import Contact from "./Pages/Contact/Contact.jsx";

function App() {
  const location = useLocation();

  return (
    <div className="flex flex-col">
      <div className="home flex-col flex lg:flex-row gap-14">
        <Identify />
        <div
          className={`page-container lg:w-2/6 mx-auto item-start lg:items-center justify-center flex flex-wrap ${
            location.pathname === "/Projects" ? "w-full lg:w-auto" : "w-11/12 "
          }`}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Projects" element={<Portfolio />} />
            <Route path="/Cv" element={<Cv />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="*" element={<div>ERROR</div>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
//<div className="second-page flex flex-col"></div> => Deuxieme page

export default App;
