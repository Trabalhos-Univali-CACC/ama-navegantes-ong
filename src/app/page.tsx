import { Header } from "@/components/Header";
import { Banner } from "@/components/Banner";
import { Sobre } from "@/components/Sobre";
import { Team } from "@/components/Team";
import { Information } from "@/components/Information";
import { CIPTEA } from "@/components/CIPTEA";
import { Convenios } from "@/components/Convenios";
import { Donations } from "@/components/Donations";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

import {
  getBanner,
  getSobre,
  getInformacoes,
  getInformacaoItens,
  getEquipe,
  getEquipeMembros,
  getCiptea,
  getCiptaEtapas,
  getCiptaLinks,
  getCiptaBeneficios,
  getConvenios,
  getParceiros,
  getDoacoes,
  getContato,
  getContatoInfos,
} from "@/lib/api";

// Página principal. Busca TODO o conteúdo no backend e repassa para cada seção.
export default async function Home() {
  // Busca tudo em paralelo (mais rápido)
  const [
    banner,
    sobre,
    informacoes,
    informacaoItens,
    equipe,
    equipeMembros,
    ciptea,
    ciptaEtapas,
    ciptaLinks,
    ciptaBeneficios,
    convenios,
    parceiros,
    doacoes,
    contato,
    contatoInfos,
  ] = await Promise.all([
    getBanner(),
    getSobre(),
    getInformacoes(),
    getInformacaoItens(),
    getEquipe(),
    getEquipeMembros(),
    getCiptea(),
    getCiptaEtapas(),
    getCiptaLinks(),
    getCiptaBeneficios(),
    getConvenios(),
    getParceiros(),
    getDoacoes(),
    getContato(),
    getContatoInfos(),
  ]);

  return (
    <main className="min-h-screen">
      <Header />
      <Banner banner={banner} />
      <Sobre sobre={sobre} />
      <Team texto={equipe} membros={equipeMembros} />
      <Information texto={informacoes} itens={informacaoItens} />
      <CIPTEA
        texto={ciptea}
        etapas={ciptaEtapas}
        links={ciptaLinks}
        beneficios={ciptaBeneficios}
      />
      <Convenios texto={convenios} parceiros={parceiros} />
      <Donations texto={doacoes} />
      <Contact texto={contato} infos={contatoInfos} />
      <Footer />
    </main>
  );
}
