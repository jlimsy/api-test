import { useEffect, useState } from "react";
import NoteCard from "../../components/NoteCard";
import NoteForm from "../../components/NoteForm";

const url = "https://api.airtable.com/v0/appRSTnZc4EJjRHwg/Notes/";
const token =
  "patMs26b6QKdVgo2Q.006923b37a5dd0fdeef341ca5f680ade9ecf24c9f12fe957518c9a91d1635adc";

export default function CommentaryPage() {
  const [notes, setNotes] = useState("");

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

  const fetchCreateNote = async () => {
    console.log("fetching Create Note");
    const newNote = {
      fields: {
        title: "Posted by fetch",
        notes: "This note is posted by fetch",
      },
    };

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(newNote),
    });
    const jsonNewNote = await response.json();
    setNotes([jsonNewNote]);
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
          <NoteForm fetchCreateNote={fetchCreateNote} />
        </div>
      </div>
    </>
  );
}
