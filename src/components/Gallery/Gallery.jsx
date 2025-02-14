import "./Gallery.scss";
import photos from "../../data/photos.json";
import GalleryImage from "../GalleryImage/GalleryImage";

export default function Gallery({selectedFilter}) {
  const getFilteredPhotos = () => {
    if (selectedFilter) {
      return photos.filter((photo) => photo.tags.includes(selectedFilter));
    }
    return photos;
  };
  
  const filteredPhotos = getFilteredPhotos();
  return (
    <div className="gallery">
      {filteredPhotos.map((photo) => {
        return (
          <GalleryImage photo = {photo} key={photo.id}/>
          // <article key={photo.id} className="gallery__image-card">
          //   <img
          //     src={photo.photo}
          //     alt={photo.photoDescription}
          //     className="gallery__image"
          //   />
          //   <p className="gallery__image-photographer">{photo.photographer}</p>
          //   <div className="gallery__image-tags">
          //     {photo.tags.map((tag, index) => {
          //       return <button key={index} className="gallery__image-tag label">{tag}</button>;
          //     })}
          //   </div>
          // </article>
        );
      })}
    </div>
  );
}
