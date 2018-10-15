import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <Link to={'/search'} className="navbar-brand" href="/search" onClick={props.handleInputChange}>
        Search
    </Link>
    <Link to={'/saved'} className="navbar-brand" href="/saved" onClick={props.handleInputChange}>
        Saved Articles
    </Link>
  </nav>
);

export default Nav;
