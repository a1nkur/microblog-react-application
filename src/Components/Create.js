import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("SuperDude420");
  const [isPending, setTsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = e => {
    e.preventDefault();
    const blog = { title, body, author };

    setTsPending(true);

    //POST REQUEST
    //This operation can be enscapsualted in useFetch (making a universal hook something(?))
    fetch("http://localhost:8080/blogs", {
      // parameter to tackle the data
      // define method to make POST REQUEST
      method: "POST",
      headers: { "Content-Type": "application/json" }, // Tells the server the type of content we are sending with the request which is json data here.
      body: JSON.stringify(blog),
    }) //Since this is async, it returns a callback funtion when the REQUEST has been sent successfully
      .then(() => {
        setTsPending(false);
        console.log("added");
        history.push("/");
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="create">
      <h2>Add a new blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={e => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select value={author} onChange={e => setAuthor(e.target.value)}>
          <option value="SuperDude420">SuperDude420</option>
          <option value="Scoutmen4Real">Scoutmen4Real</option>
        </select>
      </form>
      {!isPending && <button onClick={handleSubmit}>Add Blog</button>}
      {isPending && <button disabled>Submitting...</button>}
    </div>
  );
};

export default Create;

/* Programmatic Redirect */
// After successful POST request we want the page to redirect to home page.
// useHistory -> go back and forth through browser history
// history.go(-1) --> Takes back to last visited page.
// history
