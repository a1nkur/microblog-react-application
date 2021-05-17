import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./Components/Create";
import BlogDetail from "./Components/BlogDetail";

function App() {
  const handleClick = (val, e) => console.log(e);
  return (
    <Router>
      {/* The application */}
      {/* Thid acts as a container for all the application */}
      <div className="App">
        <Navbar />
        {/* All the main content of the application goes inside here */}
        <div className="main-content">
          <Switch>
          {/* Makes sure there is only route shows at one time */}
          {/* All routes going insde this switch component */}
          {/* one page now, so one route only inside Switch */}
            <Route exact path="/">
              {/* The path is route, the string after the domain name */}
              {/* Nest the component iside the Route to show when user visits this route */}
              <Home />
            </Route>
            <Route exact path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetail />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

// The component whose state is to be altered must also contain the function that has been tasked to alter it. 