import { Header } from "@/components/Header";
import { Banner } from "@/components/Banner";
import { Sobre } from "@/components/Sobre";
import { Team } from "@/components/Team";
import { Information } from "@/components/Information";
import { CIPTEA } from "@/components/CIPTEA";
import { Donations } from "@/components/Donations";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Banner />
      <Sobre />
      <Team />
      <Information />
      <CIPTEA />
      <Donations />
      <Contact />
      <Footer />
    </main>
  );
}
