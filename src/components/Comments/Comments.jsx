import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Comments = () => {
  //set the variable with base url
  const baseUrl = "https://unit-3-project-c5faaab51857.herokuapp.com/";
  const api_key = "e0eea5f0-0f8c-4b54-9fc4-ff50843766d4";

  //extract id
  const { id } = useParams();

  //set state variables
  const [comments, setComments] = useState([]);

  //fetch comments
  useEffect(() => {
    const fetchComments = async () => {
      const response = await axios.get(
        `${baseUrl}photos/${id}/comments?api_key=${api_key}`
      );
      console.log(response.data);
      setComments(response.data);
    };
    fetchComments();
  }, []);

  return (
    <>
      <div className="comment">
        <h4 className="comment__title">{comments.length} Comments</h4>
        {comments.map((comment) => {
          const date = new Date(comment.timestamp).toLocaleDateString();
          return (
            <article key={comment.id} className="comment__card">
              <p className="comment__name">{comment.name}</p>
              <p className="comment__date">{date}</p>
              <p className="comment__text">{comment.comment}</p>
            </article>
          );
        })}
      </div>
    </>
  );
};

export default Comments;
