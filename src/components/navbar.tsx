"use client";
import Image from "next/image";
import BtnSite from "./btnSite";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

export function Navbar() {
  const [paraVoceSubMenu, setParaVoceSubMenu] = useState(false);

  const handleParaVoceSubMenu = () => {
    setParaVoceSubMenu(!paraVoceSubMenu);
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
                paraVoceSubMenu && "text-blue-500"
              }`}
              onMouseEnter={handleParaVoceSubMenu}
            >
              Para você{" "}
              <IoIosArrowDown
                size={20}
                className="cursor-pointer text-blue-500"
              />
            </li>
            <li className="md:mx-10">Para sua empresa </li>
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

      <div
        className={`z-2 md:group-hover:block bg-white w-full absolute md:h-[150px] border-t border-gray-200 ${
          paraVoceSubMenu ? "" : "hidden"
        }`}
        onMouseLeave={handleParaVoceSubMenu}
      >
        <div className="flex md:text-start md:mx-80 md:my-10">
          <div className="max-w-80">
            <h1 className="text-blue-500 md:text-xl font-bold">
              Para a sua jornada
            </h1>
            <p className="md:text-[14px] text-gray-500 mt-2">
              Conheça todas as soluções da Blue3 para a construção e evolução da
              sua jornada.
            </p>
          </div>

          <div className="md:flex md:flex-col md:mx-30 md:gap-5 w-fit">
            <a href="#" className="hover:text-blue-500">
              Renda Variável
            </a>
            <a href="#" className="hover:text-blue-500">
              Renda Fixa
            </a>
          </div>

          <div className="md:flex md:flex-col md:gap-5 w-fit">
            <a href="#" className="hover:text-blue-500">
              Produtos internacionais
            </a>
            <a href="#" className="hover:text-blue-500">
              HUB de Educação
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
