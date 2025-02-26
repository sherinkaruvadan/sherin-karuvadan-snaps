import "./FilterTags.scss";

const FilterTags = ({ tags, isFilter, selectedFilter, filterClickHandler }) => {
  return (
    <div className={`filters ${isFilter ? "" : "hidden"}`}>
      <h3 className="filters__title">Filters</h3>
      <div className="filters__container">
        {tags.map((tag, index) => {
          return (
            <button
              key={index}
              className={`filter label ${
                selectedFilter === tag ? "label__active" : ""
              }`}
              onClick={() => filterClickHandler(tag)}
            >
              {tag}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default FilterTags;
