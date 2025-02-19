import "./Gallery.scss";
// import photos from "../../data/photos.json";
import GalleryImage from "../GalleryImage/GalleryImage";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Gallery({isFilter,selectedFilter}) {

  //set the variable with base url
  const baseUrl = "https://unit-3-project-c5faaab51857.herokuapp.com/";
  const api_key = "e0eea5f0-0f8c-4b54-9fc4-ff50843766d4";

  //set state variable and set function for photos
  const [photos, setPhotos] = useState([]);

  //fetch photos from API
  useEffect(()=>{
    const fetchPhotos = async () =>{
      const response = await axios.get(`${baseUrl}photos?api_key=${api_key}`);
      console.log(response.data);
      setPhotos(response.data);
    }
    fetchPhotos();
  },[])

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
        return (
          <GalleryImage photo = {photo} key={photo.id}/>
        );
      })}
    </div>
  );
}
