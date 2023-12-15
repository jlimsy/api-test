import { useState } from "react";
import { Link } from "react-router-dom";
import NewsSearchBar from "../../components/NewsSearchBar";
import NewsCard from "../../components/NewsCard";

export default function NewsPage() {
  const [news, setNews] = useState({});

  const newsQuery = [
    {
      title: "Hard-coded title",
      summary: "Lorem Ipsum",
      imgUrl: "https://media.giphy.com/media/2vlC9FMLSmqGs/giphy.gif",
      source: "Read more",
    },
    {
      title: "Hard-coded title TWO",
      summary: "Lorem Ipsum TWO",
      imgUrl: "https://media.giphy.com/media/2vlC9FMLSmqGs/giphy.gif",
      source: "Read more",
    },
    {
      title: "Title THREE",
      summary: "Lorem Ipsum THREE",
      imgUrl: "https://media.giphy.com/media/2vlC9FMLSmqGs/giphy.gif",
      source: "Read more",
    },
  ];

  console.log(newsQuery.title, newsQuery.summary);

  const apikey = "1331e8039126b4d683d96e90caaf55de";
  const country = "sg";
  const language = "en";
  const query = "hamas AND gaza";

  async function fetchNews() {
    const response = await fetch(
      `https://gnews.io/api/v4/search?q=${query}&lang=${language}&country=${country}&max=5&apikey=${apikey}`
    );

    const jsonNews = await response.json();
    console.log(jsonNews);
    setNews(jsonNews);
  }

  const handleNews = () => (fetchNews(), console.log(`${query}`));

  return (
    <>
      <h3>News Page</h3>
      <NewsSearchBar />
      <button name="news" onClick={handleNews}>
        Fetch News
      </button>
      <pre>{JSON.stringify(news, null, 2)}</pre>
      {news?.articles?.map((item) => (
        <div className="news" key={item.title}>
          <div>{`${item.title}`}</div>
          <div>{`${item.source.name}`}</div>
          <div>{`${item.content}`}</div>
          <Link to={`${item.url}`} target="blank">
            Read more
          </Link>
        </div>
      ))}
      <NewsCard newsQuery={newsQuery} />
    </>
  );
}
