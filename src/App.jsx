import { useState } from "react";
import "./App.css";

function App() {
  const [newsSG, setNewsSg] = useState({});
  const [newsOther, setNewsOther] = useState({});

  const apiKey = "1331e8039126b4d683d96e90caaf55de";

  async function fetchNewsSg() {
    const response = await fetch(
      `https://gnews.io/api/v4/top-headlines?country=sg&apikey=${apiKey}`
    );

    const result = await response.json();
    console.log(result);
    setNewsSg(result);
  }

  async function fetchNewsOther() {
    const response = await fetch(
      `http://api.mediastack.com/v1/news?access_key=aba5d7c29918e44207c31ad5a8d52b73&countries=my`
    );

    const result = await response.json();
    console.log(result);
    setNewsOther(result);
  }

  const handleClickSg = () => fetchNewsSg();
  const handleClickOther = () => fetchNewsOther();

  return (
    <>
      <h1>Test APIs</h1>
      <button name="UV" onClick={handleClickSg}>
        Click here to fetch SG news
      </button>
      <button name="2.5" onClick={handleClickOther}>
        Click here to fetch SEA news
      </button>
      <div name="content">
        <pre>{JSON.stringify(newsSG, null, 2)}</pre>
        <pre>{JSON.stringify(newsOther, null, 2)}</pre>

        <p>
          {newsSG?.articles?.map(
            (item) => `${item.title} + ${item.source.name}`
          )}
        </p>

        <p>
          {newsOther?.data?.map((item) => `${item.title} + ${item.source}`)}
        </p>
      </div>
    </>
  );
}

export default App;
