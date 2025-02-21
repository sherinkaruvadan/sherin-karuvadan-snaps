import "./Comments.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Comments = ({ baseUrl, api_key, comments, setComments }) => {
  //extract id
  const { id } = useParams();

  //set state variables
  // const [comments, setComments] = useState([]);

  //fetch comments
  useEffect(() => {
    const fetchComments = async () => {
      const response = await axios.get(
        `${baseUrl}photos/${id}/comments?api_key=${api_key}`
      );
      // console.log(response.data);
      setComments(response.data);
    };
    fetchComments();
  }, [comments]);

  comments = comments.sort((a,b)=>{
    return new Date(b.timestamp)-new Date(a.timestamp);
  })

  return (
    <>
      <div className="comment">
        <h4 className="comment__title">{comments.length} {comments.length>1 ? "Comments" : "Comment"}</h4>
        {comments.map((comment) => {
          const date = new Date(comment.timestamp).toLocaleDateString();
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
