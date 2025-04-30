import HeroHome from "@/app/_home/heroHome";
import Hero from "@/app/_home/heroHome";
import Jornada from "@/app/_home/jornada";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <div>
      <HeroHome />
      <Jornada />
    </div>
  );
}
