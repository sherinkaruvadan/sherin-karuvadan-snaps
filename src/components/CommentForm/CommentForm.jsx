import { useState } from "react";
import axios from "axios";

const CommentForm = ({id}) => {

    //set the variable with base url
  const baseUrl = "https://unit-3-project-c5faaab51857.herokuapp.com/";
  const api_key = "e0eea5f0-0f8c-4b54-9fc4-ff50843766d4";

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
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="name">Name</label>
      <input
       type="text" 
       name="name" 
       value={formValues.name}
       onChange={handleInputChange}
       />
      <label htmlFor="comment">Comment</label>
      <textarea 
      name="comment" 
      value={formValues.comment}
      onChange={handleInputChange}
      />
      <button>Submit</button>
    </form>
  );
};

export default CommentForm;
