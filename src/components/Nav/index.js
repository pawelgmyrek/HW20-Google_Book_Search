import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Google Book Search
      </a>
      <div id="navbarItems">
        <ul className="navItems">
          <li className="navItem">
            <a className="nav-link" href="/"><button type="button" className="btn btn-info text-white">Search Books</button></a>
          </li>
          <li className="navItem">
            <a className="nav-link" href="/saved"><button type="button" className="btn btn-warning text-white">Saved Books</button></a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
