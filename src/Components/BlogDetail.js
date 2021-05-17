import { useParams } from "react-router";

const BlogDetail = () => {

    const { id } = useParams();

    return ( 
        <div className="blog-detail">
            <h3>Detail</h3>
        </div>
     );
}
 
export default BlogDetail;