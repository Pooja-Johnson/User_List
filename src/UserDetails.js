import { useHistory,useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";

const UserDetails = () => {
    const {id} = useParams();
    const {data: blog, error, isPending} = useFetch('http://localhost:8000/users/'+ id);
    const history = useHistory();

    const handleClick = () => {
        fetch('http://localhost:8000/users/' + blog.id, {
          method: 'DELETE'
        }).then(() => {
          history.push('/');
        }) 
      }

    return (  
        <div className="user-details">
            {isPending && <div>Loading ...</div>}
            {error && <div>{ error}</div>}
            {blog && 
            <article>
                <h2>{blog.title}</h2>
                <p>Written by {blog.user}</p>
                <div>{blog.body}</div>
                <button onClick={handleClick}>delete</button>
            </article>
            }
        </div>
    );
}
 
export default UserDetails;