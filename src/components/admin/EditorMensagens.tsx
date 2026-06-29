"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { getAuth, del } from "@/lib/adminApi";

interface Mensagem {
   id: number;
   nome: string;
   email: string;
   telefone: string;
   assunto: string;
   conteudo: string;
   dataEnvio: string;
}

export function EditorMensagens() {
   const [mensagens, setMensagens] = useState<Mensagem[]>([]);
   const [erro, setErro] = useState("");

   function carregar() {
      getAuth<Mensagem[]>("/api/mensagens")
         .then(setMensagens)
         .catch(() => setErro("Não foi possível carregar as mensagens."));
   }
   useEffect(() => carregar(), []);

   async function remover(id: number) {
      if (!window.confirm("Apagar esta mensagem?")) return;
      try {
         await del(`/api/mensagens/${id}`);
         carregar();
      } catch {
         setErro("Erro ao apagar.");
      }
   }

   return (
      <div className="rounded-2xl border border-border bg-card p-6">
         <h3 className="mb-4 font-serif text-lg font-bold text-foreground">
            Mensagens recebidas ({mensagens.length})
         </h3>
         {erro && <p className="mb-3 text-sm text-destructive">{erro}</p>}
         {mensagens.length === 0 ? (
            <p className="text-sm text-muted-foreground">Nenhuma mensagem por enquanto.</p>
         ) : (
            <div className="space-y-3">
               {mensagens.map((m) => (
                  <div key={m.id} className="rounded-xl border border-border p-4">
                     <div className="flex items-start justify-between gap-4">
                        <div>
                           <p className="font-semibold text-foreground">{m.assunto}</p>
                           <p className="text-sm text-muted-foreground">
                              {m.nome} — {m.email} — {m.telefone}
                           </p>
                        </div>
                        <Button size="sm" variant="destructive" onClick={() => remover(m.id)}>
                           Apagar
                        </Button>
                     </div>
                     <p className="mt-2 text-sm text-foreground">{m.conteudo}</p>
                     <p className="mt-2 text-xs text-muted-foreground">
                        {new Date(m.dataEnvio).toLocaleString("pt-BR")}
                     </p>
                  </div>
               ))}
            </div>
         )}
      </div>
   );
}
