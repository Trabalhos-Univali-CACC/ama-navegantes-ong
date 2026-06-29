"use client";

import { Button } from "@/components/ui/button";
import { ExternalLink, AlertCircle, CheckCircle2 } from "lucide-react";
import {
   imageUrl,
   type CiptaTexto,
   type CiptaEtapa,
   type CiptaLink,
   type CiptaBeneficio,
} from "@/lib/api";

// Cores dos números das etapas, na ordem em que aparecem.
const cores = ["bg-chart-1", "bg-chart-2", "bg-chart-3", "bg-chart-4"];

export function CIPTEA({
   texto,
   etapas,
   links,
   beneficios,
}: {
   texto: CiptaTexto | null;
   etapas: CiptaEtapa[];
   links: CiptaLink[];
   beneficios: CiptaBeneficio[];
}) {
   return (
      <section id="carteirinha" className="relative overflow-hidden bg-background py-20 md:py-28">
         <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-chart-1/10 blur-3xl" />
            <div className="absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-chart-2/10 blur-3xl" />
            <div className="absolute right-1/4 top-1/2 h-64 w-64 rounded-full bg-chart-4/5 blur-3xl" />
         </div>

         <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-16 max-w-3xl text-center">
               <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
                  {texto?.rotulo}
               </span>
               <h2 className="mb-6 font-serif text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
                  <span className="text-balance">{texto?.titulo}</span>
               </h2>
               <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {texto?.paragrafo}
               </p>
            </div>

            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
               <div>
                  <div className="px-16 pb-4">
                     {/* A imagem do cartão vem do backend (identificador "ciptea_card") */}
                     {/* eslint-disable-next-line @next/next/no-img-element */}
                     <img alt="" src={imageUrl("ciptea_card")} className="w-full select-none" />
                  </div>

                  <h3 className="mb-6 font-serif text-xl font-bold text-foreground">
                     Como Solicitar
                  </h3>
                  <div className="space-y-4">
                     {etapas.map((step, index) => (
                        <div key={step.id} className="flex gap-4">
                           <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${cores[index % cores.length]} text-sm font-bold text-white`}>
                              {step.numero}
                           </div>
                           <div>
                              <h4 className="font-medium text-foreground">{step.titulo}</h4>
                              <p className="text-sm text-muted-foreground">
                                 {step.descricao}
                              </p>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
               <div>
                  <div className="mb-8 flex gap-4 rounded-xl border border-chart-1/30 bg-chart-1/10 p-4">
                     <AlertCircle className="h-5 w-5 shrink-0 text-chart-1" />
                     <div>
                        <p className="mb-1 font-medium text-foreground">{texto?.importanteTitulo}</p>
                        <p className="text-sm text-muted-foreground">
                           {texto?.importanteTexto}
                        </p>
                     </div>
                  </div>
                  <h3 className="mb-6 font-serif text-xl font-bold text-foreground">
                     Links Úteis
                  </h3>
                  <div className="mb-8 space-y-3">
                     {links.map((link) => (
                        <a key={link.id} href={link.url} target="_blank"
                           className="flex items-center justify-between rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/30 hover:bg-secondary/50">
                           <div className="flex items-center gap-3">
                              {link.oficial && (
                                 <CheckCircle2 className="h-5 w-5 text-primary" />
                              )}
                              <div>
                                 <p className="font-medium text-foreground">{link.titulo}</p>
                                 <p className="text-sm text-muted-foreground">
                                    {link.descricao}
                                 </p>
                              </div>
                           </div>
                           <ExternalLink className="h-4 w-4 text-muted-foreground" />
                        </a>
                     ))}
                  </div>
                  <div className="rounded-xl bg-secondary/50 p-6">
                     <h3 className="mb-4 font-semibold text-foreground">
                        Benefícios da Carteirinha
                     </h3>
                     <ul className="space-y-3">
                        {beneficios.map((beneficio) => (
                           <li key={beneficio.id} className="flex items-start gap-2">
                              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                              <span className="text-sm text-muted-foreground">
                                 {beneficio.texto}
                              </span>
                           </li>
                        ))}
                     </ul>
                  </div>
                  <div className="mt-6">
                     <Button size="lg" className="w-full gap-2 bg-primary hover:bg-primary/90">
                        {texto?.botaoTexto}
                        <ExternalLink className="h-4 w-4" />
                     </Button>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
