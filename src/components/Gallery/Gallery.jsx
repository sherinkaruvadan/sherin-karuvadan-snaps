import "./Gallery.scss";
import GalleryImage from "../GalleryImage/GalleryImage";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../config";

export default function Gallery({ isFilter, selectedFilter }) {
  //set the variable with base url
  // const baseUrl = "https://unit-3-project-c5faaab51857.herokuapp.com/";
  // const api_key = "e0eea5f0-0f8c-4b54-9fc4-ff50843766d4";

  //set state variable and set function for photos
  const [photos, setPhotos] = useState([]);

  //fetch photos from API
  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get(`${API_URL}/photos`);
        setPhotos(response.data);
      } catch (error) {
        console.log("Error fetching photos:" + error);
      }
    };
    fetchPhotos();
  }, []);

  const getFilteredPhotos = () => {
    if (selectedFilter) {
      return photos.filter((photo) => photo.tags.includes(selectedFilter));
    }
    return photos;
  };

  const filteredPhotos = getFilteredPhotos();
  return (
    <div className={`gallery ${isFilter ? "gallery--filtered" : ""}`}>
      {filteredPhotos.map((photo) => {
        return <GalleryImage key={photo.id} photo={photo} />;
      })}
    </div>
  );
}
