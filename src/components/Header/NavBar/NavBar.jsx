import React from "react";
import Logo from "./Logo";
import NavList from "./NavList";

const NavBar = () => {
  return (
    <nav className="container mx-auto flex justify-between  py-5">
      <Logo />
      <NavList />
    </nav>
  );
};

export default NavBar;
