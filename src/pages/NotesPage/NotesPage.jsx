import { NavLink } from "react-router-dom";

import(NavLink);

export default function CommentaryPage() {
  return (
    <>
      <h3>Commentary Page</h3>
      <p>Babel your bites here:</p>
      <NavLink to="/">Home</NavLink>
    </>
  );
}
