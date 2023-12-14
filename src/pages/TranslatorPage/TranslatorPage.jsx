import { useState } from "react";

export default function TranslatorPage() {
  const [words, setWords] = useState({});

  const word = "coding is fun";

  async function fetchWords() {
    const response = await fetch(
      `https://api.mymemory.translated.net/get?q=${word}&langpair=en|es`
    );

    const result = await response.json();
    console.log(result);
    setWords(result);
  }

  const handleTranslator = () => fetchWords();

  return (
    <>
      <h3>Translator Page</h3>
      <label>
        Word:
        <input placeholder="type here" />
      </label>
      <button>Translate</button>
      <button name="translate" onClick={handleTranslator}>
        Fetch words
      </button>
      <pre>{JSON.stringify(words, null, 2)}</pre>
      <p>
        {words?.articles?.map((item) => `${item.title} + ${item.source.name}`)}
      </p>
    </>
  );
}
