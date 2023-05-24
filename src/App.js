import "./App.css";
import ohmyfood from '../src/Assets/ohmyfood.png'
import BackgroundArrow from './component/BackgroundArrow'


function App() {

  return (
    <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6">
      <div className="mt-8 flex flex-wrap  items-center flex-col space-x-0 md:space-x-10 md:flex-row p-5">
        <div className="border-black border-2 w-full h-48 max-h-full bg-cover" style={{backgroundImage: `url(${ohmyfood})`}} onClick={() => setIsExpanded(!isExpanded)}>OHMYFOOD</div>
      </div>
    </div>
  );
}

export default App;
