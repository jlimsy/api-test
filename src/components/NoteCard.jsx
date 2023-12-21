import { useState } from "react";
import NoteEditModal from "./NoteEditModal";

const options = {
  year: "numeric",
  month: "short",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hour12: false, // Use 24-hour format
};

export default function NoteCard({
  item,
  handleEdit,
  editNote,
  setEditNote,
  handleDelete,
}) {
  const [showModal, setShowModal] = useState(false);

  const handleEditClick = () => {
    const selectedNote = `${item.fields.title} | ${item.fields.body}`;
    setShowModal(true);
    console.log("Edit button clicked", item.id, selectedNote);
  };

  const handleDeleteClick = () => {
    handleDelete(item.id);
    console.log("Delete button clicked", item.id);
  };

  return (
    <>
      <div
        name="note"
        className="block max-w-sm p-6 m-10 h-dvh text-left bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <p className="mb-3">{item.fields.title}</p>
        <hr className="h-1 my-4 border-0 rounded dark:bg-gray-700" />

        <p className="font-bold mb-10">{item.fields.body}</p>
        <p className="text-sm">
          {new Date(item.createdTime).toLocaleString("en-US", options)}
        </p>
        <p className="text-xs mb-5 text-beige">{item.id}</p>
        {showModal && (
          <>
            <NoteEditModal
              item={item}
              handleEdit={handleEdit}
              editNote={editNote}
              setEditNote={setEditNote}
              setShowModal={setShowModal}
            />
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        )}
        <button
          onClick={handleEditClick}
          className=" text-ivory bg-void hover:bg-beige hover:text-cherry focus:ring-4 focus:outline-none focus:ring-cherry font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
        >
          Edit
        </button>
        <button
          name="deleteNote"
          className="bg-ivory text-cherry hover:bg-beige"
          onClick={handleDeleteClick}
        >
          Delete
        </button>
      </div>
    </>
  );
}
