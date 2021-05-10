import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(response => {
        if (!response.ok) {
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
        setError(err.message);
        setIsPending(false);
        setData(null);
      });
  }, [url]);

  return { data , isPending, error }
};

export default useFetch;
