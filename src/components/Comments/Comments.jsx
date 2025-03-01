import "./Comments.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../config";
import timeStamp from "../../utils.js";

const Comments = () => {
  const [comments, setComments] = useState([]);
  //extract id
  const { id } = useParams();
  //fetch comments
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(`${API_URL}/photos/${id}/comments`);
        setComments(response.data);
      } catch (error) {
        console.error("Error fetching comments: " + error);
      }
    };
    fetchComments();
  }, [comments]);
  //sort comments by date
  let sortedComments = comments.sort((a, b) => {
    return new Date(b.timestamp) - new Date(a.timestamp);
  });
  return (
    <>
      <div className="comment">
        <h4 className="comment__title">
          {sortedComments.length}{" "}
          {sortedComments.length > 1 ? "Comments" : "Comment"}
        </h4>
        {sortedComments.map((comment) => {
          const date = timeStamp(comment.timestamp);
          return (
            <article key={comment.id} className="comment__card">
              <div className="comment__header">
                <p className="comment__name body__copy">{comment.name}</p>
                <p className="comment__date body__copy">{date}</p>
              </div>
              <p className="comment__text">{comment.comment}</p>
            </article>
          );
        })}
      </div>
    </>
  );
};

export default Comments;
