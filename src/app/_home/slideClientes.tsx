"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";

export default function SlideClientes() {
  return (
    <div className="h-full flex items-end">
      {/* Div inferior */}
      <div className="h-[300px] w-full">
        <Swiper spaceBetween={50} slidesPerView={1} className="h-full">
          <SwiperSlide key={1} virtualIndex={1}>
            <div className="flex gap-10 h-full">
              <div className="w-[700px] flex flex-col">
                <p className="text-white">
                  “O que mais mudou para mim sendo cliente da Blue3 foi a
                  assessoria financeira muito próxima. Eu iniciei meus
                  investimentos na Blue3 quando eu vendi meu apartamento e eu
                  resolvi morar de aluguel até achar um apartamento que me
                  atendesse do jeito que eu queria. Era muito importante que eu
                  tivesse um investimento muito sólido, de uma forma muito
                  eficaz para que, depois de um tempo, ter valorizado esse
                  dinheiro para investir novamente no meu apartamento.”
                </p>
                <p className="text-blue-600 font-bold pt-10 text-xl">Luciana</p>
                <p className="text-white font-thin">
                  empresária e cliente Blue3
                </p>
              </div>
              <div className="relative w-[525px]">
                <Image
                  className="object-cover "
                  src="/assets/cliente1-home.jpg"
                  alt="Cliente Luciana"
                  fill
                />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide key={2} virtualIndex={2}>
            <div className="flex gap-10 h-full">
              <div className="w-[700px] flex flex-col">
                <p className="text-white">
                  “Depois que eu conheci a Blue3, eu descobri uma forma
                  inteligente de criar uma renda passiva. Inteligente e segura.
                  Tenho um relacionamento muito próximo, e isso nos dá uma
                  segurança maior para investir. Até amigos que eu tenho, hoje
                  são clientes, porque eu indiquei essas pessoas para Blue3, e
                  tenho total confiança.”
                </p>
                <p className="text-blue-600 font-bold pt-10 text-xl">
                  Leonardo
                </p>
                <p className="text-white font-thin">
                  engenheiro e cliente Blue3
                </p>
              </div>
              <div className="relative w-[525px]">
                <Image
                  className="object-cover "
                  src="/assets/cliente2-home.jpg"
                  alt="Cliente Leonardo"
                  fill
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
