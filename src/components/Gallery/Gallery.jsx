import "./Gallery.scss";
import photos from "../../data/photos.json";
import GalleryImage from "../GalleryImage/GalleryImage";

export default function Gallery({isFilter,selectedFilter}) {
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
