"use client";

import { Building2, Handshake } from "lucide-react";
import { imageUrl, type ConveniosTexto, type Parceiro } from "@/lib/api";

const badgeColors = ["bg-chart-1", "bg-chart-2", "bg-chart-3", "bg-chart-4"];

export function Convenios({
   texto,
   parceiros,
}: {
   texto: ConveniosTexto | null;
   parceiros: Parceiro[];
}) {
   return (
      <section id="parcerias" className="relative overflow-hidden bg-secondary/30 py-20 md:py-28">
         <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-chart-3/10 blur-3xl" />
            <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-chart-1/10 blur-3xl" />
         </div>

         <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-16 max-w-3xl text-center">
               <span className="mb-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary">
                  <Handshake className="h-4 w-4" />
                  {texto?.rotulo}
               </span>
               <h2 className="mb-6 font-serif text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
                  <span className="text-balance">{texto?.titulo}</span>
               </h2>
               <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {texto?.paragrafo}
               </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
               {parceiros.map((parceiro, index) => (
                  <div
                     key={parceiro.id}
                     className="group flex flex-col items-center rounded-2xl bg-card p-6 text-center shadow-sm ring-1 ring-border/50 transition-all hover:shadow-xl"
                  >
                     <div className="mb-3 flex w-[70%] items-center justify-center overflow-hidden">
                        {parceiro.logoIdentificador ? (
                           // eslint-disable-next-line @next/next/no-img-element
                           <img
                              src={imageUrl(parceiro.logoIdentificador)}
                              alt={parceiro.nome}
                              className="h-full w-full object-contain p-2"
                           />
                        ) : (
                           <div className={`flex h-full w-full items-center justify-center ${badgeColors[index % badgeColors.length]} text-white`}>
                              <Building2 className="h-8 w-8" />
                           </div>
                        )}
                     </div>
                     <h3 className="mb-2 font-semibold text-foreground">
                        {parceiro.nome}
                     </h3>
                     <p className="text-sm leading-relaxed text-muted-foreground">
                        {parceiro.descricao}
                     </p>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}
