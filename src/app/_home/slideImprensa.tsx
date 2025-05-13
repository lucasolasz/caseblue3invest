"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";
import BtnSite from "@/components/btnSite";

export default function SlideImpresa() {
  return (
    <Swiper spaceBetween={50} slidesPerView={3}>
      <SwiperSlide
        key={1}
        virtualIndex={1}
        className="rounded-2xl border p-8 !w-[359px] !h-[296px]"
      >
        {/* Div interna */}
        <div className="flex flex-col h-full">
          <Image
            src="/assets/logos-clientes/logo_estadao.jpg"
            alt="Logo Estadão"
            width={141}
            height={30}
          />

          <p className="mt-7">
            Ligada à XP, Blue3 lança braço de negócios para pequeno investidor
          </p>

          <div className="flex justify-between items-center mt-auto">
            <BtnSite isTransparent={true} width="w-[154px]">
              {" "}
              Ler Matéria
            </BtnSite>

            <p className="font-sans text-[10px] text-blue-600 font-bold">
              7/2/2022
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
