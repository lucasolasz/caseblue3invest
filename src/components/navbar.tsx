import Image from "next/image";
import BtnSite from "./btnSite";
import { IoIosArrowDown } from "react-icons/io";

export function Navbar() {
  return (
    <div className="flex items-center px-4 h-22 ">
      <div className="flex items-center">
        <Image
          src="/assets/logo-home.png"
          alt="Logo"
          width={200}
          height={200}
          className="p-4"
        />
        <ul className="flex gap-8 ml-25 text-blue-900">
          <li className="flex gap-2">
            Para você{" "}
            <IoIosArrowDown
              size={20}
              className="cursor-pointer text-blue-500"
            />
          </li>
          <li className="mx-10">Para sua empresa </li>
          <li className="flex gap-2">
            A Blue3{" "}
            <IoIosArrowDown
              size={20}
              className="cursor-pointer text-blue-500"
            />
          </li>
        </ul>
      </div>

      <div className="flex gap-4 ml-auto">
        <BtnSite isTransparent={true}> Fale Conosco</BtnSite>
        <BtnSite isTransparent={false}> Abra sua conta</BtnSite>
      </div>
    </div>
  );
}
