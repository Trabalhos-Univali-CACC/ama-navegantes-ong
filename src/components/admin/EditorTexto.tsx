"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { API_URL } from "@/lib/api";
import { putJson } from "@/lib/adminApi";

export interface CampoConfig {
   chave: string;
   rotulo: string;
   textarea?: boolean;
}

// Editor de uma seção de TEXTO (uma linha só). GET e PUT usam a mesma rota.
export function EditorTexto({
   titulo,
   rota,
   campos,
}: {
   titulo: string;
   rota: string;
   campos: CampoConfig[];
}) {
   const [dados, setDados] = useState<Record<string, string>>({});
   const [status, setStatus] = useState<"" | "salvando" | "ok" | "erro">("");

   useEffect(() => {
      fetch(`${API_URL}${rota}`)
         .then((r) => (r.ok ? r.json() : {}))
         .then((d) => setDados(d ?? {}))
         .catch(() => { });
   }, [rota]);

   async function salvar() {
      setStatus("salvando");
      try {
         const salvo = await putJson<Record<string, string>>(rota, dados);
         setDados(salvo);
         setStatus("ok");
      } catch {
         setStatus("erro");
      }
   }

   return (
      <div className="rounded-2xl border border-border bg-card p-6">
         <h3 className="mb-4 font-serif text-lg font-bold text-foreground">{titulo}</h3>
         <div className="space-y-4">
            {campos.map((campo) => (
               <div key={campo.chave}>
                  <label className="mb-1 block text-sm font-medium text-foreground">
                     {campo.rotulo}
                  </label>
                  {campo.textarea ? (
                     <Textarea
                        value={dados[campo.chave] ?? ""}
                        onChange={(e) => setDados({ ...dados, [campo.chave]: e.target.value })}
                        className="min-h-[90px]"
                     />
                  ) : (
                     <Input
                        value={dados[campo.chave] ?? ""}
                        onChange={(e) => setDados({ ...dados, [campo.chave]: e.target.value })}
                        className="h-11"
                     />
                  )}
               </div>
            ))}
         </div>
         <div className="mt-4 flex items-center gap-3">
            <Button onClick={salvar} disabled={status === "salvando"}>
               {status === "salvando" ? "Salvando..." : "Salvar"}
            </Button>
            {status === "ok" && <span className="text-sm font-medium text-green-600">Salvo!</span>}
            {status === "erro" && <span className="text-sm font-medium text-destructive">Erro ao salvar.</span>}
         </div>
      </div>
   );
}
