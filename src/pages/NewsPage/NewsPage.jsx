import { useState } from "react";
import NewsSearchBar from "../../components/NewsSearchBar";
import NewsCard from "../../components/NewsCard";

export default function NewsPage() {
  const [news, setNews] = useState({});
  const [query, setQuery] = useState();

  const apikey = "1331e8039126b4d683d96e90caaf55de";
  const language = "en";

  async function fetchNews(query) {
    const response = await fetch(
      `https://gnews.io/api/v4/search?q=${query}&lang=${language}&max=5&apikey=${apikey}`
    );

    const jsonNews = await response.json();
    console.log(jsonNews);
    setNews(jsonNews);
  }

  const handleNews = () => (fetchNews(query), console.log(`${query}`));

  return (
    <>
      <h3>News Page</h3>
      <NewsSearchBar setQuery={setQuery} fetchNews={fetchNews} />
      <button name="news" onClick={handleNews}>
        Search News
      </button>
      <NewsCard news={news} handleNews={handleNews} />
    </>
  );
}
