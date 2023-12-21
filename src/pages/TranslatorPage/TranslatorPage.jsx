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
      <div className="mb-5 flex justify-center items-center">
        <hr className="w-1/4 " />
        <h1 className="font-black text-3xl text-void p-2 dark:text-ivory">
          Babel your
          <span className="text-cherry italic"> bites</span>:
        </h1>
        <hr className="w-1/4 " />
      </div>

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
