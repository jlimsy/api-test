import { useState } from "react";
import NewsEditModal from "./NewsEditModal";

export default function NoteCard({
  item,
  handleEdit,
  editNote,
  setEditNote,
  handleDelete,
}) {
  const [showModal, setShowModal] = useState(false);

  const handleEditClick = () => {
    setShowModal(true);
    console.log("Edit button clicked", item.id);
  };

  const handleDeleteClick = () => {
    handleDelete(item.id);
    console.log("Delete button clicked", item.id);
  };

  return (
    <>
      <div
        name="note"
        className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h2>{item.fields.title}</h2>
        <p>{item.fields.body}</p>
        <p className="text-xs">{new Date(item.createdTime).toString()}</p>
        <p className="text-xs">Item ID: {item.id}</p>
        {showModal && (
          <>
            <NewsEditModal
              item={item}
              handleEdit={handleEdit}
              editNote={editNote}
              setEditNote={setEditNote}
              setShowModal={setShowModal}
            />{" "}
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        )}
        <button
          onClick={handleEditClick}
          className=" text-white bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
        >
          Edit
        </button>
        <button name="deleteNote" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </>
  );
}
