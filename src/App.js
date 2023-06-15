import "./App.css";
import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Identify from "./component/Identify/Identify";
import Cv from "./Pages/Cv/Cv";

function App() {
  return (
    <>
      <div className="home flex-col flex lg:flex-row gap-14">
        <HashRouter>
          <Identify />
          <div
            className="page-container w-1/2 lg:w-2/6
             mx-auto item-start lg:items-center justify-center flex flex-wrap"
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Projects" element={<Portfolio />} />
              <Route path="/Cv" element={<Cv />} />
              <Route path="*" element={<div>ERROR</div>} />
            </Routes>
          </div>
        </HashRouter>
      </div>
      <div className="second-page flex flex-col">
        DEUXIEME PAGE
        <div>Footer</div>
      </div>
    </>
  );
}

export default App;
