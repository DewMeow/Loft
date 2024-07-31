import { Mouse } from "lucide-react";
import React from "react";
import HeaderContacts from "./HeaderContacts";

const HeaderTitle = () => {
  return (
    <div className="container flex  justify-center mx-auto pt-[224px] px-[200px] ">
      <div className="w-[556px] flex  items-center flex-col gap-4 text-center  ">
        <h1 className="text-[64px] text-center font-bold leading-[52px] tracking-tight mb-[60px] text-[#D4C17F]">
          Жилой комплекс в историческом центре
        </h1>
        <Mouse size={50} className="text-[#D4C17F] mb-[150px]" />
        <HeaderContacts />
      </div>
    </div>
  );
};

export default HeaderTitle;
