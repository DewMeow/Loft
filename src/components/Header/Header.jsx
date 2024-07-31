import React from "react";

import headerBg from "../../assets/images/header-bg.jpg";
import NavBar from "./NavBar/NavBar";

import HeaderTitle from "./HeaderContent/HeaderTitle";
import HeaderContacts from "./HeaderContent/HeaderContacts";

const Header = () => {
  return (
    <header
      className="  bg-gradient-to-b from-custom-gray via-custom-gray-light to-custom-gray pb-[78px]"
      style={{
        backgroundImage: `linear-gradient(180deg, #242B33 11.98%, rgba(45, 52, 60, 0.38) 51.04%, #242B33 92.19%), url(${headerBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <NavBar />
      <HeaderTitle />
    </header>
  );
};

export default Header;
