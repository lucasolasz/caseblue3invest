import Image from "next/image";

export default function Jornada() {
  return (
    <div className="h-screen py-14 px-10">
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
        Você estará pronto para acumular patrimônio por meio de planejamento e
        organização financeira bem definidos.
      </p>
      <h1 className="pt-5 font-bold text-blue-950 text-2xl">PRESERVAR</h1>
      <p>
        Aqui, você vai entender a melhor forma de preservar o que acumulou para
        a saúde das suas finanças e do seu patrimônio.
      </p>
      <h1 className="pt-5 font-bold text-blue-950 text-2xl">RENTABILIZAR</h1>
      <p>
        Nesta etapa, você saberá exatamente como rentabilizar e fazer o dinheiro
        que você acumulou e preservou trabalhar para você.
      </p>
      <Image
        className="mx-auto my-10"
        src="/assets/jornada_mobile.png"
        alt="Analytics"
        width={500}
        height={100}
      />
    </div>
  );
}
