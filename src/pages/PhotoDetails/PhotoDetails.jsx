import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import GalleryImage from "../../components/GalleryImage/GalleryImage";

const PhotoDetails = () => {
  //set the variable with base url
  const baseUrl = "https://unit-3-project-c5faaab51857.herokuapp.com/";
  const api_key = "e0eea5f0-0f8c-4b54-9fc4-ff50843766d4";

  //extract id 
  const { id } = useParams();
  //set state variables
  const [photoDetails, setPhotoDetails] = useState(null);

  // fetch details from API
  useEffect(()=>{
    const fetchPhotoDetails = async ()=>{
      try{
        const response = await axios.get(`${baseUrl}photos/${id}?api_key=${api_key}`);
        console.log(response.data);
        setPhotoDetails(response.data)
      }
     catch(error){
      console.error("Error fetching photo details" +error);
     }
    }
    fetchPhotoDetails();
  },[id]);

  return (
    <>
      <div>PhotoDetails</div>
      {/* <GalleryImage photo={photoDetails} /> */}
    </>
  );
};

export default PhotoDetails;
