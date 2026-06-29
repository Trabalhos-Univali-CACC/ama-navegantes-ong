"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { login, logout, getToken } from "@/lib/adminApi";
import { EditorTexto } from "@/components/admin/EditorTexto";
import { EditorLista } from "@/components/admin/EditorLista";
import { EditorImagens } from "@/components/admin/EditorImagens";
import { EditorMensagens } from "@/components/admin/EditorMensagens";

// Tela de login (aparece quando ainda não há token)
function TelaLogin({ aoEntrar }: { aoEntrar: () => void }) {
   const [usuario, setUsuario] = useState("");
   const [senha, setSenha] = useState("");
   const [erro, setErro] = useState("");
   const [carregando, setCarregando] = useState(false);

   async function entrar(e: React.FormEvent) {
      e.preventDefault();
      setErro("");
      setCarregando(true);
      const ok = await login(usuario, senha);
      setCarregando(false);
      if (ok) {
         aoEntrar();
      } else {
         setErro("Usuário ou senha inválidos.");
      }
   }

   return (
      <div className="flex min-h-screen items-center justify-center bg-secondary/30 px-4">
         <form
            onSubmit={entrar}
            className="w-full max-w-sm rounded-2xl border border-border bg-card p-8 shadow-sm"
         >
            <h1 className="mb-1 font-serif text-2xl font-bold text-foreground">Painel da AMA</h1>
            <p className="mb-6 text-sm text-muted-foreground">Entre para editar o conteúdo do site.</p>
            <div className="space-y-4">
               <div>
                  <label className="mb-1 block text-sm font-medium text-foreground">Usuário</label>
                  <Input value={usuario} onChange={(e) => setUsuario(e.target.value)} className="h-11" />
               </div>
               <div>
                  <label className="mb-1 block text-sm font-medium text-foreground">Senha</label>
                  <Input
                     type="password"
                     value={senha}
                     onChange={(e) => setSenha(e.target.value)}
                     className="h-11"
                  />
               </div>
               {erro && <p className="text-sm font-medium text-destructive">{erro}</p>}
               <Button type="submit" disabled={carregando} className="w-full">
                  {carregando ? "Entrando..." : "Entrar"}
               </Button>
            </div>
         </form>
      </div>
   );
}

// Título de um grupo de seções
function Grupo({ titulo }: { titulo: string }) {
   return (
      <h2 className="mt-10 mb-2 border-b border-border pb-2 font-serif text-xl font-bold text-primary">
         {titulo}
      </h2>
   );
}

