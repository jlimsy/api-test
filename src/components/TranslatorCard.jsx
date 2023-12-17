export default function TranslatorCard({ text }) {
  return (
    <>
      <h3>Translated text to display here</h3>
      <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        {text?.["responseData"]?.["translatedText"]}
      </div>
    </>
  );
}
