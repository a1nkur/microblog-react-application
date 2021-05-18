import BlogListItem from "./BlogListItem";
import useFetch from "../useFetch";

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8080/blogs");

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
