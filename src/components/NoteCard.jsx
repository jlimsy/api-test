export default function NoteItem() {
  return (
    <>
      <div
        name="note"
        className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Title
        </h3>
        <p>Commentary goes here ooh la la</p>
        <button name="deleteNote">Delete</button>
        <button name="deleteNote">Edit</button>
      </div>
    </>
  );
}
