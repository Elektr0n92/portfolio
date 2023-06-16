import BackgroundArrow from "../../component/BackgroundArrow/BackgroundArrow";
import Panthere from "../../Assets/panthere.png";
import ohmyfood from "../../Assets/ohmyfood.png";
import ohmyfoodLogo from '../../Assets/ohmyfoodLogo.png'
function Portfolio() {
  return (
    <div>
      <div className="font-extrabold text-3xl">MES PROJETS</div>
      <div className="mt-8 flex items-center flex-row flex-wrap lg:flex-nowrap space-x-0 space-y-2 lg:space-x-2 lg:space-y-0 p-5">
        <BackgroundArrow image={ohmyfoodLogo} imageExpend={ohmyfood} name={"OHMYFOOD"} />
        <BackgroundArrow imageExpend={Panthere} name={"LA PANTHERE"} />
      </div>
    </div>
  );
}
export default Portfolio;
