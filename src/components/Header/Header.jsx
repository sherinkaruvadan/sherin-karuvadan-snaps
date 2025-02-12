import "./Header.scss";
import { useState } from "react";
import filterIcon from "../../assets/images/Filter.svg";
import tags from "../../data/tags.json";

export default function Header() {
  console.log(tags);

  //manage visibility of filters
  const [isFilter, setIsFilter] = useState(false);

  const buttonHandler = () => {
    console.log("clicked");
    console.log(isFilter);
    setIsFilter(!isFilter);
  };
  return (
    <header className="header">
      <nav className="header__nav">
        <h2 className="header__wordmark logo">Snaps</h2>
        <button onClick={buttonHandler} className="button button__filter">
          Filters
          <img src={filterIcon} alt="Filter Icon" className="button__filter" />
        </button>
      </nav>
      <div className={`header__filter ${isFilter ? "" : "hidden"}`}>
        <h3 className="header__filter-title">Filters</h3>
        <div className="header__filter-labels">
          {tags.map((tag, index) => {
            return (
              <button key={index} className="header__filter-label label">
                {tag}
              </button>
            );
          })}
        </div>
      </div>
      <section className="hero">
        <p className="hero__title">Our Mission:</p>
        <h1 className="hero__text">
          Provide photographers a space to share photos of the neighbourhoods
          they cherish,{" "}
          <span className="hero__text--modifier">
            expressed in their unique style.
          </span>
        </h1>
      </section>
    </header>
  );
}
