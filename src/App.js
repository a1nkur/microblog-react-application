import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const handleClick = (val, e) => console.log(e);
  return (
    <Router>
      {/* The application */}
      <div className="App">
        {/* Navbar goes here */}
        <Navbar />
        {/* All the main content of the application goes inside here */}
        <div className="main-content">
          <Switch>
          {/* Makes sure there is only route shows at one time */}
          {/* All routes going insde this switch component */}
          {/* one page now, so one route only inside Switch */}
            <Route path="/">
              {/* The path is route, the string after the domain name */}
              {/* Nest the component iside the Route to show when user visits this route */}
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
