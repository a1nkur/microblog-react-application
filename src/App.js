import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// A top level component is assigned a route and when the link is clickd that component is inject into the browser.
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
            {/* Makes sure there is only route shown at one time */}
            {/* All our routes goes insde this the switch component */}
            <Route exact path="/">
              {/* The path is route, the string after the domain name */}
              {/* Nest the component inside the Route to show when user visits this route */}
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">  
            {/* Here the id shows the route parameter which is dynamic. */}
            {/* It doesnt matter what id is it will always redirect it always redirect you to this component UNLESS you setup a hook from react-router-dom to fetch the id'ed blog */}
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

// Router
// Surround entire app with the <Router /> component now all the components nested inside App has access to the Router.
// Decide where we want our page component to go when we go to different pages: EX: To Home then
//    replace Home with Switch and nest it inside
// Setup individual routes for each page using Route component

/*NOTE: React Router Component needs exact path property to exactly match the browser route with the route of the path of the url clicked. Be default it's the way react matches the route path with the url, once it finds the first character ("/") of  the broser path matching with the home route ("/") it stops looking */

/*If the path property is anything except "/" you dont need exact proprty.*/

// Switch Component
// its job is to make sure only  one route component shows up in the browser at that time.
// It the Routes are not surrounded by parent Switch then all the Component matched with the route will go get rendered.

// <Link
// when clicking on links each time, browser is still sending fresh request to the server and getting the same index.html page every time and react is injecting the components.
// use special react router link instead of basic html anchor tags.

/* Route parameters */
// Sometimes we need to pass dynamic values along with the route path to dynamically render different forms of content on the same page
// /blogs/123, where 123 === id of the blog we want to see, this renders a blogDetail component and show me the blog of id 123


// Controlled inputs | Web Forms  | Different form fields
/* CI -> a way in react to setup input forms in react to keep track of their value */