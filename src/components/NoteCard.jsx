export default function NoteCard({ item }) {
  const handleDeleteClick = () => {
    // handleDelete(item.id);
    console.log("item.id", item.id);
  };

  const handleEditClick = () => {
    console.log("Edit button clicked");
  };

  return (
    <>
      <div
        name="note"
        className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h2>Title: {item.fields.title}</h2>
        <p>Note: {item.fields.notes}</p>
        <p className="text-xs">{new Date(item.createdTime).toString()}</p>
        <p>Item ID: {item.id}</p>
        <button name="deleteNote" onClick={handleDeleteClick}>
          Delete
        </button>
        <button name="deleteNote" onClick={handleEditClick}>
          Edit
        </button>
      </div>
    </>
  );
}
