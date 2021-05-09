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
      title: "Internet Of Today",
      body: "lorem ipsum ...",
    },
    {
      author: "Fritz",
      id: 3,
      title: "Biowarfare",
      body: "lorem ipsum ...",
    },
    {
      author: "Fritz",
      id: 4,
      title: "Black Death",
      body: "lorem ipsum ...",
    },
  ]);

  const handleDelete = idToDelete => {
    setBlogs(blogs.filter(eachItem => eachItem.id !== idToDelete));
  };

  return (
    <div className="main-content">
      {/* A reusable component where a dynamic state value is passed down using props */}
      <BlogListItem
        blogs={blogs}
        title="All Blogs"
        handleDelete={handleDelete}
      />
      <BlogListItem
        blogs={blogs.filter(eachItem => eachItem.author === "Fritz")}
        title="Fritz's blogs"
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default Home;
