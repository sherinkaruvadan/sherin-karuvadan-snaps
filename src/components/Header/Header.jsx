import "./Header.scss";
// import { useState } from "react";
import Wordmark from "../Wordmark/Wordmark";
import ButtonFilter from "../ButtonFilter/ButtonFilter";
import ButtonHome from "../ButtonHome/ButtonHome";
import { useLocation } from "react-router-dom";

export default function Header({ filterButtonHandler, isFilter }) {

  const location = useLocation();
  //render button based on location
  const selectedButton = location.pathname === "/" ? ( <ButtonFilter filterButtonHandler={filterButtonHandler} isFilter={isFilter} />) : (<ButtonHome />)
  return (
    <header className="header">
      <nav className="header__nav">
        <Wordmark />
        {selectedButton}
        {/* <ButtonFilter filterButtonHandler={filterButtonHandler} isFilter={isFilter} /> */}
      </nav>
    </header>
  );
}
