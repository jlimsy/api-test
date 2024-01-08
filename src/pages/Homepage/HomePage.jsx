import { NavLink } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <div className="grid grid-cols-4 grid-rows-2 h-auto">
        <div className="col-span-1 flex justify-center items-center">
          <div className="italic lg:text-xl text-sm text-center -rotate-90">
            <hr className="h-1 bg-cherry" />
            News bites
            <hr className="h-1 bg-cherry" />
          </div>
        </div>

        <div className="grid col-span-2 grid-cols-3 gap-5 h-auto">
          <div className="col-span-3 mt-5 mb-5 h-auto">
            <h1 className="text-2xl lg:text-6xl font-black opacity-10 md:text-4xl">
              Babel <span className="italic text-cherry">Bites</span>.
            </h1>
            <h1 className="text-2xl lg:text-6xl font-black opacity-25 md:text-4xl">
              Babel <span className="italic text-cherry">Bites</span>.
            </h1>
            <h1 className="text-2xl lg:text-6xl font-black opacity-50 md:text-4xl">
              Babel <span className="italic text-cherry">Bites</span>.
            </h1>
            <h1 className="text-2xl lg:text-6xl font-black opacity-75 md:text-4xl">
              Babel <span className="italic text-cherry">Bites</span>.
            </h1>
            <h1 className="text-2xl lg:text-6xl font-black md:text-4xl">
              Babel <span className="italic text-cherry">Bites</span>.
            </h1>
          </div>

          <div className="flex w-auto justify-end">
            <NavLink to="/news">
              <button className="bg-cherry mb-10">News Bites</button>
            </NavLink>
          </div>
          <div className="flex justify-center">
            <NavLink to="/translator">
              <button className="bg-cherry mb-10">Translate</button>
            </NavLink>
          </div>
          <div className="flex justify-start">
            <NavLink to="/notes">
              <button className="bg-cherry mb-10">View Babels</button>
            </NavLink>
          </div>
        </div>

        <div className="col-span-1 flex justify-center items-center">
          <div className="italic lg:text-xl text-sm text-center rotate-90">
            <hr className="h-1 bg-cherry" />
            for the polyglots
            <hr className="h-1 bg-cherry" />
          </div>
        </div>
        <div
          className="col-span-4 row-span-2"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1555432384-3b2fa7b650c9?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
          }}
        ></div>
      </div>
    </>
  );
}
