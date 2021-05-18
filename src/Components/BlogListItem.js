import { Link } from "react-router-dom";

const BlogListItem = ({ blogs, title }) => {
  return (
    <div className="blog-list-item">
      <h2> {title} </h2>
      {blogs.map(eachBlog => (
        <div className="blog-preview" key={eachBlog.id}>
        {/* Now make the h1 and p clikable links for routing */}
          <Link to={`/blogs/${eachBlog.id}`}>
            <h3>{eachBlog.title}</h3>
            <p>Written by - {eachBlog.author}</p>
          </Link>
          <button>delete</button>
        </div>
      ))}
    </div>
  );
};

export default BlogListItem;
