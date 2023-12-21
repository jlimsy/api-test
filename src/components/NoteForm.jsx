import { useParams } from "react-router-dom";
import { useEffect } from "react";

export default function NoteForm({ fetchCreateNote, newNote, setNewNote }) {
  const { selectedNews } = useParams();

  useEffect(() => {
    if (selectedNews) {
      setNewNote((news) => ({
        fields: {
          ...news?.fields,
          title: selectedNews,
        },
      }));
    }
  }, [selectedNews, setNewNote]);

  const handleSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
  };

  const handleCreateNote = () => {
    fetchCreateNote(newNote);
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
      <h1 className="m-5 font-black text-3xl text-ivory p-2 dark:text-ivory">
        Create your Babel here:
      </h1>
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
        <div>
          <label className="block mb-2 text-gray-900 dark:text-teal-800">
            Title:
            <input
              value={selectedNews}
              onChange={handleNewNoteTitle}
              className="block w-full text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50  focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
            />
          </label>
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-gray-900 dark:text-teal-800">
            Babel your notes here:
            <input
              onChange={handleNewNoteBody}
              className="block w-full text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50  focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
            />
          </label>
        </div>

        <button
          onClick={handleCreateNote}
          className="bg-void text-ivory hover:bg-beige hover:text-cherry border-0"
        >
          Babel a note
        </button>
      </form>
    </>
  );
}
