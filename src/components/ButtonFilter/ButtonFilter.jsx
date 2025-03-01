import "./ButtonFilter.scss";
import FilterSvg from "../../assets/images/Filter.svg";

const ButtonFilter = ({ filterButtonHandler, isFilter }) => {
  return (
    <button
      onClick={filterButtonHandler}
      className={`button button__filter ${isFilter ? "button__active" : ""}`}
    >
      Filters
      <img src={FilterSvg} alt="Filter" className="button__svg" />
    </button>
  );
};

export default ButtonFilter;
