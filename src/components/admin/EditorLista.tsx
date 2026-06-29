"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { API_URL } from "@/lib/api";
import { postJson, putJson, del } from "@/lib/adminApi";

export interface CampoLista {
   chave: string;
   rotulo: string;
   textarea?: boolean;
   checkbox?: boolean;
}

// Editor de uma LISTA (vários itens). Faz criar / editar / remover.
export function EditorLista({
   titulo,
   rota,
   campos,
}: {
   titulo: string;
   rota: string;
   campos: CampoLista[];
}) {
   const [itens, setItens] = useState<Record<string, any>[]>([]);
   const [novo, setNovo] = useState<Record<string, any>>({});
   const [status, setStatus] = useState("");

   const carregar = useCallback(() => {
      fetch(`${API_URL}${rota}`)
         .then((r) => (r.ok ? r.json() : []))
         .then(setItens)
         .catch(() => { });
   }, [rota]);

   useEffect(() => carregar(), [carregar]);

   function alterarItem(index: number, chave: string, valor: any) {
      const copia = [...itens];
      copia[index] = { ...copia[index], [chave]: valor };
      setItens(copia);
   }

   async function salvarItem(item: Record<string, any>) {
      try {
         await putJson(`${rota}/${item.id}`, item);
         setStatus("Item salvo!");
      } catch {
         setStatus("Erro ao salvar.");
      }
   }

   async function removerItem(id: number) {
      if (!window.confirm("Remover este item?")) return;
      try {
         await del(`${rota}/${id}`);
         carregar();
      } catch {
         setStatus("Erro ao remover.");
      }
   }

   async function adicionar() {
      try {
         await postJson(rota, novo);
         setNovo({});
         carregar();
      } catch {
         setStatus("Erro ao adicionar.");
      }
   }

   // Desenha o campo certo (input, textarea ou checkbox).
   // É uma função normal (não um componente) para o input não perder o foco
   // enquanto você digita.
   function renderCampo(
      valores: Record<string, any>,
      onChange: (chave: string, valor: any) => void,
      campo: CampoLista,
   ) {
      if (campo.checkbox) {
         return (
            <label className="flex items-center gap-2 text-sm text-foreground">
               <input
                  type="checkbox"
                  checked={!!valores[campo.chave]}
                  onChange={(e) => onChange(campo.chave, e.target.checked)}
               />
               {campo.rotulo}
            </label>
         );
      }
      if (campo.textarea) {
         return (
            <Textarea
               placeholder={campo.rotulo}
               value={valores[campo.chave] ?? ""}
               onChange={(e) => onChange(campo.chave, e.target.value)}
            />
         );
      }
      return (
         <Input
            placeholder={campo.rotulo}
            value={valores[campo.chave] ?? ""}
            onChange={(e) => onChange(campo.chave, e.target.value)}
            className="h-11"
         />
      );
   }

   return (
      <div className="rounded-2xl border border-border bg-card p-6">
         <h3 className="mb-4 font-serif text-lg font-bold text-foreground">{titulo}</h3>
         {status && <p className="mb-3 text-sm font-medium text-primary">{status}</p>}

         <div className="space-y-4">
            {itens.map((item, index) => (
               <div key={item.id} className="space-y-2 rounded-xl border border-border p-4">
                  {campos.map((campo) => (
                     <div key={campo.chave}>
                        {renderCampo(item, (c, v) => alterarItem(index, c, v), campo)}
                     </div>
                  ))}
                  <div className="flex gap-2 pt-1">
                     <Button size="sm" onClick={() => salvarItem(item)}>Salvar</Button>
                     <Button size="sm" variant="destructive" onClick={() => removerItem(item.id)}>
                        Remover
                     </Button>
                  </div>
               </div>
            ))}
         </div>

         <div className="mt-6 space-y-2 rounded-xl border border-dashed border-border bg-secondary/30 p-4">
            <p className="text-sm font-semibold text-foreground">Adicionar novo</p>
            {campos.map((campo) => (
               <div key={campo.chave}>
                  {renderCampo(novo, (c, v) => setNovo({ ...novo, [c]: v }), campo)}
               </div>
            ))}
            <Button size="sm" onClick={adicionar}>Adicionar</Button>
         </div>
      </div>
   );
}
