import { NavLink } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-3 gap-5 content-center h-screen w-1/2 bg-neutral-900">
        <div className="col-span-3 h-12">
          <h1 className="text-[8rem] font-extrabold">Babel Bites</h1>
        </div>
        <div className="col-span-3">
          <p>News bites for the polyglots</p>
        </div>
        <div className="flex w-auto justify-end">
          <NavLink to="/news">
            <button>Start News Bites</button>
          </NavLink>
        </div>
        <div className="flex justify-center">
          <NavLink to="/translator">
            <button>Start Translating </button>
          </NavLink>
        </div>
        <div className="flex justify-start">
          <NavLink to="/notes">
            <button>View Notes</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
