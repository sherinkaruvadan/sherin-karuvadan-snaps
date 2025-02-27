import "./CommentForm.scss";
import { useState } from "react";
import axios from "axios";
import { API_URL } from "../../config";

const CommentForm = ({ id }) => {
  const [formValues, setFormValues] = useState({ name: "", comment: "" });
  const [isEmpty, setIsEmpty] = useState(false);

  //handle input change
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };
  //handle form submit
  const handleFormSubmit = async (event) => {
    const form = event.target;
    event.preventDefault();

    //checking the name and cmments length
    if (formValues.name.trim() === "" && formValues.comment.trim() === "") {
      console.log("Error: Name and comment cannot be empty.");
      setFormValues({ name: "", comment: "" });
      setIsEmpty(true);
      return;
    }
    //checking the name length
    if (formValues.name.trim() === "") {
      setFormValues({ name: "", comment: formValues.comment });
      setIsEmpty(true);
      return;
    }

    if (formValues.comment.trim() === "") {
      setFormValues({ name: formValues.name, comment: "" });
      setIsEmpty(true);
      return;
    }
    //posting the comment
    try {
      const response = await axios.post(
        `${API_URL}/photos/${id}/comments`,
        formValues
      );
      setFormValues({ name: "", comment: "" });
      setIsEmpty(false);
    } catch (error) {
      console.error("Error in form submission: ", error);
    }
  };
  return (
    <form onSubmit={handleFormSubmit} className="comment__form">
      <label htmlFor="name" className="form__label">
        Name
      </label>
      <input
        type="text"
        name="name"
        value={formValues.name}
        onChange={handleInputChange}
        className={
          isEmpty && formValues.name.trim() === "" ? "form__error" : ""
        }
        required
      />
      <label htmlFor="comment" className="form__label">
        Comment
      </label>
      <textarea
        name="comment"
        value={formValues.comment}
        onChange={handleInputChange}
        className={
          isEmpty && formValues.comment.trim() === "" ? "form__error" : ""
        }
        required
      />
      <button type="submit" className="comment__form-button">
        Submit
      </button>
    </form>
  );
};

export default CommentForm;
