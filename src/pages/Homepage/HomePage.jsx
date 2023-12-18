import { NavLink } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="grid grid-cols-2 gap-5 bg-neutral-900 content-center h-screen w-3/5">
      <div className="col-span-2">
        <h1 className="text-[8rem] font-extrabold">Babel Bites</h1>
      </div>
      <div className="col-span-2">
        <p>News bites for the polyglots</p>
      </div>
      <div>
        <NavLink to="/news">
          <button>Start News Bites</button>
        </NavLink>
      </div>
      <div>
        <NavLink to="/translator">
          <button>Start Translating </button>
        </NavLink>
      </div>
    </div>
  );
}
