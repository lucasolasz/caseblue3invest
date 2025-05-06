import Image from "next/image";

export default function JornadaCopy() {
  return (
    <div className="h-[677px] w-full flex justify-center md:overflow-hidden">
      {/* Div central */}
      <div className="flex items-center gap-5">
        {/* Div das imagens */}
        <div className="flex w-250 my-10 gap-10">
          <div className="flex items-center w-full">
            <Image
              className="mx-auto my-10 rounded-2xl"
              src="/assets/home-jornada/homem-esquerda-jornada.png"
              alt="Homem 1 esquerda"
              width={200}
              height={250}
            />
          </div>

          <div className="w-full">
            <Image
              className="mx-auto my-10 rounded-2xl"
              src="/assets/home-jornada/homem1-direita-jornada.png"
              alt="Homem 1 direita"
              width={200}
              height={250}
            />

            <Image
              className="mx-auto my-10 rounded-2xl"
              src="/assets/home-jornada/homem2-direita-jornada.png"
              alt="Homem 2 direita"
              width={200}
              height={250}
            />
          </div>
        </div>
        {/* Div das frases */}
        <div>
          <h1 className="text-3xl font-extrabold text-blue-500">
            A sua jornada começa aqui e agora
          </h1>
          <p className="pt-5">
            Somos a Blue3. Seremos o guia na sua jornada desde o primeiro
            investimento à liberdade financeira.
          </p>
          <p className="pt-5">
            Vamos entender o seu momento de vida e mirar o seu potencial,
            independente das circunstâncias e obstáculos. Transformaremos as
            incertezas em oportunidades para te ajudar a:
          </p>
          <h1 className="pt-5 font-bold text-blue-950 text-2xl">ACUMULAR</h1>
          <p>
            Você estará pronto para acumular patrimônio por meio de planejamento
            e organização financeira bem definidos.
          </p>
          <h1 className="pt-5 font-bold text-blue-950 text-2xl">PRESERVAR</h1>
          <p>
            Aqui, você vai entender a melhor forma de preservar o que acumulou
            para a saúde das suas finanças e do seu patrimônio.
          </p>
          <h1 className="pt-5 font-bold text-blue-950 text-2xl">
            RENTABILIZAR
          </h1>
          <p>
            Nesta etapa, você saberá exatamente como rentabilizar e fazer o
            dinheiro que você acumulou e preservou trabalhar para você.
          </p>
        </div>
        <Image
          className="mx-auto my-10 md:hidden"
          src="/assets/jornada_mobile.png"
          alt="Analytics"
          width={500}
          height={100}
        />
      </div>
    </div>
  );
}
