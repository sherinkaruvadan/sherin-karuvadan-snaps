import "./GalleryImage.scss"
const GalleryImage = ({photo}) => {
  console.log(photo);
  console.log(photo.tags)
  return (
    <article key={photo.id} className="gallery__image-card">
    <img
      src={photo.photo}
      alt={photo.photoDescription}
      className="gallery__image"
    />
    <p className="gallery__image-photographer">{photo.photographer}</p>
    <div className="gallery__image-tags">
      {photo.tags.map((tag, index) => {
        return <button key={index} className="gallery__image-tag label">{tag}</button>;
      })}
    </div>
  </article>
  )
}

export default GalleryImage