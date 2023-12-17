import { useState } from "react";
import TranslatorSearchBar from "../../components/TranslatorSearchBar";
import TranslatorCard from "../../components/TranslatorCard";

export default function TranslatorPage() {
  const [text, setText] = useState("");
  const [query, setQuery] = useState("");
  const [language, setLanguage] = useState("");

  async function fetchText(query, language) {
    const response = await fetch(
      `https://api.mymemory.translated.net/get?q=${query}&langpair=en|${language}`
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
        language={language}
        setLanguage={setLanguage}
        fetchText={fetchText}
      />

      <TranslatorCard text={text} language={language} />
    </>
  );
}
