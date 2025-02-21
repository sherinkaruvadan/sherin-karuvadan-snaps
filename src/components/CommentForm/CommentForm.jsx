import "./CommentForm.scss";
import { useState } from "react";
import axios from "axios";

const CommentForm = ({id, baseUrl, api_key}) => {

  const [formValues, setFormValues] = useState({ name: "", comment: "" });
  const [isEmpty, setIsEmpty] = useState(false);

  // let isEmpty = false;

  const handleInputChange = (event)=>{
    const {name, value} = event.target;
    setFormValues({...formValues, [name]:value});
  }

  const handleFormSubmit = async (event) => {
    const form = event.target;
    event.preventDefault();
    console.log(formValues);
    
    //checking the name and cmments length 
    if (formValues.name.trim() === "" && formValues.comment.trim() === "") {
      console.log("Error: Name and comment cannot be empty.");
      setFormValues({name:"", comment:""});
      setIsEmpty(true);
      // isEmpty = true;
      return; 
    }
   
    if(formValues.name.trim() === ""){
      setFormValues({name:"", comment:formValues.comment});
      setIsEmpty(true);
      // isEmpty = true;
      return;
    }

   
    if(formValues.comment.trim() === ""){
      setFormValues({ name:formValues.name, comment:""});
      setIsEmpty(true);
      // isEmpty = true;
      return;
    }

    try{
        const response = await axios.post(`${baseUrl}photos/${id}/comments?api_key=${api_key}`, formValues);
        console.log("Successfully submitted comment")
        setFormValues({name:"", comment:""});
        setIsEmpty(false);
    }
    catch(error){
        console.error("Error in form submission: ",error)
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className="comment__form">
      <label htmlFor="name" className="form__label">Name</label>
      <input
       type="text" 
       name="name" 
       value={formValues.name}
       onChange={handleInputChange}
       className={(isEmpty && formValues.name.trim() === "") ? "form__error" :""}
       required
       />
      <label htmlFor="comment" className="form__label">Comment</label>
      <textarea 
      name="comment" 
      value={formValues.comment}
      onChange={handleInputChange}
      className={(isEmpty && formValues.comment.trim() === "") ? "form__error" :""}
      required
      />
      <button type="submit" className="comment__form-button">Submit</button>
    </form>
  );
};

export default CommentForm;
