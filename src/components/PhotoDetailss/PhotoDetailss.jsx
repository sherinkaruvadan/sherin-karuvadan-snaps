import "./PhotoDetailss.scss";
import { API_URL } from "../../config";
import timeStamp from "../../utils.js";
import LikeOutlineSvg from "../../assets/images/Like_Outline.svg";

const PhotoDetailss = ({ photoDetails }) => {
  const photo = photoDetails;
  return (
    <article key={photo.id} className="photo">
      <img
        src={`${API_URL}/${photo.photo}`}
        alt={photo.photoDescription}
        className="photo__image gallery__image"
      />
      <div className="photo__tags">
        {photo.tags?.map((tag, index) => {
          return (
            <button key={index} className="photo__tag label">
              {tag}
            </button>
          );
        })}
      </div>
      <div className="photo__bottom">
        <p className="photo__likes">
          <img src={LikeOutlineSvg} alt="Like" className="photo__svg" />
          {photo.likes} Likes
        </p>
        <p className="photo__photographer">Photo by {photo.photographer}</p>
        <p className="photo__date">{timeStamp(photo.timestamp)}</p>
      </div>
    </article>
  );
};

export default PhotoDetailss;
