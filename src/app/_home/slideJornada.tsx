"use client";

import { useRef, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

export default function SlideJornada() {
  return (
    <div>
      <Swiper spaceBetween={50} slidesPerView={3}>
        <SwiperSlide
          key={1}
          virtualIndex={1}
          className="rounded-2xl border p-5 !w-[350px] !h-[210px]"
        >
          <p className="text-blue-800 text-xl font-bold">Renda variável</p>
          <p className="py-5">
            Você pode investir diretamente na Bolsa de Valores e com o suporte
            da melhor mesa de renda variável do Brasil.
          </p>
        </SwiperSlide>
        <SwiperSlide
          key={2}
          virtualIndex={2}
          className="rounded-2xl border p-5 !w-[350px] !h-[210px]"
        >
          <p className="text-blue-800 text-xl font-bold">Renda fixa</p>
          <p className="py-5">
            Acesso a títulos públicos, bancários e privados com o suporte da
            melhor mesa de renda fixa do Brasil.
          </p>
        </SwiperSlide>
        <SwiperSlide
          key={3}
          virtualIndex={3}
          className="rounded-2xl border p-5 !w-[350px] !h-[210px]"
        >
          <p className="text-blue-800 text-xl font-bold">
            Investimentos Internacionais
          </p>
          <p className="py-5">
            Exposição a moedas estrangeiras sem burocracia e com apoio de um
            time de especialistas.
          </p>
        </SwiperSlide>
        <SwiperSlide
          key={4}
          virtualIndex={4}
          className="rounded-2xl border p-5 !w-[350px] !h-[210px]"
        >
          <p className="text-blue-800 text-xl font-bold">
            Fundo de investimentos
          </p>
          <p className="py-5">
            Acesso aos principais fundos das maiores gestoras do Brasil.{" "}
          </p>
        </SwiperSlide>

        <SwiperSlide
          key={5}
          virtualIndex={5}
          className="rounded-2xl border p-5 !w-[350px] !h-[210px]"
        >
          <p className="text-blue-800 text-xl font-bold">Fundos Imobiliários</p>
          <p className="py-5">
            Invista no setor imobiliário por meio dos fundos mais competitivos
            do momento.
          </p>
        </SwiperSlide>

        <SwiperSlide
          key={6}
          virtualIndex={6}
          className="rounded-2xl border p-5 !w-[350px] !h-[210px]"
        >
          <p className="text-blue-800 text-xl font-bold">COE</p>
          <p className="py-5">
            Invista em operações estruturadas mesclando o melhor dos dois
            mundos: renda variável e renda fixa em um só tipo de investimento.
          </p>
        </SwiperSlide>

        <SwiperSlide
          key={7}
          virtualIndex={7}
          className="rounded-2xl border p-5 !w-[350px] !h-[210px]"
        >
          <p className="text-blue-800 text-xl font-bold">FUTUROS</p>
          <p className="py-5">
            Conte com uma assessoria direcionada para operar no mercado futuro e
            negociar no pregão conforme os índices da Bolsa.
          </p>
        </SwiperSlide>

        <SwiperSlide
          key={8}
          virtualIndex={8}
          className="rounded-2xl border p-5 !w-[350px] !h-[210px]"
        >
          <p className="text-blue-800 text-xl font-bold">CDB</p>
          <p className="py-5">
            Empreste dinheiro para os bancos com a segurança da renda fixa e
            receba rendimentos recorrentes.
          </p>
        </SwiperSlide>

        <SwiperSlide
          key={9}
          virtualIndex={9}
          className="rounded-2xl border p-5 !w-[350px] !h-[210px]"
        >
          <p className="text-blue-800 text-xl font-bold">ETF</p>
          <p className="py-5">
            Diversifique o seu patrimônio e garanta as melhores ações da Bolsa
            na sua carteira com um fundo de índice.
          </p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
