import "./App.css";
import ohmyfood from "../src/Assets/ohmyfood.png";
import BackgroundArrow from "./component/BackgroundArrow/BackgroundArrow";
import Panthere from "../src/Assets/panthere.png";

function App() {
  return (
    <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6">
    <div className="font-extrabold text-3xl">MES PROJETS</div>
      <div className="mt-8 flex items-center flex-row flex-wrap lg:flex-nowrap space-x-0 space-y-2 lg:space-x-2 lg:space-y-0 p-5">
        <BackgroundArrow image={ohmyfood} name={"OHMYFOOD"} />
        <BackgroundArrow image={Panthere} name={"LA PANTHERE"} />
      </div>
    </div>
  );
}

export default App;
