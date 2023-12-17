import googleLanguages from "../assets/languages";

export default function TranslatorSearchBar({
  query,
  setQuery,
  language,
  setLanguage,
  fetchText,
}) {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleInputChange = (event) => {
    console.log(event.target.value);
    setQuery(event.target.value);
  };

  const handleTranslator = () => {
    fetchText(query);
    console.log("what is text", query);
    console.log("translate button clicked");
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
    console.log("what is lang", event.target.value);
  };

  const selectTranslatorLanguage = Object.keys(googleLanguages).map((item) => (
    <option key={googleLanguages[item]} value={googleLanguages[item]}>
      {[item]} ({googleLanguages[item]})
    </option>
  ));

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Search for words:
        <div className="relative"></div>
        <input
          name="search"
          placeholder="babel here"
          value={query}
          onChange={handleInputChange}
          className="block p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </label>
      <label>
        Language:
        <select value={language} onChange={handleLanguageChange}>
          {selectTranslatorLanguage}
        </select>
      </label>
      <button name="translate" onClick={handleTranslator}>
        Translate
      </button>
    </form>
  );
}
