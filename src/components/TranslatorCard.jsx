import googleLanguages from "../assets/languages";

export default function TranslatorCard({ text, languageFrom, languageTo }) {
  function getKeyByValue(object, value) {
    return Object.keys(object).find((key) => object[key] === value);
  }

  return (
    <div className="grid grid-rows-2 h-screen">
      <div className="row-span-1 flex justify-center items-center m-10 rounded-xl bg-beige">
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h1>
            <span className="font-bold">
              {getKeyByValue(googleLanguages, languageFrom)}
            </span>{" "}
            to{" "}
            <span className="font-bold">
              {getKeyByValue(googleLanguages, languageTo)}
            </span>
          </h1>
          <hr className="my-5" />
          <div>{text?.["responseData"]?.["translatedText"]}</div>
        </div>
      </div>
      <div
        className="row-span-1"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1555432384-3b2fa7b650c9?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
        }}
      ></div>
    </div>
  );
}
