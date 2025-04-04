import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../config";
import Header from "../../components/Header/Header";
import Comments from "../../components/Comments/Comments";
import CommentForm from "../../components/CommentForm/CommentForm";
import PhotoDetailss from "../../components/PhotoDetailss/PhotoDetailss";

const PhotoDetails = () => {
  //extract id
  const { id } = useParams();
  //set state variables
  const [photoDetails, setPhotoDetails] = useState(null);

  // fetch details from API
  useEffect(() => {
    const fetchPhotoDetails = async () => {
      try {
        const response = await axios.get(`${API_URL}/photos/${id}`);
        setPhotoDetails(response.data);
      } catch (error) {
        console.log("Error fetching photo details" + error);
      }
    };
    fetchPhotoDetails();
  }, [id]);

  if (!photoDetails) {
    return <>Loading...</>;
  }

  return (
    <>
      <Header />
      <PhotoDetailss photoDetails={photoDetails} />
      <CommentForm id={id} />
      <Comments />
    </>
  );
};

export default PhotoDetails;
