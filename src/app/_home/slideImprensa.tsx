"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";
import BtnSite from "@/components/btnSite";

export default function SlideImpresa() {
  return (
    <Swiper spaceBetween={40} slidesPerView={3}>
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
              29/3/2022
            </p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide
        key={2}
        virtualIndex={2}
        className="rounded-2xl border p-8 !w-[359px] !h-[296px]"
      >
        {/* Div interna */}
        <div className="flex flex-col h-full">
          <Image
            src="/assets/logos-clientes/logo_valoreconomico.jpg"
            alt="Logo Valor Econômico"
            width={88}
            height={30}
          />

          <p className="mt-7">
            Cade autoriza joint venture entre Blue3 e XP Investimentos
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

      <SwiperSlide
        key={3}
        virtualIndex={3}
        className="rounded-2xl border p-8 !w-[359px] !h-[296px]"
      >
        {/* Div interna */}
        <div className="flex flex-col h-full">
          <Image
            src="/assets/logos-clientes/logo_Itsmoney.jpg"
            alt="Logo Its Money"
            width={57}
            height={30}
          />

          <p className="mt-7">
            Com a chegada da Troon Capital, Blue3 atinge R$ 25 bi em custódia
          </p>

          <div className="flex justify-between items-center mt-auto">
            <BtnSite isTransparent={true} width="w-[154px]">
              {" "}
              Ler Matéria
            </BtnSite>

            <p className="font-sans text-[10px] text-blue-600 font-bold">
              24/3/2023
            </p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide
        key={4}
        virtualIndex={4}
        className="rounded-2xl border p-8 !w-[359px] !h-[296px]"
      >
        {/* Div interna */}
        <div className="flex flex-col h-full">
          <Image
            src="/assets/logos-clientes/logo_forbes.jpg"
            alt="Logo Forbes"
            width={115}
            height={30}
          />

          <p className="mt-7">
            Do varejo ao mercado de ações: a trajetória dos fundadores da Blue3
          </p>

          <div className="flex justify-between items-center mt-auto">
            <BtnSite isTransparent={true} width="w-[154px]">
              {" "}
              Ler Matéria
            </BtnSite>

            <p className="font-sans text-[10px] text-blue-600 font-bold">
              6/6/2022
            </p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide
        key={5}
        virtualIndex={5}
        className="rounded-2xl border p-8 !w-[359px] !h-[296px]"
      >
        {/* Div interna */}
        <div className="flex flex-col h-full">
          <Image
            src="/assets/logos-clientes/logo_valorinveste.jpg"
            alt="Logo Valor Investe"
            width={160}
            height={30}
          />

          <p className="mt-7">
            Blue3 Investimentos lança programa de educação financeira gratuita a
            jovens estudantes
          </p>

          <div className="flex justify-between items-center mt-auto">
            <BtnSite isTransparent={true} width="w-[154px]">
              {" "}
              Ler Matéria
            </BtnSite>

            <p className="font-sans text-[10px] text-blue-600 font-bold">
              2/5/2022
            </p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide
        key={6}
        virtualIndex={6}
        className="rounded-2xl border p-8 !w-[359px] !h-[296px]"
      >
        {/* Div interna */}
        <div className="flex flex-col h-full">
          <Image
            src="/assets/logos-clientes/logo_sunonoticias.jpg"
            alt="Logo Suno"
            width={108}
            height={30}
          />

          <p className="mt-7">
            Crescer muito (e rápido): Blue3 Investimentos mira em forte expansão
            física e financeira
          </p>

          <div className="flex justify-between items-center mt-auto">
            <BtnSite isTransparent={true} width="w-[154px]">
              {" "}
              Ler Matéria
            </BtnSite>

            <p className="font-sans text-[10px] text-blue-600 font-bold">
              28/4/2022
            </p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide
        key={7}
        virtualIndex={7}
        className="rounded-2xl border p-8 !w-[359px] !h-[296px]"
      >
        {/* Div interna */}
        <div className="flex flex-col h-full">
          <Image
            src="/assets/logos-clientes/logo_Infomoney.jpg"
            alt="Logo Infomoney"
            width={145}
            height={30}
          />

          <p className="mt-7">
            Cidadão do mundo: médico investe por 8 anos para viver de renda em
            25 países; siga dicas
          </p>

          <div className="flex justify-between items-center mt-auto">
            <BtnSite isTransparent={true} width="w-[154px]">
              {" "}
              Ler Matéria
            </BtnSite>

            <p className="font-sans text-[10px] text-blue-600 font-bold">
              25/4/2022
            </p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide
        key={8}
        virtualIndex={8}
        className="rounded-2xl border p-8 !w-[359px] !h-[296px]"
      >
        {/* Div interna */}
        <div className="flex flex-col h-full">
          <Image
            src="/assets/logos-clientes/logo_oglobo.jpg"
            alt="Logo O globo"
            width={180}
            height={30}
          />

          <p className="mt-7">
            Nova sede: escritório ligado à XP, Blue3 planeja "Villa" de R$ 30
            milhões em Ribeirão Preto
          </p>

          <div className="flex justify-between items-center mt-auto">
            <BtnSite isTransparent={true} width="w-[154px]">
              {" "}
              Ler Matéria
            </BtnSite>

            <p className="font-sans text-[10px] text-blue-600 font-bold">
              9/4/2022
            </p>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide
        key={9}
        virtualIndex={9}
        className="rounded-2xl border p-8 !w-[359px] !h-[296px]"
      >
        {/* Div interna */}
        <div className="flex flex-col h-full">
          <Image
            src="/assets/logos-clientes/logo_g1.jpg"
            alt="Logo G1"
            width={30}
            height={30}
          />

          <p className="mt-7">
            Interesse por aplicações financeiras coloca RP entre 10 cidades do
            país com mais escritórios de investimentos
          </p>

          <div className="flex justify-between items-center mt-auto">
            <BtnSite isTransparent={true} width="w-[154px]">
              {" "}
              Ler Matéria
            </BtnSite>

            <p className="font-sans text-[10px] text-blue-600 font-bold">
              1/4/2022
            </p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
