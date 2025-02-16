import "./Header.scss";
import { useState } from "react";
import Wordmark from "../Wordmark/Wordmark";
import ButtonFilter from "../ButtonFilter/ButtonFilter";

export default function Header({ filterButtonHandler, isFilter }) {
  return (
    <header className="header">
      <nav className="header__nav">
        <Wordmark />
        <ButtonFilter filterButtonHandler={filterButtonHandler} isFilter={isFilter} />
      </nav>
    </header>
  );
}
