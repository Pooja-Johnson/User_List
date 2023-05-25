import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [user, setUser] = useState('User-1');
    const [isPending,setIsPending]= useState(false);
    const history = useHistory();


    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, user };
    
        fetch('http://localhost:8000/users/', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
          console.log('new user added');
          // history.go(-1);
          history.push('/');
        })
      }

    return ( 
        <div className="create">
            <h2>Add a new user</h2>
            <form onSubmit={handleSubmit}>
                <label >User Name:</label>
                <input 
                type="text" 
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
                <label > About:</label>
                <textarea 
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}
                >
                </textarea>
                <label >Current User:</label>
                <select
                value = {user}
                onChange={(e) => setUser(e.target.value)}
                >
                    <option value="User-1">User-1</option>
                     <option value="User-2">User-2</option>
                </select>
                {!isPending && <button>Add User</button>}
                {isPending && <button disabled>Adding User</button>}
                <p>{title}</p>
                <p>{body}</p>
                <p>{user}</p>
            </form>
        </div>
     );
}
 
export default Create;