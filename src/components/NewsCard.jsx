import { Link } from "react-router-dom";

export default function NewsCard({ newsQuery }) {
  console.log(newsQuery);
  return newsQuery.map((item) => (
    <div
      key={item.title}
      className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <img
        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        src={item.imgUrl}
        alt=""
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-teal-900 dark:text-white">
          {item.title}
        </h5>
        <p className="mb-3 font-normal text-teal-700 dark:text-gray-400">
          {item.summary}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut morbi
          tincidunt augue interdum velit euismod in pellentesque massa.
        </p>
        <Link to={item.source}>Read more</Link>
        <Link to="../translator">
          <button>Translate</button>
        </Link>
        <Link to="../notes">
          <button>Notes</button>
        </Link>
      </div>
    </div>
  ));
}
