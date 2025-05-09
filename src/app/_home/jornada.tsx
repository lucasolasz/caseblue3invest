import Image from "next/image";

export default function Jornada() {
  return (
    <div className="h-[850px] bg-white md:flex md:items-center ">
      {/* Div principal */}
      <div className="md:max-w-[1140px] md:mx-auto md:w-full h-[80%] md:flex">
        {/* Div com imagens */}
        <div className="md:w-[45%] md:flex my-10">
          <div className="flex items-center">
            <Image
              className="mx-auto my-10 rounded-2xl w-full"
              src="/assets/home-jornada/homem-esquerda-jornada.png"
              alt="Homem 1 esquerda"
              width={300}
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
        <div className="md:w-[65%] md:flex md:flex-col md:justify-between">
          <h1 className="md:text-5xl font-extrabold text-blue-500">
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
      </div>
    </div>
  );
}
