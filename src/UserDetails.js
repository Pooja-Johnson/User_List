import { useHistory,useParams } from "react-router-dom/cjs/react-router-dom.min";
//import useFetch from "./useFetch";
import { Link } from "react-router-dom/cjs/react-router-dom";
import userData from "./db.json";

const UserDetails = () => {
  const { id } = useParams();
  const history = useHistory();

  // Find the user with the specified ID from the imported JSON data
  const blog = userData.users.find((user) => user.id === parseInt(id));


    const handleClick = () => {
        fetch('http://localhost:8000/users/' + blog.id, {
          method: 'DELETE'
        }).then(() => {
          history.push('/');
        }) 
      }
    

    return (  
        <div className="user-details">
            {blog ?(
            <article>
                <h2>{blog.title}</h2>
                <p>Written by {blog.user}</p>
                <div>{blog.body}</div>
                <button onClick={handleClick}>delete</button>
                <Link to={`/update/${blog.id}`}> {blog.id}
            <button>Update</button>
          </Link>
            </article>
            ) : (
              <div>User not found</div>
            )
            }
           </div>
        
        
    );
}
 
export default UserDetails;