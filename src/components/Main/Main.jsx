import "./Main.scss";
import Hero from "../Hero/Hero";
import Gallery from "../Gallery/Gallery";
import FilterTags from "../FilterTags/FilterTags";
const Main = ({ tags, isFilter, selectedFilter, filterClickHandler }) => {
  return (
    <div className={`${isFilter ? "main-container" : ""}`}>
      <FilterTags
        tags={tags}
        isFilter={isFilter}
        selectedFilter={selectedFilter}
        filterClickHandler={filterClickHandler}
      />
      <div className={`${isFilter ? "heroGallery-container" : ""}`}>
        <Hero />
        <Gallery selectedFilter={selectedFilter} isFilter={isFilter}/>
      </div>
    </div>
  );
};

export default Main;
