import "./Header.scss";
import filterIcon from "../../assets/images/Filter.svg";

export default function Header() {
  return (
    <header className="header">
      <nav className="header__nav">
        <h2 className="header__wordmark logo">Snaps</h2>
        <button className="button button__filter">
          Filters
          <img src={filterIcon} alt="Filter Icon" className="button__filter" />
        </button>
      </nav>
      <section className="hero">
        <p className="hero__title">Our Mission:</p>
        <h1 className="hero__text">
            Provide photographers a space to share photos of the neighbourhoods they cherish, <span className="hero__text--modifier">expressed in their unique style.</span>
        </h1>
      </section>
    </header>
  );
}
