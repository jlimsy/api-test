import { Link } from "react-router-dom";

export default function NewsCard({ item }) {
  const handleTranslate = () => {
    console.log("translate button is clicked", item.title);
    // pass setText down
  };

  return (
    <div className="flex flex-row m-10 items-center text-left bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800">
      <img
        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        src={item.image}
        alt=""
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-teal-900 dark:text-white">
          {item.title}
        </h5>
        <p>{new Date(item.publishedAt).toString()}</p>
        <p className="mb-3 text-xs text-teal-700 dark:text-gray-400">
          {item.description}
        </p>
        <p className="mb-3 text-teal-700 dark:text-gray-400">{item.content}</p>
        <Link to={item.source.url} target="_blank">
          Read more at {`${item.source.name}`}
        </Link>
        <Link to="../translator">
          <button onClick={handleTranslate}>Translate</button>
        </Link>
        <Link to="../notes">
          <button>Notes</button>
        </Link>
      </div>
    </div>
  );
}
