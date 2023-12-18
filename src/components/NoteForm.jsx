export default function NoteForm() {
  return (
    <>
      <h1>Form</h1>
      <hr />
      <form>
        <div>
          <label
            htmlFor="small-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Title of your babel tape:
          </label>
          <input
            type="text"
            id="small-input"
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="large-input"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Babel your notes here:
          </label>

          <input
            type="text"
            id="large-input"
            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>

        <button>Babel a note</button>
      </form>
    </>
  );
}
