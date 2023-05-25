import "./App.css";
import ohmyfood from "../src/Assets/ohmyfood.png";
import BackgroundArrow from "./component/BackgroundArrow/BackgroundArrow";
import Panthere from "../src/Assets/panthere.png";

function App() {
  return (
    <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6">
      <div className="mt-8 flex flex-wrap  items-center flex-col space-y-0 md:space-y-10 md:flex-row p-5">
        <BackgroundArrow image={ohmyfood} name={"OHMYFOOD"} />
        <BackgroundArrow image={Panthere} name={"LA PANTHERE"} />
      </div>
    </div>
  );
}

export default App;