export default function AdminPage() {
   const [logado, setLogado] = useState(false);
   const [pronto, setPronto] = useState(false);

   // Ao abrir a página, verifica se já existe um token salvo
   useEffect(() => {
      setLogado(!!getToken());
      setPronto(true);
   }, []);

   if (!pronto) return null;
   if (!logado) return <TelaLogin aoEntrar={() => setLogado(true)} />;

   return (
      <div className="min-h-screen bg-secondary/30">
         {/* Barra do topo */}
         <div className="sticky top-0 z-10 border-b border-border bg-card">
            <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4">
               <div>
                  <h1 className="font-serif text-xl font-bold text-foreground">Painel da AMA Navegantes</h1>
                  <p className="text-xs text-muted-foreground">
                     O que você editar aqui aparece na página principal.
                  </p>
               </div>
               <div className="flex items-center gap-3">
                  <a href="/" target="_blank" className="text-sm font-medium text-primary hover:underline">
                     Ver site
                  </a>
                  <Button
                     variant="outline"
                     size="sm"
                     onClick={() => {
                        logout();
                        setLogado(false);
                     }}
                  >
                     Sair
                  </Button>
               </div>
            </div>
         </div>

         <div className="mx-auto max-w-4xl space-y-6 px-4 py-8">
            <Grupo titulo="Banner (topo)" />
            <EditorTexto
               titulo="Textos do banner"
               rota="/api/banner"
               campos={[
                  { chave: "rotulo", rotulo: "Rótulo" },
                  { chave: "titulo", rotulo: "Título" },
                  { chave: "paragrafo", rotulo: "Parágrafo", textarea: true },
               ]}
            />

            <Grupo titulo="Quem Somos" />
            <EditorTexto
               titulo="Textos de Quem Somos"
               rota="/api/sobre"
               campos={[
                  { chave: "rotulo", rotulo: "Rótulo" },
                  { chave: "titulo", rotulo: "Título" },
                  { chave: "paragrafo", rotulo: "Parágrafo", textarea: true },
                  { chave: "missao", rotulo: "Missão", textarea: true },
                  { chave: "visao", rotulo: "Visão", textarea: true },
               ]}
            />

            <Grupo titulo="Equipe" />
            <EditorTexto
               titulo="Textos da seção Equipe"
               rota="/api/equipe"
               campos={[
                  { chave: "rotulo", rotulo: "Rótulo" },
                  { chave: "titulo", rotulo: "Título" },
                  { chave: "paragrafo", rotulo: "Parágrafo", textarea: true },
               ]}
            />
            <EditorLista
               titulo="Membros da equipe"
               rota="/api/equipe/membros"
               campos={[
                  { chave: "nome", rotulo: "Nome" },
                  { chave: "cargo", rotulo: "Cargo" },
                  { chave: "descricao", rotulo: "Descrição", textarea: true },
                  { chave: "imagemIdentificador", rotulo: "Identificador da imagem (opcional)" },
               ]}
            />

            <Grupo titulo="Informações" />
            <EditorTexto
               titulo="Textos da seção Informações"
               rota="/api/informacoes"
               campos={[
                  { chave: "rotulo", rotulo: "Rótulo" },
                  { chave: "titulo", rotulo: "Título" },
                  { chave: "paragrafo", rotulo: "Parágrafo", textarea: true },
                  { chave: "ajudaTitulo", rotulo: "Título da caixa de ajuda" },
                  { chave: "ajudaTexto", rotulo: "Texto da caixa de ajuda", textarea: true },
                  { chave: "ajudaTelefone", rotulo: "Telefone de ajuda" },
               ]}
            />
            <EditorLista
               titulo="Itens de informação / FAQ"
               rota="/api/informacoes/itens"
               campos={[
                  { chave: "titulo", rotulo: "Título" },
                  { chave: "conteudo", rotulo: "Conteúdo", textarea: true },
               ]}
            />

            <Grupo titulo="Carteirinha CIPTEA" />
            <EditorTexto
               titulo="Textos da seção CIPTEA"
               rota="/api/ciptea"
               campos={[
                  { chave: "rotulo", rotulo: "Rótulo" },
                  { chave: "titulo", rotulo: "Título" },
                  { chave: "paragrafo", rotulo: "Parágrafo", textarea: true },
                  { chave: "importanteTitulo", rotulo: "Título da caixa 'Importante'" },
                  { chave: "importanteTexto", rotulo: "Texto da caixa 'Importante'", textarea: true },
                  { chave: "botaoTexto", rotulo: "Texto do botão" },
               ]}
            />
            <EditorLista
               titulo="Etapas (Como Solicitar)"
               rota="/api/ciptea/etapas"
               campos={[
                  { chave: "numero", rotulo: "Número (ex: 01)" },
                  { chave: "titulo", rotulo: "Título" },
                  { chave: "descricao", rotulo: "Descrição", textarea: true },
               ]}
            />
            <EditorLista
               titulo="Links úteis"
               rota="/api/ciptea/links"
               campos={[
                  { chave: "titulo", rotulo: "Título" },
                  { chave: "url", rotulo: "Link (URL)" },
                  { chave: "descricao", rotulo: "Descrição", textarea: true },
                  { chave: "oficial", rotulo: "É oficial?", checkbox: true },
               ]}
            />
            <EditorLista
               titulo="Benefícios"
               rota="/api/ciptea/beneficios"
               campos={[{ chave: "texto", rotulo: "Benefício" }]}
            />

            <Grupo titulo="Parcerias e Convênios" />
            <EditorTexto
               titulo="Textos da seção Parcerias"
               rota="/api/convenios"
               campos={[
                  { chave: "rotulo", rotulo: "Rótulo" },
                  { chave: "titulo", rotulo: "Título" },
                  { chave: "paragrafo", rotulo: "Parágrafo", textarea: true },
               ]}
            />
            <EditorLista
               titulo="Parceiros"
               rota="/api/parceiros"
               campos={[
                  { chave: "nome", rotulo: "Nome" },
                  { chave: "descricao", rotulo: "Descrição", textarea: true },
                  { chave: "logoIdentificador", rotulo: "Identificador do logo (opcional)" },
               ]}
            />

            <Grupo titulo="Doações" />
            <EditorTexto
               titulo="Textos da seção Doações"
               rota="/api/doacoes"
               campos={[
                  { chave: "rotulo", rotulo: "Rótulo" },
                  { chave: "titulo", rotulo: "Título" },
                  { chave: "paragrafo", rotulo: "Parágrafo", textarea: true },
                  { chave: "pixTitulo", rotulo: "Título do card PIX" },
                  { chave: "pixDescricao", rotulo: "Descrição do PIX", textarea: true },
                  { chave: "roupasTitulo", rotulo: "Título do card de roupas" },
                  { chave: "roupasDescricao", rotulo: "Descrição das roupas", textarea: true },
                  { chave: "roupasBotao", rotulo: "Texto do botão de roupas" },
               ]}
            />

            <Grupo titulo="Contato" />
            <EditorTexto
               titulo="Textos da seção Contato"
               rota="/api/contato"
               campos={[
                  { chave: "rotulo", rotulo: "Rótulo" },
                  { chave: "titulo", rotulo: "Título" },
                  { chave: "paragrafo", rotulo: "Parágrafo", textarea: true },
                  { chave: "formTitulo", rotulo: "Título do formulário" },
               ]}
            />
            <EditorLista
               titulo="Dados de contato"
               rota="/api/contato/infos"
               campos={[
                  { chave: "rotulo", rotulo: "Rótulo (ex: Telefone)" },
                  { chave: "valor", rotulo: "Valor (ex: (47) 3333-3333)" },
                  { chave: "link", rotulo: "Link (opcional, ex: tel:+5547...)" },
               ]}
            />

            <Grupo titulo="Imagens" />
            <EditorImagens />

            <Grupo titulo="Mensagens recebidas" />
            <EditorMensagens />
         </div>
      </div>
   );
}
