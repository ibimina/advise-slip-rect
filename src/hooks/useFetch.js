import { useEffect, useState } from "react";

export function useFetch() {
  const [data, setData] = useState(null);
  // const [id, setId] = useState(null);
  // const [advise, setAdvise] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const res = await fetch("https://api.adviceslip.com/advice");
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      setIsLoading(false);
      const data = await res.json();
      setData(data);
      // setId(data.slip.id);
      // setAdvise(data.slip.advice);
    } catch (error) {
      setIsLoading(false);
      setError("could not fetch data");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data,isLoading, error, fetchData };
}
