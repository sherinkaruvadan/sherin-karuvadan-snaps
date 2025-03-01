export default function timeStamp(timestamp) {
  const now = new Date();
  const diffInSeconds = Math.floor((now - timestamp) / 1000);
  const minutes = Math.floor(diffInSeconds / 60);
  const hours = Math.floor(minutes / 60);
  if (minutes < 1) {
    return "Just Now";
  } else if (minutes < 60) {
    return `${minutes} min ago`;
  } else if (hours < 24) {
    return `${hours} hour ago`;
  } else {
    return new Date(timestamp).toLocaleDateString();
  }
}
