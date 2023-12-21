import { useState } from "react";
import { Link } from "react-router-dom";

export default function NewsCard({ item }) {
  const [selectedText, setSelectedText] = useState("");

  const handleTextSelect = () => {
    const selection = window.getSelection();
    const selectedString = selection.toString();
    setSelectedText(selectedString);
    console.log(`${selectedString} is selected`);
  };

  const handleTranslate = () => {
    window.open(`/translator/text/${selectedText}`, "_blank");
    // console.log(`translate button is clicked with ${selectedText}`);
  };

  const handleNote = () => {
    const selectedNews = `${item.title} | ${item.source.name}`;
    window.open(`/notes/${selectedNews}`, "_blank");
    console.log(`${selectedNews} is selected`);
  };

  return (
    <>
      <div
        onMouseUp={handleTextSelect}
        className="flex flex-row w-1/2 mx-auto text-left items-center rounded-lg md:flex-row"
      >
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          src={item.image}
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className=" text-2xl font-bold tracking-tight text-void dark:text-white">
            {item.title}
          </h5>
          <p className="mb-3 dark:text-ivory italic">{item.description}</p>
          <p className="mb-3 text-xs">
            {new Date(item.publishedAt).toString()}
          </p>
          <p className="mb-3 text-void dark:text-ivory">{item.content}</p>
          <p className="font-semibold">
            Read more at{" "}
            <Link to={item.source.url} target="_blank" className="text-cherry">
              {`${item.source.name}`}
            </Link>
          </p>
          <div className="flex justify-end">
            <button
              onClick={handleTranslate}
              className="bg-void hover:bg-beige hover:text-cherry dark:bg-ivory dark:text-ivory"
            >
              Translate
            </button>
            <button
              onClick={handleNote}
              className="bg-void hover:bg-beige hover:text-cherry dark:bg-ivory dark:text-ivory"
            >
              Notes
            </button>
          </div>
        </div>
      </div>
      <hr className="w-1/2 justify-self-center" />
    </>
  );
}
