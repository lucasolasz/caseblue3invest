"use client";
import Image from "next/image";
import BtnSite from "./btnSite";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import SubMenuParaVoce from "./submenuParaVoce";

export function Navbar() {
  const [paraVoceSubMenuActive, setParaVoceSubMenuActive] = useState(false);

  const handleParaVoceSubMenuActive = () => {
    setParaVoceSubMenuActive(!paraVoceSubMenuActive);
  };

  return (
    <div className="bg-white w-full">
      <div className="flex items-center px-4 h-22 ">
        <div className="md:flex md:items-center">
          <Image
            src="/assets/logo-home.png"
            alt="Logo"
            width={200}
            height={200}
            className="md:p-4"
          />
          <ul className="md:flex md:gap-8 md:ml-25 text-blue-900">
            <li
              className={`md:flex md:gap-2 ${
                paraVoceSubMenuActive && "text-blue-500"
              }`}
              onMouseEnter={handleParaVoceSubMenuActive}
            >
              Para você{" "}
              <IoIosArrowDown
                size={20}
                className="cursor-pointer text-blue-500"
              />
            </li>
            <li className="md:mx-10">
              <a href="#" className="hover:text-blue-500">
                Para sua empresa{" "}
              </a>
            </li>
            <li className="md:flex md:gap-2">
              A Blue3{" "}
              <IoIosArrowDown
                size={20}
                className="cursor-pointer text-blue-500"
              />
            </li>
          </ul>
        </div>

        <div className="flex gap-4 ml-auto ">
          <BtnSite isTransparent={true}> Fale Conosco</BtnSite>
          <BtnSite isTransparent={false}> Abra sua conta</BtnSite>
        </div>
      </div>

      <SubMenuParaVoce
        paraVoceSubMenuActive={paraVoceSubMenuActive}
        handleParaVoceSubMenuActive={handleParaVoceSubMenuActive}
      />
    </div>
  );
}
