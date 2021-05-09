import { useState } from "react";

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
      {blogs.map(eachBlog => {
        return (
          <div className="blog-preview" id={eachBlog.id}>
            <h3>{eachBlog.title}</h3>
            <p>Written by - {eachBlog.author}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
