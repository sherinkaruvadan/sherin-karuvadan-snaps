import "./Header.scss";
import Wordmark from "../Wordmark/Wordmark";
import ButtonFilter from "../ButtonFilter/ButtonFilter";
import ButtonHome from "../ButtonHome/ButtonHome";
import { useLocation } from "react-router-dom";

export default function Header({ filterButtonHandler, isFilter, setIsFilter }) {

  const location = useLocation();
  //render button based on location
  const selectedButton = location.pathname === "/" ? ( <ButtonFilter filterButtonHandler={filterButtonHandler} isFilter={isFilter} />) : (<ButtonHome />)
  return (
    <header className="header">
      <nav className="header__nav">
        <Wordmark />
        {selectedButton}
      </nav> 
    </header>
  );
}
