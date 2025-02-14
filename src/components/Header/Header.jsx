import "./Header.scss";
import { useState } from "react";
// import filterIcon from "../../assets/images/Filter.svg";
import Wordmark from "../Wordmark/Wordmark";
import ButtonFilter from "../ButtonFilter/ButtonFilter";

// import tags from "../../data/tags.json";

export default function Header({ filterButtonHandler, isFilter }) {
  // //manage visibility of filters
  // const [isFilter, setIsFilter] = useState(false);

  // const filterButtonHandler = () => {
  //   setIsFilter(!isFilter);
  // };

  // //manage visibility of image on label click
  // const filterClickHandler = (tag) => {
  //   setSelectedFilter(selectedFilter === tag ? "" : tag);
  //   console.log(tag);
  // };

  return (
    <header className="header">
      <nav className="header__nav">
        <Wordmark />
        <ButtonFilter filterButtonHandler={filterButtonHandler} isFilter={isFilter} />
        {/* <button
          onClick={filterButtonHandler}
          className={`button button__filter ${
            isFilter ? "button__active" : ""
          }`}
        >
          Filters
          <svg
            width="15"
            height="11"
            viewBox="0 0 15 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.66667 10.5H8.33333C8.79167 10.5 9.16667 10.125 9.16667 9.66667C9.16667 9.20833 8.79167 8.83333 8.33333 8.83333H6.66667C6.20833 8.83333 5.83333 9.20833 5.83333 9.66667C5.83333 10.125 6.20833 10.5 6.66667 10.5ZM0 1.33333C0 1.79167 0.375 2.16667 0.833333 2.16667H14.1667C14.625 2.16667 15 1.79167 15 1.33333C15 0.875 14.625 0.5 14.1667 0.5H0.833333C0.375 0.5 0 0.875 0 1.33333ZM3.33333 6.33333H11.6667C12.125 6.33333 12.5 5.95833 12.5 5.5C12.5 5.04167 12.125 4.66667 11.6667 4.66667H3.33333C2.875 4.66667 2.5 5.04167 2.5 5.5C2.5 5.95833 2.875 6.33333 3.33333 6.33333Z"
            />
          </svg>
        </button> */}
      </nav>
      {/* <div className={`header__filter ${isFilter ? "" : "hidden"}`}>
        <h3 className="header__filter-title">Filters</h3>
        <div className="header__filter-labels">
          {tags.map((tag, index) => {
            return (
              <button
                key={index}
                className={`header__filter-label label ${
                  selectedFilter === tag ? "label__active" : ""
                }`}
                onClick={() => filterClickHandler(tag)}
              >
                {tag}
              </button>
            );
          })}
        </div>
      </div> */}
    </header>
  );
}
