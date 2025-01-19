import React, { useState } from "react";
import Close from "../assets/close.svg";
import Hamburger from "../assets/hamburger.svg";
import { NavLink } from "react-router-dom";
import LanguageDropdown from "./LanguageDropdown";
import { FormattedMessage } from "react-intl";

export default function Header() {

   const [showMenu, toggleMenu] = useState(false);

   return (
      <header>
            <div>
               <strong>educative</strong>
               <span>
                  <LanguageDropdown />
                  <a onClick={() => toggleMenu((prev) => !prev)}>
                        <img
                           src={showMenu ? Close : Hamburger}
                           alt="Menu"
                        />
                  </a>
               </span>
            </div>

            <nav className={showMenu ? "visible" : "hidden"}>
               <NavLink to="/" activeclassname="active">
                  <FormattedMessage id="LINK_TEXT" />
               </NavLink>
               <NavLink to="/number" activeclassname="active" >
                  <FormattedMessage id="LINK_NUMBER" />
               </NavLink>
               <NavLink to="/date" activeclassname="active" >
                  <FormattedMessage id="LINK_DATE" />
               </NavLink>
            </nav>
      </header>
   );
}