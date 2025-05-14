import BtnSlide from "@/components/btnSlide";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import SlideImpresa from "./slideImprensa";

export default function Blue3Imprensa() {
  return (
    <div className="h-[600px] bg-white flex items-center">
      {/* SlideJornada alinhado com o h1 */}

      <div className="md:max-w-[1140px] mx-auto w-full h-[424px] flex justify-between flex-col">
        <div className="flex !h-[40px]">
          <h1 className="md:text-5xl font-extrabold text-blue-500 w-250">
            Blue3 na imprensa
          </h1>

          <BtnSlide>
            <IoMdArrowBack className="text-blue-600" />
          </BtnSlide>

          <BtnSlide>
            <IoMdArrowForward className="text-blue-600" />
          </BtnSlide>
        </div>

        <div className="h-[396px]">
          <SlideImpresa />
        </div>
      </div>
    </div>
  );
}
