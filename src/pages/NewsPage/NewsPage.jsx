import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function NewsPage() {
  const [news, setNews] = useState({});

  const apikey = "1331e8039126b4d683d96e90caaf55de";
  const country = "sg";
  const language = "en";
  const query = "hamas AND gaza";

  async function fetchNews() {
    const response = await fetch(
      `https://gnews.io/api/v4/search?q=${query}&lang=${language}&country=${country}&max=5&apikey=${apikey}`
    );

    const result = await response.json();
    console.log(result);
    setNews(result);
  }

  const handleNews = () => (fetchNews(), console.log(`${query}`));

  return (
    <>
      <h3>News Page</h3>
      <button name="2.5" onClick={handleNews}>
        Fetch News
      </button>
      <pre>{JSON.stringify(news, null, 2)}</pre>

      <p>{news?.data?.map((item) => `${item.title} + ${item.source}`)}</p>
      <NavLink to="/">Home</NavLink>
    </>
  );
}
