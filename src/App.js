import "./App.css";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Identify from "./component/Identify/Identify";


function App() {
  const isDevelopment = process.env.NODE_ENV === "development";
  const Router = isDevelopment ? BrowserRouter : HashRouter;
  return (
      <div className="flex flex-row">
      <Identify />
      <div className="page-container max-w-7xl mx-auto py-20 px-4 sm:px-6 items-center justify-center flex flex-wrap">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Portfolio" element={<Portfolio />} />
        </Routes>
      </Router>
    </div>
    </div>
  );
}

export default App;
