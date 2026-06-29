"use client";

import { useState } from "react";
import { InformationCard } from "./ui/information-card";
import { Clock, MapPin, FileText, Calendar, HelpCircle, Phone } from "lucide-react";
import type { InformacoesTexto, InformacaoItem } from "@/lib/api";

// Ícones usados nos cards, na ordem em que os itens aparecem.
const icones = [Clock, MapPin, FileText, Calendar, HelpCircle];

export function Information({
   texto,
   itens,
}: {
   texto: InformacoesTexto | null;
   itens: InformacaoItem[];
}) {
   const [openIndex, setOpenIndex] = useState<number | null>(0);

   return (
      <section id="informacoes" className="relative overflow-hidden bg-secondary/30 py-20 md:py-28">
         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-8 lg:flex-row lg:gap-16">
               <div>
                  <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
                     {texto?.rotulo}
                  </span>
                  <h2 className="mb-6 font-serif text-3xl font-bold text-foreground sm:text-4xl xl:text-5xl">
                     <span className="text-balance">{texto?.titulo}</span>
                  </h2>
                  <p className="mb-8 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                     {texto?.paragrafo}
                  </p>

                  <div className="rounded-2xl bg-primary p-6 text-primary-foreground">
                     <h3 className="mb-3 font-semibold">{texto?.ajudaTitulo}</h3>
                     <p className="mb-4 text-sm opacity-90">
                        {texto?.ajudaTexto}
                     </p>
                     <a
                        href={`tel:${texto?.ajudaTelefone ?? ""}`}
                        className="inline-flex items-center gap-2 rounded-lg bg-white/20 px-4 py-2 text-sm font-medium transition-colors hover:bg-white/30"
                     >
                        <Phone className="h-4 w-4" />
                        {texto?.ajudaTelefone}
                     </a>
                  </div>
               </div>

               <div className="space-y-3">
                  {itens.map((item, index) => (
                     <InformationCard
                        key={item.id}
                        item={{
                           icon: icones[index % icones.length],
                           title: item.titulo,
                           content: item.conteudo,
                        }}
                        index={index}
                        isOpen={openIndex === index}
                        onToggle={() =>
                           setOpenIndex(openIndex === index ? null : index)
                        }
                     />
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
}
