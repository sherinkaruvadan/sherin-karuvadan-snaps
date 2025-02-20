import "./CommentForm.scss";
import { useState } from "react";
import axios from "axios";

const CommentForm = ({id, baseUrl, api_key}) => {

  const [formValues, setFormValues] = useState({ name: "", comment: "" });

  const handleInputChange = (event)=>{
    const {name, value} = event.target;
    setFormValues({...formValues, [name]:value});
  }

  const handleFormSubmit = async (event) => {
    const form = event.target;
    event.preventDefault();
    console.log(formValues);

    try{
        const response = await axios.post(`${baseUrl}photos/${id}/comments?api_key=${api_key}`, formValues);
        console.log("Successfully submitted comment")
        setFormValues({name:"", comment:""});
    }
    catch(error){
        console.error("Error in form submission: ",error)
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className="comment__form">
      <label htmlFor="name">Name</label>
      <input
       type="text" 
       name="name" 
       value={formValues.name}
       onChange={handleInputChange}
       required
       />
      <label htmlFor="comment">Comment</label>
      <textarea 
      name="comment" 
      value={formValues.comment}
      onChange={handleInputChange}
      required
      />
      <button type="submit" className="button">Submit</button>
    </form>
  );
};

export default CommentForm;
