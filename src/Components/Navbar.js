import { Link } from "react-router-dom";
// The Link component has the functionality to intercept the requests from the browser by the react-router and after matching the route, react sends the registered component to get injected.
// Link is still transpiled to anchor tag in dom.

const Navbar = () => {
  return (
    // using html5 semantics
    <nav className="navbar">
      {/* Logo on navbar */}
      <h1>Dojo Blog</h1>
      {/* Grouping together links  */}
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link
          to="/create"
          style={{
            color: "#fff",
            backgroundColor: "#f1356d",
            borderRadius: "2px",
            padding: 8,
          }}
        >
          New Blog
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
