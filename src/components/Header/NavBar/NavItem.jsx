import React from "react";

const links = [
  {
    name: "О комплексе",
    href: "#",
  },
  {
    name: "Район",
    href: "#",
  },
  {
    name: "Каталог квартир",
    href: "#",
  },
  {
    name: "Ипотека",
    href: "#",
  },
  {
    name: "Контакты",
    href: "#",
  },
];

const NavItem = () => {
  return (
    <>
      {links.map((link) => (
        <li key={link.name}>
          <a
            className="text-[#ffffff] hover:text-[#D4C17f] ease-in-out duration-300 text-base"
            href={link.href}
          >
            {link.name}
          </a>
        </li>
      ))}
    </>
  );
};

export default NavItem;
