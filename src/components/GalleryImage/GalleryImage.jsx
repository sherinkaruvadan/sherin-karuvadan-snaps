import "./GalleryImage.scss";
import { Link } from "react-router-dom";
import { API_URL } from "../../config";
const GalleryImage = ({ photo }) => {
  return (
    <article key={photo.id} className="gallery__image-card">
      <Link to={`/photo/${photo.id}`}>
        <img
          src={`${API_URL}/${photo.photo}`}
          alt={photo.photoDescription}
          className="gallery__image"
        />
      </Link>
      <p className="gallery__image-photographer">{photo.photographer}</p>
      <div className="gallery__image-tags">
        {photo.tags?.map((tag, index) => {
          return (
            <button key={index} className="gallery__image-tag label">
              {tag}
            </button>
          );
        })}
      </div>
    </article>
  );
};

export default GalleryImage;
