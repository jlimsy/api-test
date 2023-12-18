import { NavLink } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="grid grid-cols-2 gap-5 content-center h-screen bg-neutral-900">
      <div className="col-span-2 h-12">
        <h1 className="text-[8rem] font-extrabold">Babel Bites</h1>
      </div>
      <div className="col-span-2">
        <p>News bites for the polyglots</p>
      </div>
      <div className="flex justify-end">
        <NavLink to="/news">
          <button>Start News Bites</button>
        </NavLink>
      </div>
      <div className="flex justify-start">
        <NavLink to="/translator">
          <button>Start Translating </button>
        </NavLink>
      </div>
    </div>
  );
}
