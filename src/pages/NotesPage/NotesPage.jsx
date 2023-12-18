import { useEffect, useState } from "react";
import NoteCard from "../../components/NoteCard";
import NoteForm from "../../components/NoteForm";

const url = "https://api.airtable.com/v0/appRSTnZc4EJjRHwg/Notes";
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

  // const handleDelete = () => {
  //   async function fetchNoteDelete() {
  //     const response = await fetch(url, {
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });

  //     const jsonNote = await response.json();
  //     // console.log(jsonNote);
  //     setNotes(jsonNote);
  //   }

  //   fetchNoteDelete();

  //   console.log("DeleteNote button clicked");
  // };

  return (
    <>
      <h1>Babel your bites here:</h1>
      {notes?.records?.map((item) => (
        <NoteCard key={item.id} item={item} />
      ))}
      <NoteForm />
    </>
  );
}
