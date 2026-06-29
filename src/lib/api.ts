// ----------------------------------------------------------------------------
// Camada de comunicação com o backend (AMA Navegantes API).
// Aqui ficam os "tipos" de cada conteúdo e as funções que BUSCAM os dados.
// O site (página principal) e a página /admin usam este arquivo.
// ----------------------------------------------------------------------------

// Endereço do backend. Pode ser trocado criando um arquivo .env.local com:
//   NEXT_PUBLIC_API_URL=http://localhost:5080
export const API_URL =
   process.env.NEXT_PUBLIC_API_URL ?? "http://naoeopcdop4.chickenkiller.com::8080";

// Monta a URL de uma imagem a partir do seu identificador (ex: "logo")
export function imageUrl(identificador: string) {
   return `${API_URL}/api/imagens/${identificador}`;
}

// ---- Tipos dos textos de cada seção ----
export interface BannerTexto {
   rotulo: string;
   titulo: string;
   paragrafo: string;
}
export interface SobreTexto {
   rotulo: string;
   titulo: string;
   paragrafo: string;
   missao: string;
   visao: string;
}
export interface InformacoesTexto {
   rotulo: string;
   titulo: string;
   paragrafo: string;
   ajudaTitulo: string;
   ajudaTexto: string;
   ajudaTelefone: string;
}
export interface EquipeTexto {
   rotulo: string;
   titulo: string;
   paragrafo: string;
}
export interface CiptaTexto {
   rotulo: string;
   titulo: string;
   paragrafo: string;
   importanteTitulo: string;
   importanteTexto: string;
   botaoTexto: string;
}
export interface ConveniosTexto {
   rotulo: string;
   titulo: string;
   paragrafo: string;
}
export interface DoacoesTexto {
   rotulo: string;
   titulo: string;
   paragrafo: string;
   pixTitulo: string;
   pixDescricao: string;
   roupasTitulo: string;
   roupasDescricao: string;
   roupasBotao: string;
}
export interface ContatoTexto {
   rotulo: string;
   titulo: string;
   paragrafo: string;
   formTitulo: string;
}

// ---- Tipos das listas ----
export interface EquipeMembro {
   id: number;
   nome: string;
   cargo: string;
   descricao: string;
   imagemIdentificador?: string | null;
}
export interface InformacaoItem {
   id: number;
   titulo: string;
   conteudo: string;
}
export interface CiptaEtapa {
   id: number;
   numero: string;
   titulo: string;
   descricao: string;
}
export interface CiptaBeneficio {
   id: number;
   texto: string;
}
export interface CiptaLink {
   id: number;
   titulo: string;
   url: string;
   descricao: string;
   oficial: boolean;
}
export interface Parceiro {
   id: number;
   nome: string;
   descricao: string;
   logoIdentificador?: string | null;
}
export interface ContatoInfo {
   id: number;
   rotulo: string;
   valor: string;
   link?: string | null;
}

// Função genérica que busca um JSON do backend.
// Se der erro (backend desligado, etc.), devolve o valor "fallback" para o
// site não quebrar.
async function getJson<T>(path: string, fallback: T): Promise<T> {
   try {
      const res = await fetch(`${API_URL}${path}`, { cache: "no-store" });
      if (!res.ok) return fallback;
      return (await res.json()) as T;
   } catch {
      return fallback;
   }
}

// ---- Funções que buscam cada conteúdo ----
export const getBanner = () => getJson<BannerTexto | null>("/api/banner", null);
export const getSobre = () => getJson<SobreTexto | null>("/api/sobre", null);
export const getInformacoes = () =>
   getJson<InformacoesTexto | null>("/api/informacoes", null);
export const getEquipe = () => getJson<EquipeTexto | null>("/api/equipe", null);
export const getCiptea = () => getJson<CiptaTexto | null>("/api/ciptea", null);
export const getConvenios = () =>
   getJson<ConveniosTexto | null>("/api/convenios", null);
export const getDoacoes = () =>
   getJson<DoacoesTexto | null>("/api/doacoes", null);
export const getContato = () =>
   getJson<ContatoTexto | null>("/api/contato", null);

export const getEquipeMembros = () =>
   getJson<EquipeMembro[]>("/api/equipe/membros", []);
export const getInformacaoItens = () =>
   getJson<InformacaoItem[]>("/api/informacoes/itens", []);
export const getCiptaEtapas = () =>
   getJson<CiptaEtapa[]>("/api/ciptea/etapas", []);
export const getCiptaBeneficios = () =>
   getJson<CiptaBeneficio[]>("/api/ciptea/beneficios", []);
export const getCiptaLinks = () =>
   getJson<CiptaLink[]>("/api/ciptea/links", []);
export const getParceiros = () => getJson<Parceiro[]>("/api/parceiros", []);
export const getContatoInfos = () =>
   getJson<ContatoInfo[]>("/api/contato/infos", []);
