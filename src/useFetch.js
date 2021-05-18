import { useEffect, useState } from "react";

const useFetch = url => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true); // This is to keep tab on where to show a "Loading" message or not.
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController(); // Create an instance of AbortController

    setTimeout(() => {
      fetch(url, { signal: abortCont.signal }) //This returns a promise, this parameter is optional. this assoicated the abort to fetch request
        .then(response => {
          if (!response.ok) {
            // checking the status of response object if it contains any error. respsonse.ok === true , if only the response object is fine af. console.log(response)
            throw Error("We could not fetch the data for that resource.");
          }
          return response.json();
        })
        .then(data => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch(err => {
          // if we abort the fetch as of line 38 we get an error named ="AbortError", upon catching the error we are alerted that abort controller has been called and we should not update the state anymore. Add an if else for conditional output.
          // this catches any network error sent from the server
          if (err.name === "AbortError") {
            console.log("Fetch Aborted");
          } else {
            setError(err.message);
            setIsPending(false);
            setData(null);
          }
        });
    }, 1000);
    
    return  () => abortCont.abort();
  }, [url]);

  return { data, isPending, error }; // Upon aborting, we are catching error in line 25 and updating the state as in line 30, 31.
};

export default useFetch;

// useEffects runs a function everytime before a render(). First time when the component renders and then after every state change.
// Inside useEffect we can do -> fetch data , communicate with authetication services, etc. these things are called Side-effects.
// Changing state inside the useEffect can lead to loop.

// Dependency Array.
// Run the callback function at the first render and then only run when the certain state in dependency array changes.
// useEffect(()=> {}, []) ; this tells to fire the callbcak function only once upon first render.

// useEffect is a good place to run the fetch because once the component is mounted for the first time, then it's when we want to store the fetched data in our state.
// In web applications, the data usually comes from a databse using a REST API endpoint.

// In json server, each top level property in json file is considered a resource and it creates endpoints to access that resource. The db.json file is watched over by the package which will wrap it with some endpoints.
// $ npx json-server --watch data/db.json --port 8080
// /blogs/ -> GET -> fetch all data
// /blogs/{id} -> GET -> fetch single data
// /blogs/ -> POST -> add new blog
// /blogs/{id} -> DELETE -> add new blog

// NOTE: since the fetch method is async that means it will take some time to load the data, the render() doesnot wait for it to happen first. As a result, render() is generatinng the template based on null object in local state. To encounter this, we will use "conditional rendering".

// Handling Errors
// We can handle any kind of error ->  any err sent back from the server, problem connecting to the server
// Failed to fetch -> network error
// However, if we manage to connect to the server and recieve the response object which is not the data we seeked ex: endpoint does not exist or request is denied, the .catch() wont be able to catch it.

/* NOTE: 
  useEffect cleanup function :
  user -> /home -> /create; 
  Now,  <Home /> has been unmounted but behind the scene the useEffect is still being carried on by our useFetch module which will try to update the state of unmounted component.
  Solution: combination of cleanup function in useEffect and javascript abort controller.
  We have to write a cleanup function in useEffect to clean the abort the fetch request when the component unmounts. 



*/