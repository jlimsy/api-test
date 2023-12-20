import { useState } from "react";
import TranslatorSearchBar from "../../components/TranslatorSearchBar";
import TranslatorCard from "../../components/TranslatorCard";

export default function TranslatorPage() {
  const [text, setText] = useState("");

  const [query, setQuery] = useState("");
  const [languageFrom, setLanguageFrom] = useState("en");
  const [languageTo, setLanguageTo] = useState("en");

  async function fetchText(query, languageFrom, languageTo) {
    const response = await fetch(
      `https://api.mymemory.translated.net/get?q=${query}&langpair=${languageFrom}|${languageTo}`
    );
    const jsonText = await response.json();
    // console.log(jsonText);
    setText(jsonText);
  }

  return (
    <>
      <h1>Babel your bites here:</h1>

      <TranslatorSearchBar
        query={query}
        setQuery={setQuery}
        languageFrom={languageFrom}
        setLanguageFrom={setLanguageFrom}
        languageTo={languageTo}
        setLanguageTo={setLanguageTo}
        fetchText={fetchText}
      />

      <TranslatorCard
        text={text}
        languageFrom={languageFrom}
        languageTo={languageTo}
      />
    </>
  );
}
