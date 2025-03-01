import "./ButtonHome.scss";
import ArrowSvg from "../../assets/images/Arrow.svg";
import { useNavigate } from "react-router-dom";

const ButtonHome = () => {
  let navigate = useNavigate();
  //function to handle home button
  const handleHomeClick = () => {
    navigate("/");
  };
  return (
    <button onClick={handleHomeClick} className="button button__home">
      <img src={ArrowSvg} alt="Arrow" />
      Home
    </button>
  );
};

export default ButtonHome;
