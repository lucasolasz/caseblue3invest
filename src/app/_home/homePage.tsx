import AlemDosNumeros from "./alemDosNumeros";
import Blue3Imprensa from "./blue3Imprensa";
import ExperienciaClientes from "./experienciaClientes";
import HeroHome from "./heroHome";
import Jornada from "./jornada";
import Oportunidades from "./oportunidades";
import OQueFazemos from "./oQueFazemos";
import PreFooter from "./preFooter";

export default function HomePage() {
  return (
    <div>
      <HeroHome />
      <Jornada />
      <Oportunidades />
      <AlemDosNumeros />
      <OQueFazemos />
      <ExperienciaClientes />
      <Blue3Imprensa />
      <PreFooter />
    </div>
  );
}
