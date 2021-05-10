import { useEffect, useState } from "react";
import BlogListItem from "./BlogListItem";

const Home = () => {
  const [blogs, setBlogs] = useState(null);


  useEffect(() => {
    fetch("http://localhost:3344/blogs")
    .then((response) => response.json())
    .then(data => setBlogs(data))
  }, []);

  return (
    <div className="main-content">
      {/* A reusable component where a dynamic state value is passed down using props */}
      {blogs && <BlogListItem
        blogs={blogs}
        title="All Blogs"
  
      />}
      
    </div>
  );
};

export default Home;
