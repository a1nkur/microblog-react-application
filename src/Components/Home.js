import { useEffect, useState } from "react";
import BlogListItem from "./BlogListItem";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3344/blogs")
      .then(response => {
        if (!response.ok) {
          throw Error("We could not fetch the data for that resource.");
        }
        return response.json();
      })
      .then(data => {
        setBlogs(data);
        setIsPending(false);
        setError(null);
      })
      .catch(err => {
        setError(err.message);
        setIsPending(false);
        setBlogs(null);
      });
  }, []);

  return (
    <div className="main-content">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {/* A reusable component where a dynamic state value is passed down using props */}
      {blogs && <BlogListItem blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;
