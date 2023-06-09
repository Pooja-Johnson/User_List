import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './Create';
import UserDetails from './UserDetails';
import NotFound from './NotFound';
import Update from './Update';




function App() {
 
  return (
  <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path = "/">
            <Home />
          </Route>
          <Route path = "/create">
            <Create />
          </Route>
          <Route path = "/update/:id">
          <Update  />
          </Route>
          <Route path = "/blogs/:id">
            <UserDetails />
          </Route>
          <Route path="*">
              <NotFound />
          </Route>
       </Switch>
       
      </div>
    </div>
  </Router>
  );
}

export default App;
