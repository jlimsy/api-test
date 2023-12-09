import { useState } from "react";
import "./App.css";

function App() {
  const [apiCall, setApiCall] = useState({});

  const apiKey = "a02ce2a2496d4179b997289d54029c0f";

  async function fetchAPI() {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=Gaza&from=2023-12-08&to=2023-12-08&sortBy=popularity&apiKey=${apiKey}`
    );
    const result = await response.json();
    console.log(result);
    setApiCall(result);
  }

  const handleClick = () => fetchAPI();

  return (
    <>
      <h1>Test APIs</h1>
      <button onClick={handleClick}>Click here to fetch APIs</button>
      <div name="content">
        {/* <pre>{JSON.stringify(apiCall, null, 2)}</pre> */}
        <p>
          {apiCall?.articles?.map(
            (item) => `${item.source.name} + ${item.title}`
          )}
        </p>
      </div>
    </>
  );
}

export default App;
