import { useState } from "react";
import "./App.css";

function App() {
  const [newsSG, setTranslation] = useState({});
  const [newsOther, setNewsOther] = useState({});

  const word = "potato is hot";

  async function fetchWords() {
    const response = await fetch(
      `https://api.mymemory.translated.net/get?q=${word}&langpair=en|it`
    );

    const result = await response.json();
    console.log(result);
    setTranslation(result);
  }

  const apikey = "1331e8039126b4d683d96e90caaf55de";
  const country = "sg";
  const language = "en";
  const query = "hamas AND gaza";

  async function fetchNewsOther() {
    const response = await fetch(
      `https://gnews.io/api/v4/search?q=${query}&lang=${language}&country=${country}&max=5&apikey=${apikey}`
    );

    const result = await response.json();
    console.log(result);
    setNewsOther(result);
  }

  const handleClickSg = () => fetchWords();
  const handleClickOther = () => (fetchNewsOther(), console.log(`${query}`));

  return (
    <>
      <h1>Test APIs</h1>
      <button name="UV" onClick={handleClickSg}>
        Click here to fetch words
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
