import { MapPin, Phone } from "lucide-react";
import React from "react";

const HeaderContacts = () => {
  return (
    <div className="flex gap-[90px]">
      <a className="flex gap-4 items-center text-white hover:text-[#D4C17f] ease-in-out duration-300" href="#">
        <MapPin />
        Наб. реки Фонтанки 10-15
      </a>

      <a className="flex gap-4 text-white hover:text-[#D4C17f] ease-in-out duration-300 "href="#">
        <Phone />+ 8 (812) 123-45-67
      </a>
    </div>
  );
};

export default HeaderContacts;
