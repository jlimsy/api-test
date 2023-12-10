import { useState } from "react";
import "./App.css";

function App() {
  const [apiCall, setApiCall] = useState({});

  const apiKey = "1331e8039126b4d683d96e90caaf55de";

  async function fetchAPI() {
    const response = await fetch(
      `https://gnews.io/api/v4/top-headlines?country=sg&apikey=${apiKey}`
    );
    const result = await response.json();
    console.log(result);
    setApiCall(result);
  }

  const handleClick = () => fetchAPI();

  return (
    <>
      <h1>Test APIs</h1>
      <button name="UV" onClick={handleClick}>
        Click here to fetch UV data
      </button>
      <button name="2.5" onClick={handleClick}>
        Click here to fetch PM2.5 data
      </button>
      <div name="content">
        <pre>{JSON.stringify(apiCall, null, 2)}</pre>
        <p>
          {apiCall?.articles?.map(
            (item) => `${item.title} + ${item.source.name}`
          )}
        </p>
      </div>
    </>
  );
}

export default App;
