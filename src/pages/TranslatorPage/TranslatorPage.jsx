import { useState } from "react";
import TranslatorSearchBar from "../../components/TranslatorSearchBar";
import TranslatorCard from "../../components/TranslatorCard";

export default function TranslatorPage() {
  const [text, setText] = useState();

  async function fetchText(text) {
    const response = await fetch(
      `https://api.mymemory.translated.net/get?q=${text}&langpair=en|fr`
    );
    const jsonText = await response.json();
    // console.log(jsonText);
    setText(jsonText);
  }

  return (
    <>
      <h1>Babel your bites here:</h1>

      <TranslatorSearchBar setText={setText} fetchText={fetchText} />

      <TranslatorCard text={text} />
      <p>{text?.["responseData"]?.["translatedText"]}</p>
    </>
  );
}
