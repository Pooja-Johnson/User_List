import { Link } from "react-router-dom/cjs/react-router-dom";

const UserList = ({blogs,title}) => {
    
    return (  
        <div className="user-list">
            <h2>{title}</h2>
             { blogs.map((blog)=>(
            <div className="user-preview" key={blog.id}>
              <Link to = {`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>written by {blog.user}</p>
            </Link>
            </div>
           ))} 
        </div>
    );
}
 
export default UserList;
