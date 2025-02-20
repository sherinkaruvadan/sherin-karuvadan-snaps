
const CommentForm = () => {

    const [formValues, setFormValues] = useState({name:"", comment:""});

  return (
    <form>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" />
        <label htmlFor="comment">Comment</label>
        <input type="textarea" name="comment" />
        <button>Submit</button>
    </form>
  )
}

export default CommentForm