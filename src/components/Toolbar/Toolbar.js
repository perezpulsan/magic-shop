import React from "react";

import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import "./Toolbar.css";

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar_navigation">
      <div>
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="toolbar__logo">
        <a href="/">MyLogo</a>
      </div>
      <div className="spacer" />
      <div className="toolbar__navigation__items">
        <ul>
          <li>
            <a href="/">NewHits</a>
          </li>
          <li>
            <a href="/">Trix</a>
          </li>
          <li>
            <a href="/">Equipment</a>
          </li>
          <li>
            <a href="/">DVD's</a>
          </li>
          <li>
            <a href="/">Books</a>
          </li>
          <li>
            <a href="/">PlayingCards</a>
          </li>
          <li>
            <a href="/">Manufacturer</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;
