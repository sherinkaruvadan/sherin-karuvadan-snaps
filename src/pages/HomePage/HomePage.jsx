import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../config";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";

const HomePage = () => {
  //set state variables for photos
  const [tags, setTags] = useState([]);

  //fetch tags from api
  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await axios.get(`${API_URL}/tags`);
        setTags(response.data);
      } catch (error) {
        console.error("Error fetching tags: ", error);
      }
    };
    fetchTags();
  }, []);

  //manage visibility of filters
  const [isFilter, setIsFilter] = useState(false);
  const filterButtonHandler = () => {
    if (isFilter) {
      setSelectedFilter(""); // ensure the selcted filter is removed on clicking filters button
    }
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
      <Header
        isFilter={isFilter}
        setIsFilter={setIsFilter}
        filterButtonHandler={filterButtonHandler}
      />
      <Main
        tags={tags}
        isFilter={isFilter}
        selectedFilter={selectedFilter}
        filterClickHandler={filterClickHandler}
      />
    </>
  );
};

export default HomePage;
