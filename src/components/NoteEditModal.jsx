import { useEffect } from "react";

export default function NoteEditModal({
  item,
  setShowModal,
  editNote,
  setEditNote,
  handleEdit,
}) {
  useEffect(() => {
    if (item) {
      console.log("item", item.id);
      setEditNote({
        fields: {
          title: item.fields.title,
          body: item.fields.body,
        },
      });
    }
  }, [item, setEditNote]);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleEditNote = () => {
    handleEdit(item.id, editNote);
    setEditNote(editNote);
    console.log("editnote", editNote);
    setShowModal(false);
  };

  const handleEditNoteTitle = (event) => {
    setEditNote((note) => ({
      fields: {
        ...note?.fields,
        title: event.target.value,
      },
    }));
  };
  const handleEditNoteBody = (event) => {
    setEditNote((note) => ({
      fields: {
        ...note?.fields,
        body: event.target.value,
      },
    }));
  };

  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Edit Babel
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={handleCloseModal}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <form className="p-4 md:p-5" onSubmit={handleSubmit}>
            <div className="grid gap-4 mb-4 grid-cols-2">
              <div className="col-span-2 text-left">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Title
                </label>
                <input
                  type="text"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  value={editNote?.fields?.title || ""}
                  required=""
                  onChange={handleEditNoteTitle}
                />
              </div>

              <div className="col-span-2">
                <label className="block mb-2 text-sm text-left font-medium text-gray-900 dark:text-white">
                  Babel Body
                </label>
                <textarea
                  rows="4"
                  value={editNote?.fields?.body || ""}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
                  onChange={handleEditNoteBody}
                ></textarea>
              </div>
            </div>
            <button
              type="button"
              className="text-white inline-flex items-center bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
              onClick={handleEditNote}
            >
              <svg
                className="me-1 -ms-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              Edit babel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
