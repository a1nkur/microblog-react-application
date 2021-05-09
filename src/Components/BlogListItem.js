const BlogListItem = ({ blogs, title, setBlogs }) => {
  const handleDelete = idToDelete => {
    setBlogs(blogs.filter(eachItem => eachItem.id !== idToDelete));
  };

  return (
    <div className="blog-list-item">
      <h2> {title} </h2>
      {blogs.map(eachBlog => (
        <div className="blog-preview" key={eachBlog.id}>
          <h3>{eachBlog.title}</h3>
          <p>Written by - {eachBlog.author}</p>
          <button onClick={() => handleDelete(eachBlog.id)}>delete</button>
        </div>
      ))}
    </div>
  );
};

export default BlogListItem;
