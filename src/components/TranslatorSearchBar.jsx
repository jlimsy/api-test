import { useEffect } from "react";
import { useParams } from "react-router-dom";
import googleLanguages from "../assets/languages";

export default function TranslatorSearchBar({
  query,
  setQuery,
  languageFrom,
  setLanguageFrom,
  languageTo,
  setLanguageTo,
  fetchText,
}) {
  const { selectedText } = useParams();

  useEffect(() => {
    if (selectedText) {
      setQuery(selectedText);
    }
  }, [selectedText, setQuery]);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleTranslateClick = () => {
    fetchText(query, languageFrom, languageTo);
    console.log(query, languageFrom, languageTo);
    console.log("translate button clicked");
  };

  const handleLanguageChangeFrom = (event) => {
    setLanguageFrom(event.target.value);
    console.log("set language from", event.target.value);
  };

  const handleLanguageChangeTo = (event) => {
    setLanguageTo(event.target.value);
    console.log("set language to", event.target.value);
  };

  const selectTranslatorLanguage = Object.keys(googleLanguages).map((item) => (
    <option key={googleLanguages[item]} value={googleLanguages[item]}>
      {[item]} ({googleLanguages[item]})
    </option>
  ));

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-4 gap-5 justify-items-center"
    >
      <label>
        Text to translate:
        <div className="relative"></div>
        <input
          name="search"
          placeholder="babel here"
          value={query}
          onChange={handleInputChange}
        />
      </label>
      <label>
        From:
        <select value={languageFrom} onChange={handleLanguageChangeFrom}>
          {selectTranslatorLanguage}
        </select>
      </label>
      <label>
        To:
        <select value={languageTo} onChange={handleLanguageChangeTo}>
          {selectTranslatorLanguage}
        </select>
      </label>
      <button name="translate" onClick={handleTranslateClick}>
        Translate
      </button>
    </form>
  );
}
