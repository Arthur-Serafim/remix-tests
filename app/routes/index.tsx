import { Link } from "@remix-run/react";
import { Fragment } from "react";

export default function Index() {
  return (
    <Fragment>
      <h2>Home</h2>
      <div>
        <Link to="/pokemon">See pokemons</Link>
      </div>
      <div>
        <Link to="/magic">See magic</Link>
      </div>
    </Fragment>
  );
}
