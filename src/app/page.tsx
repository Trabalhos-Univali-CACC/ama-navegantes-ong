import { Header } from "@/components/Header";
import { Banner } from "@/components/Banner";
import { Sobre } from "@/components/Sobre";
import { Team } from "@/components/Team";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Banner />
      <Sobre />
      <Team />
    </main>
  );
}
