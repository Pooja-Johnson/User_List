import UserList from "./UserList";
import useFetch from "./useFetch";

const Home = () => {
    const {data : blogs, isPending, error} = useFetch('http://localhost:8000/users');


    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);
    //   }  handleDelete = {handleDelete}
 


      return ( 
        <div className="home">
          {error && <div>{ error }</div>}
          {isPending && <div>loading...</div>}  
          {blogs && <UserList blogs={blogs} title = "All Users"/>}
          
        </div>    
     );
}
 
export default Home;