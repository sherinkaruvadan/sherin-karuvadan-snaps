import "./Wordmark.scss"
import { Link } from "react-router-dom"
const Wordmark = () => {

  const onClickLogo = () => {
    console.log("logo clicked");
    console.log("filter is", isFilter);
    setIsFilter(false);
  }
  return (
    <h1 className="wordmark logo">
      <Link to="/" onClick={onClickLogo}>Snaps</Link>
      </h1>
  )
}

export default Wordmark