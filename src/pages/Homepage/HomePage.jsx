import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function HomePage() {
  return (
    <>
      <h2 className="text-3xl font-bold underline text-blue-chill-500">
        Home Page
      </h2>
      <p>News bites for the polyglots</p>

      <NavLink to="/news">
        <button>News</button>
      </NavLink>
      <NavLink to="/translator">
        <button>Translator</button>
      </NavLink>
      <NavLink to="/commentary">
        <button>Commentary</button>
      </NavLink>
    </>
  );
}
