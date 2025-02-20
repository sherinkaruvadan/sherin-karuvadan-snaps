import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../../components/Header/Header";
import GalleryImage from "../../components/GalleryImage/GalleryImage";
import Comments from "../../components/Comments/Comments";
import CommentForm from "../../components/CommentForm/CommentForm";

const PhotoDetails = () => {
  //set the variable with base url
  const baseUrl = "https://unit-3-project-c5faaab51857.herokuapp.com/";
  const api_key = "e0eea5f0-0f8c-4b54-9fc4-ff50843766d4";

  //extract id 
  const { id } = useParams();
  //set state variables
  const [photoDetails, setPhotoDetails] = useState(id);

  //Lifting the state for reflecting the newly added comment immediately in page
  const [comments, setComments] = useState([]);

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
      <Header />
     <img src={photoDetails.photo} width={300} alt="" />
      {/* <GalleryImage photo={photoDetails} /> */}
      
      <CommentForm id ={id} baseUrl={baseUrl} api_key={api_key} />
      <Comments baseUrl={baseUrl} api_key={api_key} comments={comments} setComments={setComments} />
    </>
  );
};

export default PhotoDetails;
