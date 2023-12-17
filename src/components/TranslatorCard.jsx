export default function TranslatorCard(text) {
  return (
    <>
      <h3>Translated text to display here</h3>
      <p>translated text: {text?.["responseData"]?.["translatedText"]}</p>
    </>
  );
}
