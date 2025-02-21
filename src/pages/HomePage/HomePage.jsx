import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import Footer from "../../components/Footer/Footer";
// import tags from "../../data/tags.json"


const HomePage = () => {

  //set the variable with base url
  const baseUrl = "https://unit-3-project-c5faaab51857.herokuapp.com/";
  const api_key = "e0eea5f0-0f8c-4b54-9fc4-ff50843766d4";

  //set state variables for photos
  const [tags, setTags] = useState([]);


  //fetch tags from api

  useEffect(()=>{
    const fetchTags = async ()=>{
      const response = await axios.get(`${baseUrl}tags?api_key=${api_key}`);
      // console.log(response.data);
      setTags(response.data);
    }
    fetchTags();
  },[])



   //manage visibility of filters
   const [isFilter, setIsFilter] = useState(false);
   const filterButtonHandler = () => {
     if(isFilter){       
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
       <Header isFilter={isFilter} filterButtonHandler={filterButtonHandler}/>
       <Main tags={tags} isFilter={isFilter} selectedFilter ={selectedFilter} filterClickHandler={filterClickHandler} />
       {/* <Footer /> */}
     </>
   );
}

export default HomePage