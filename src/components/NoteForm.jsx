export default function NoteForm({ fetchCreateNote, newNote, setNewNote }) {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleCreate = () => {
    fetchCreateNote(newNote);
    // console.log("newNote", newNote);
  };

  const handleNewNoteTitle = (event) => {
    console.log(event.target.value);
    setNewNote((notes) => ({
      fields: {
        ...notes?.fields,
        title: event.target.value,
      },
    }));
  };

  const handleNewNoteBody = (event) => {
    console.log(event.target.value);
    setNewNote((notes) => ({
      fields: { ...notes?.fields, body: event.target.value },
    }));
  };

  return (
    <>
      <h1>Form</h1>
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
        <div>
          <label className="block mb-2 text-gray-900 dark:text-white">
            Title of your babel:
          </label>
          <input
            onChange={handleNewNoteTitle}
            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-gray-900 dark:text-white">
            Babel your notes here:
            <input
              onChange={handleNewNoteBody}
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </label>
        </div>

        <button onClick={handleCreate}>Babel a note</button>
      </form>
    </>
  );
}
