import { useState } from "react";
import TranslatorSearchBar from "../../components/TranslatorSearchBar";
import TranslatorCard from "../../components/TranslatorCard";

export default function TranslatorPage() {
  const [text, setText] = useState({});

  async function fetchText() {
    const response = await fetch(
      `https://api.mymemory.translated.net/get?q=${text}&langpair=en|fr`
    );
    const result = await response.json();
    console.log(result);
    setText(result);
  }

  return (
    <>
      <h1>Babel your bites here:</h1>

      <TranslatorSearchBar setText={setText} fetchText={fetchText} />

      <TranslatorCard />

      <pre>{JSON.stringify(text, null, 2)}</pre>
      <p>
        {text?.articles?.map((item) => `${item.title} + ${item.source.name}`)}
      </p>
    </>
  );
}
