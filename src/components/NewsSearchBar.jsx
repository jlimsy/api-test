const countries = {
  Any: "any",
  Australia: "au",
  Brazil: "br",
  Canada: "ca",
  China: "cn",
  Egypt: "eg",
  France: "fr",
  Germany: "de",
  Greece: "gr",
  HongKong: "hk",
  India: "in",
  Ireland: "ie",
  Israel: "il",
  Italy: "it",
  Japan: "jp",
  Netherlands: "nl",
  Norway: "no",
  Pakistan: "pk",
  Peru: "pe",
  Philippines: "ph",
  Portugal: "pt",
  Romania: "ro",
  Russia: "ru",
  Singapore: "sg",
  Spain: "es",
  Sweden: "se",
  Switzerland: "ch",
  Taiwan: "tw",
  Ukraine: "ua",
  "United Kingdom": "gb",
  "United States": "us",
};

const languages = {
  Any: "any",
  Arabic: "ar",
  Chinese: "zh",
  Dutch: "nl",
  English: "en",
  French: "fr",
  German: "de",
  Greek: "el",
  Hebrew: "he",
  Hindi: "hi",
  Italian: "it",
  Japanese: "ja",
  Malayalam: "ml",
  Marathi: "mr",
  Norwegian: "no",
  Portuguese: "pt",
  Romanian: "ro",
  Russian: "ru",
  Spanish: "es",
  Swedish: "sv",
  Tamil: "ta",
  Telugu: "te",
  Ukrainia: "uk",
};

console.log(Object.keys(countries));

export default function SearchBar({
  query,
  setQuery,
  language,
  setLanguage,
  country,
  setCountry,
  fetchNews,
  validationMessage,
}) {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
    console.log(event.target.value);
  };

  const handleFetchNews = () => {
    fetchNews(query, language, country);
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
    console.log(`country ${event.target.value} selected`);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
    console.log(`language ${event.target.value} selected`);
  };

  const filterByCountry = Object.keys(countries).map((item) => (
    <option key={countries[item]} value={countries[item]}>
      {[item]}
    </option>
  ));

  const filterByLanguage = Object.keys(languages).map((item) => (
    <option key={languages[item]} value={languages[item]}>
      {[item]}
    </option>
  ));
  return (
    <>
      <form
        className="grid grid-cols-4 gap-5 p-5 bg-void justify-items-center"
        onSubmit={handleSubmit}
      >
        <label>
          Search bites:
          <input
            name="search"
            placeholder="bites"
            value={query}
            onChange={handleInputChange}
            className="ml-3"
          />
        </label>
        <label>
          Country:
          <select value={country} onChange={handleCountryChange}>
            {filterByCountry}
          </select>
        </label>
        <label>
          Language:
          <select value={language} onChange={handleLanguageChange}>
            {filterByLanguage}
          </select>
        </label>

        <button
          name="news"
          type="button"
          onClick={handleFetchNews}
          className="bg-cherry text-ivory"
        >
          Search News
        </button>
      </form>
      <div className="flex justify-center m-10">
        {validationMessage && (
          <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            {validationMessage}
          </div>
        )}
      </div>
    </>
  );
}
