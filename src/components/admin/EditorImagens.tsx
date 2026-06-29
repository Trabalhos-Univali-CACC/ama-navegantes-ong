"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { imageUrl } from "@/lib/api";
import { uploadImagem } from "@/lib/adminApi";

// Imagens que o site usa. Para adicionar outra, basta incluir aqui o
// identificador e um nome amigável.
const imagens = [
   { identificador: "logo", nome: "Logo do site" },
   { identificador: "ciptea_card", nome: "Cartão CIPTEA" },
   { identificador: "parceiro_navegantes", nome: "Logo - Navegantes" },
   { identificador: "parceiro_fcee", nome: "Logo - FCEE" },
   { identificador: "parceiro_gente_especial", nome: "Logo - Gente Especial" },
   { identificador: "parceiro_sc", nome: "Logo - Santa Catarina" },
];

function ItemImagem({ id, nome }: { id: string; nome: string }) {
   const [versao, setVersao] = useState(0); // muda a URL para forçar recarregar a imagem
   const [arquivo, setArquivo] = useState<File | null>(null);
   const [status, setStatus] = useState<"" | "enviando" | "ok" | "erro">("");

   async function enviar() {
      if (!arquivo) return;
      setStatus("enviando");
      try {
         await uploadImagem(id, arquivo);
         setVersao((v) => v + 1);
         setArquivo(null);
         setStatus("ok");
      } catch {
         setStatus("erro");
      }
   }

   return (
      <div className="flex flex-wrap items-center gap-4 rounded-xl border border-border p-4">
         {/* eslint-disable-next-line @next/next/no-img-element */}
         <img
            src={`${imageUrl(id)}?v=${versao}`}
            alt={nome}
            className="h-16 w-16 rounded-lg bg-secondary object-contain"
         />
         <div className="flex-1">
            <p className="font-medium text-foreground">{nome}</p>
            <p className="text-xs text-muted-foreground">{id}</p>
            <input
               type="file"
               accept="image/*"
               onChange={(e) => setArquivo(e.target.files?.[0] ?? null)}
               className="mt-2 text-sm"
            />
         </div>
         <div className="flex items-center gap-2">
            <Button size="sm" onClick={enviar} disabled={!arquivo || status === "enviando"}>
               {status === "enviando" ? "Enviando..." : "Trocar"}
            </Button>
            {status === "ok" && <span className="text-sm text-green-600">Trocada!</span>}
            {status === "erro" && <span className="text-sm text-destructive">Erro</span>}
         </div>
      </div>
   );
}

export function EditorImagens() {
   return (
      <div className="rounded-2xl border border-border bg-card p-6">
         <h3 className="mb-4 font-serif text-lg font-bold text-foreground">Imagens</h3>
         <div className="space-y-3">
            {imagens.map((img) => (
               <ItemImagem key={img.identificador} id={img.identificador} nome={img.nome} />
            ))}
         </div>
      </div>
   );
}
