import { useParams, useHistory } from "react-router-dom";
import { useState } from "react";
import userData from "./db.json";

const Update = () => {
  const { id } = useParams();
  const history = useHistory();

  // Find the user with the specified ID from the imported JSON data
  const user = userData.users.find((user) => user.id === parseInt(id));

  const [title, setTitle] = useState(user ? user.title : "");
  const [body, setBody] = useState(user ? user.body : "");
  const [username, setUsername] = useState(user ? user.user : "");

  // Update the state when the blog data changes
  // useEffect(() => {
  //   setTitle(blog ? blog.title : "");
  //   setBody(blog ? blog.body : "");
  //   setUser(blog ? blog.user : "");
  // }, [blog]);
    // useEffect(() => {
    //     getUsers();
        
    //   }, [])

    //   function getUsers() {
        
    //     fetch("http://localhost:8000/users").then((result) => {
    //       result.json().then((resp) => {
    //          console.warn(resp)
    //         //setUser(resp)
    //         setTitle(resp.title);
    //         setBody(resp.body);
    //         setUser(resp.user);
            
    //         //console.log(title);
    //       })
    //     })
    //   }
 

    // const getData = (id) =>
    // {
    //     const {data: blog, error, ispending} = useFetch('http://localhost:8000/users/'+ id);
    //     setTitle(blog.title);
    //     setBody(blog.body);
    //     setUser(blog.user);
    //     setIsPending(ispending);
    // }
    

    const handleSubmit = (e) => {
        e.preventDefault();
        // Create an updatedUser object with the updated values
    const updatedUser = {
      id: parseInt(id),
      title,
      body,
      user: username
    };

    // Perform the update operation using the updatedUser data
    fetch(`http://localhost:8000/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedUser)
    })
      .then(() => {
        console.log("User updated");
        history.push("/");
      })
      .catch((error) => {
        console.error("Error updating user:", error);
      });
  };

    return ( 
      <div className="create">
      <h2>Update</h2>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>User:</label>
        <input
          type="text"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button>Update User</button>
      </form>
    </div>
   
     );
}
 
export default Update;