import { useEffect, useState } from "react";
import NoteCard from "../../components/NoteCard";
import NoteForm from "../../components/NoteForm";

const url = "https://api.airtable.com/v0/appRSTnZc4EJjRHwg/Notes/";
const token =
  "patMs26b6QKdVgo2Q.006923b37a5dd0fdeef341ca5f680ade9ecf24c9f12fe957518c9a91d1635adc";

export default function NotesPage() {
  const [notes, setNotes] = useState("");
  const [newNote, setNewNote] = useState({});

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

  console.log("notes:", notes);

  const fetchCreateNote = async (newNote) => {
    // console.log("fetching Create Note");
    // console.log("newNote", JSON.stringify(newNote));

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },

      body: JSON.stringify(newNote),
    });
    const jsonNewNote = await response.json();
    // console.log("jsonNewNote", jsonNewNote);
    setNotes({ records: [jsonNewNote, ...notes.records] });
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
    console.log("jsonDelNote", jsonDelNote);
    setNotes((notes) => ({
      records: notes?.records?.filter((item) => item.id !== jsonDelNote.id),
    }));
  };

  // const handleEdit = async (id) => {
  //   const data = {
  //     fields: {
  //       title: "EDIT TITLE",
  //       body: "Testing Edit Note",
  //     },
  //   };

  //   console.log("code to update airtablr goes here");
  //   const response = await fetch(`${url}${id}`, {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${token}`,
  //     },
  //     body: JSON.stringify(data),
  //   });
  //   const jsonEditNote = await response.json();
  //   setNotes(
  //     notes.records.map((item) => {
  //       if (item.id === id) {
  //         return jsonEditNote;
  //       } else {
  //         return item;
  //       }
  //     })
  //   );
  // };

  return (
    <>
      <h1>Babel your bites here:</h1>
      <div className="grid grid-cols-3">
        <div className="col-span-2 grid grid-cols-2 gap-10 content-center">
          {notes?.records?.map((item) => (
            <NoteCard key={item.id} item={item} handleDelete={handleDelete} />
          ))}
        </div>
        <div className="col-span-1 bg-teal-300">
          <NoteForm
            fetchCreateNote={fetchCreateNote}
            newNote={newNote}
            setNewNote={setNewNote}
          />
        </div>
      </div>
    </>
  );
}
