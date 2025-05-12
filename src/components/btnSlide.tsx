import { ReactNode } from "react";

type BtnSlideProps = {
  children: ReactNode;
};

export default function BtnSlide({ children }: BtnSlideProps) {
  return (
    <button className="border-[2px] rounded-sm border-blue-500 !m-0 p-0 w-15 h-10 flex justify-center ">
      {children}
    </button>
  );
}
