//It catches the id from route paramter
import { useParams } from "react-router";
import useFetch from "../useFetch";
// Time to resune out cusotm hook -> useFetch

const BlogDetail = () => {
    // Destructure the id property from returned object
    const { id } = useParams();
    const { error, isPending, data: blog } = useFetch(`http://localhost:8080/blogs/${id}`);

    return ( 
        <div className="blog-detail">
            {isPending && <div>Loading...</div>}
            {error && <p>{error}</p>}
            {blog && (
                <article>
                    <h1>{blog.title}</h1>
                    <h6>Wriiten by - { blog.author} </h6>
                    <p>{blog.body}</p>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetail;