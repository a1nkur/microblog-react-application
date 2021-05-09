import Home from "./Components/Home";
import Navbar from "./Components/Navbar";

function App() {
  const handleClick = (val, e) => console.log(e);
  return (
    //The application
    <div className="App">
      {/* Navbar goes here */}
      <Navbar />
      {/* All the main content of the application goes inside here */}
      <div className="main-content">
        <Home />
        <button onClick={(e) => handleClick("value", e)}> Click Me</button>
      </div>
    </div>
  );
}

export default App;
