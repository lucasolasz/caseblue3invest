import HeroTeste from "@/components/heroTeste";
import HomePage from "./_home/homePage";
import { Navbar } from "@/components/navbar";
import JornadaTeste from "@/components/jornadaTeste";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HomePage />
      {/* <HeroTeste />
      <JornadaTeste /> */}
    </div>
  );
}
