import "./App.scss";
import { useState } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import tags from "./data/tags.json";

function App() {

  //manage image display based on the tag selected
  const [selectedFilter, setSelectedFilter] = useState("");
     
  return (
    <>
      <Header tags={tags} selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter}/>
      <Hero />
      <Main selectedFilter={selectedFilter}/>
      <Footer />
    </>
  );
}

export default App;
