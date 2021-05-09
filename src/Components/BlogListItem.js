const BlogListItem = ({ blogs }) => {
  return (
    <div className="blog-list-item">
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

export default BlogListItem;
