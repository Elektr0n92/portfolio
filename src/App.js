import "./App.css";
import { Routes, Route, HashRouter as Router } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Identify from "./component/Identify/Identify";

function App() {
  return (
    <>
      <div className="flex-col flex lg:flex-row">
        <Identify />
        <div className="page-container w-1/5 mx-auto items-center justify-center flex flex-wrap">
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Portfolio" element={<Portfolio />} />
            </Routes>
          </Router>
        </div>
      </div>
      <div>DEUXIEME PAGE</div>
    </>
  );
}

export default App;
