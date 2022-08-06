
import "./App.css";
import { useFetch } from "./hooks/useFetch";

function App() {

 
const {data,error,fetchData} = useFetch()

   

  return (
    <div className="App">
      {error && <p>error...</p>}
      {/* {isLoading && <p>Loading...</p>} */}
      {data && (
        <>
          <h1>ADVICE #{data.slip.id}</h1>
          <blockquote>"{data.slip.advice}"</blockquote>
          <div className="border bg-img"></div>
          <button className="dice bg-img" onClick={fetchData}>
            <span className="sr-only">new advice</span>
          </button>
        </>
      )}
    </div>
  );
}

export default App;
