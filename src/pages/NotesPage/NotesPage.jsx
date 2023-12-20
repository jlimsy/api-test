import { useEffect, useState } from "react";
import NoteCard from "../../components/NoteCard";
import NoteForm from "../../components/NoteForm";

const url = "https://api.airtable.com/v0/appRSTnZc4EJjRHwg/Notes/";
const token =
  "patMs26b6QKdVgo2Q.006923b37a5dd0fdeef341ca5f680ade9ecf24c9f12fe957518c9a91d1635adc";

export default function NotesPage() {
  const [notes, setNotes] = useState("");
  const [newNote, setNewNote] = useState({});
  const [editNote, setEditNote] = useState(null);

  useEffect(() => {
    async function fetchNotes() {
      const response = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const jsonNotes = await response.json();
      // console.log(jsonNotes);
      setNotes(jsonNotes);
    }

    fetchNotes();
  }, []);

  const fetchCreateNote = async (newNote) => {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },

      body: JSON.stringify(newNote),
    });
    const jsonNewNote = await response.json();
    setNotes({ records: [jsonNewNote, ...notes.records] });
  };

  const handleEdit = async (id, editNote) => {
    console.log("url to patch", `${url}${id}`);
    const response = await fetch(`${url}${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(editNote),
    });

    const jsonEditNote = await response.json();
    console.log("jsonEditNote", jsonEditNote);
    setNotes(
      notes?.records?.map((item) => {
        if (item.id === id) {
          return jsonEditNote;
        } else {
          return item;
        }
      })
    );
  };

  const handleDelete = async (id) => {
    const response = await fetch(`${url}${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const jsonDelNote = await response.json();
    setNotes((notes) => ({
      records: notes?.records?.filter((item) => item.id !== jsonDelNote.id),
    }));
  };

  return (
    <>
      <h1>Babel your bites here:</h1>
      <div className="grid grid-cols-3">
        <div className="col-span-2 grid grid-cols-2 gap-10 content-center">
          {notes?.records?.map((item) => (
            <NoteCard
              key={item.id}
              item={item}
              editNote={editNote}
              setEditNote={setEditNote}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          ))}
        </div>
        <div className="col-span-1 h-screen bg-teal-300">
          <NoteForm
            fetchCreateNote={fetchCreateNote}
            newNote={newNote}
            setNewNote={setNewNote}
            setEditNote={setEditNote}
          />
        </div>
      </div>
    </>
  );
}
