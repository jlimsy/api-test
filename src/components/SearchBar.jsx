const countries = {
  Any: "any",
  Australia: "au",
  Brazil: "br",
  Canada: "ca",
  China: "cn",
  Egypt: "eg",
  France: "fr",
  Germany: "de",
  Greece: "gr",
  HongKong: "hk",
  India: "in",
  Ireland: "ie",
  Israel: "il",
  Italy: "it",
  Japan: "jp",
  Netherlands: "nl",
  Norway: "no",
  Pakistan: "pk",
  Peru: "pe",
  Philippines: "ph",
  Portugal: "pt",
  Romania: "ro",
  Russia: "ru",
  Singapore: "sg",
  Spain: "es",
  Sweden: "se",
  Switzerland: "ch",
  Taiwan: "tw",
  Ukraine: "ua",
  "United Kingdom": "gb",
  "United States": "us",
};

const languages = {
  None: "none",
  Arabic: "ar",
  Chinese: "zh",
  Dutch: "nl",
  English: "en",
  French: "fr",
  German: "de",
  Greek: "el",
  Hebrew: "he",
  Hindi: "hi",
  Italian: "it",
  Japanese: "ja",
  Malayalam: "ml",
  Marathi: "mr",
  Norwegian: "no",
  Portuguese: "pt",
  Romanian: "ro",
  Russian: "ru",
  Spanish: "es",
  Swedish: "sv",
  Tamil: "ta",
  Telugu: "te",
  Ukrainia: "uk",
};

console.log(Object.keys(countries));

export default function SearchBar() {
  const filterByCountry = Object.keys(countries).map((item) => (
    <option key={countries[item]} value={countries[item]}>
      {[item]}
    </option>
  ));

  const filterByLanguage = Object.keys(languages).map((item) => (
    <option key={languages[item]} value={languages[item]}>
      {[item]}
    </option>
  ));
  return (
    <form>
      <label>
        Search for bites:
        <input name="search" placeholder="bites" />
      </label>
      <label>
        Country:
        <select>{filterByCountry}</select>
      </label>
      <label>
        Language:
        <select>{filterByLanguage}</select>
      </label>
    </form>
  );
}
