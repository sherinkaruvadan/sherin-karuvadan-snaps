import "./App.scss";
import { useState } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/Footer/Footer";
import tags from "./data/tags.json";
import FilterTags from "./components/FilterTags/FilterTags";

function App() {
  //manage visibility of filters
  const [isFilter, setIsFilter] = useState(false);

  const filterButtonHandler = () => {
    setIsFilter(!isFilter);
  };

  //manage image display based on the tag selected
  const [selectedFilter, setSelectedFilter] = useState("");
  
  //manage visibility of image on label click
  const filterClickHandler = (tag) => {
    setSelectedFilter(selectedFilter === tag ? "" : tag);
    console.log(tag);
  };

  return (
    <>
      <Header isFilter={isFilter} filterButtonHandler={filterButtonHandler}/>
      <FilterTags
        tags={tags}
        isFilter={isFilter}
        selectedFilter={selectedFilter}
        filterClickHandler={filterClickHandler}
      />
      <Hero />
      <Gallery selectedFilter={selectedFilter} />
      <Footer />
    </>
  );
}

export default App;
