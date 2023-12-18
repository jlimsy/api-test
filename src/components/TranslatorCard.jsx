export default function TranslatorCard({ text, languageFrom, languageTo }) {
  return (
    <div className="flex justify-center items-center m-10">
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h1>
          {languageFrom} to {languageTo}
        </h1>
        <div>
          {text?.["responseData"]?.["translatedText"] ||
            "Translation not found."}
        </div>
      </div>
    </div>
  );
}
