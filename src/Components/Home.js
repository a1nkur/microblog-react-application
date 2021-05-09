import { useState } from "react";
import BlogListItem from "./BlogListItem";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      author: "Magnus",
      id: 1,
      title: "Art of living",
      body: "lorem ipsum ...",
    },
    {
      author: "Karl",
      id: 2,
      title: "Interent Of Today",
      body: "lorem ipsum ...",
    },
    {
      author: "Krissy",
      id: 3,
      title: "Biowarfare",
      body: "lorem ipsum ...",
    },
  ]);

  return (
    <div className="main-content">
      {/* A reusable component where a dynamic state value is passed down using props */}
      <BlogListItem blogs={blogs} />
    </div>
  );
};

export default Home;
