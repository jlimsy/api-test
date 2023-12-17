import { useState } from "react";
import TranslatorSearchBar from "../../components/TranslatorSearchBar";
import TranslatorCard from "../../components/TranslatorCard";

export default function TranslatorPage() {
  const [text, setText] = useState();
  const [query, setQuery] = useState();

  async function fetchText(query) {
    const response = await fetch(
      `https://api.mymemory.translated.net/get?q=${query}&langpair=en|fr`
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
        fetchText={fetchText}
      />

      <TranslatorCard text={text} />
    </>
  );
}
