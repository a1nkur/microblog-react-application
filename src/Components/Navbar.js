const Navbar = () => {
    return (
      // using html5 semantics
      <nav className="navbar">
        {/* Logo on navbar */}
        <h1>Dojo Blog</h1>
        {/* Grouping together links  */}
        <div className="navbar-links">
          <a href="/">Home</a>
          <a
            href="/create"
            style={{
              color: "#fff",
              backgroundColor: "#f1356d",
              borderRadius: "8px"
            }}
          >
            New Blog
          </a>
        </div>
      </nav>
    );
}
 
export default Navbar;