import { useState } from "react";
import NewsSearchBar from "../../components/NewsSearchBar";
import NewsCard from "../../components/NewsCard";
import { Button, Spinner } from "flowbite-react";

export default function NewsPage() {
  const [news, setNews] = useState("");
  const [query, setQuery] = useState("");
  const [language, setLanguage] = useState("en");
  const [country, setCountry] = useState("any");
  const [validationMessage, setValidationMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const apikey = "1331e8039126b4d683d96e90caaf55de";

  async function fetchNews(query, language) {
    setLoading(true);
    const response = await fetch(
      `https://gnews.io/api/v4/search?q=${query}&lang=${language}&country=${country}&max=5&apikey=${apikey}`
    );

    const jsonNews = await response.json();
    console.log(jsonNews);
    setNews(jsonNews);

    setLoading(false);

    if (jsonNews.totalArticles === 0) {
      setValidationMessage("No articles found. Please refine your search.");
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen ">
        <Button color="gray">
          <Spinner
            color="failure"
            aria-label="Spinner button example"
            size="xl"
          />
          <span className="pl-3 text-void">Fetching Bites...</span>
        </Button>
      </div>
    );
  }

  return (
    <>
      <div className="mb-5 flex justify-center items-center">
        <hr className="w-1/4 " />
        <h1 className="font-black text-3xl text-void p-2 dark:text-ivory">
          Search for <span className="text-cherry italic">news bites</span>:
        </h1>
        <hr className="w-1/4 " />
      </div>
      <NewsSearchBar
        query={query}
        setQuery={setQuery}
        language={language}
        setLanguage={setLanguage}
        country={country}
        setCountry={setCountry}
        fetchNews={fetchNews}
        validationMessage={validationMessage}
        setValidationMessage={setValidationMessage}
      />
      <div className="flex justify-center items-center">
        <div className="grid grid-row-5 gap-5">
          {news?.articles?.map((item, idx) => (
            <NewsCard key={idx} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}
