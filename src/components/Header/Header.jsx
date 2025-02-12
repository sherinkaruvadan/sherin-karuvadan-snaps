import "./Header.scss";
import { useState } from "react";
import filterIcon from "../../assets/images/Filter.svg";
// import tags from "../../data/tags.json";

export default function Header({tags, selectedFilter, setSelectedFilter}) {

  //manage visibility of filters
  const [isFilter, setIsFilter] = useState(false);

  const filterButtonHandler = () => {
    setIsFilter(!isFilter);
  };

  //manage visibility of image on label click
  const filterClickHandler = (tag) => {
    setSelectedFilter(selectedFilter === tag ? "" : tag); 
    console.log(tag);
  };

  return (
    <header className="header">
      <nav className="header__nav">
        <h2 className="header__wordmark logo">Snaps</h2>
        <button onClick={filterButtonHandler} className= {`button button__filter ${isFilter ? "button__active":""}`}>
          Filters
          <img src={filterIcon} alt="Filter Icon" className="button__filter" />
        </button>
      </nav>
      <div className={`header__filter ${isFilter ? "" : "hidden"}`}>
        <h3 className="header__filter-title">Filters</h3>
        <div className="header__filter-labels">
          {tags.map((tag, index) => {
            return (
              <button key={index} className={`header__filter-label label ${selectedFilter===tag ? "active":""}`} onClick={()=>filterClickHandler(tag)}>
                {tag}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
}
