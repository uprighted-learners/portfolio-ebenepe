import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

function Header() {
  let activeStyle = {
    fontWeight: "700",
    textDecoration: "underline"
  };

  // location variable checks for page reload
  let location = useLocation();

  // on page reload (when link is clicked) scroll to the top of the page
  // this didnt happen automatically for the links at the bottom of the page
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return (
    <div id="header">
      <h1>Erik Benepe</h1>
      <ul>
        {/* <li id="nav-home">
          <NavLink 
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              HOME
          </NavLink>
        </li> */}
        <li id="nav-about">
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            ABOUT
          </NavLink>
        </li>
        <li id="nav-projects">
          <NavLink
            to="/projects"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            PROJECTS
          </NavLink>
        </li>
        {/* <li id="nav-audio">
          <NavLink
            to="/audio"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            AUDIO
          </NavLink>
        </li> */}
        <li id="nav-cv">
          <NavLink
            to="/CV"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            CV
          </NavLink>
        </li>
        <li id="nav-contact">
          <NavLink
            to="/contact"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            CONTACT
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Header;
