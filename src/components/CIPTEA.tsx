"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ExternalLink, AlertCircle, CheckCircle2 } from "lucide-react";

import card from "@/../public/imgs/nfsttn-Photoroom.png"

const steps = [
   { number: "01", title: "Documentação", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.", color: "bg-chart-1" },
   { number: "02", title: "Cadastro Online", description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.", color: "bg-chart-2" },
   { number: "03", title: "Análise", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.", color: "bg-chart-3" },
   { number: "04", title: "Emissão", description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.", color: "bg-chart-4" },
];

const links = [
   {
      title: "Portal do Governo SC",
      url: "#", description: "Lorem ipsum dolor sit amet consectetur.",
      official: true
   },
   {
      title: "CIPTEA Nacional",
      url: "#",
      description: "Ut enim ad minim veniam quis nostrud.",
      official: true
   },
   {
      title: "Guia de Documentos",
      url: "#", description: "Duis aute irure dolor in reprehenderit.",
      official: false
   },
];

export function CIPTEA() {
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
                  Carteirinha do Autista
               </span>
               <h2 className="mb-6 font-serif text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
                  <span className="text-balance">
                     CIPTEA - Carteira de Identificação
                  </span>
               </h2>
               <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                  ad minim veniam.
               </p>
            </div>

            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
               <div>
                  <div className="px-16 pb-4">
                     <Image alt="" src={card} width={0} height={0} className="select-none" />
                  </div>

                  <h3 className="mb-6 font-serif text-xl font-bold text-foreground">
                     Como Solicitar
                  </h3>
                  <div className="space-y-4">
                     {steps.map((step) => (
                        <div key={step.title} className="flex gap-4">
                           <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${step.color} text-sm font-bold text-white`}>
                              {step.number}
                           </div>
                           <div>
                              <h4 className="font-medium text-foreground">{step.title}</h4>
                              <p className="text-sm text-muted-foreground">
                                 {step.description}
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
                        <p className="mb-1 font-medium text-foreground">Importante</p>
                        <p className="text-sm text-muted-foreground">
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                           do eiusmod tempor incididunt ut labore.
                        </p>
                     </div>
                  </div>
                  <h3 className="mb-6 font-serif text-xl font-bold text-foreground">
                     Links Úteis
                  </h3>
                  <div className="mb-8 space-y-3">
                     {links.map((link) => (
                        <a key={link.title} href={link.url} target="_blank"
                           className="flex items-center justify-between rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/30 hover:bg-secondary/50">
                           <div className="flex items-center gap-3">
                              {link.official && (
                                 <CheckCircle2 className="h-5 w-5 text-primary" />
                              )}
                              <div>
                                 <p className="font-medium text-foreground">{link.title}</p>
                                 <p className="text-sm text-muted-foreground">
                                    {link.description}
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
                        {[
                           "Atendimento prioritário em estabelecimentos",
                           "Identificação oficial do TEA",
                           "Acesso a direitos específicos",
                           "Facilita comunicação em emergências",
                        ].map((benefit) => (
                           <li key={benefit} className="flex items-start gap-2">
                              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                              <span className="text-sm text-muted-foreground">
                                 {benefit}
                              </span>
                           </li>
                        ))}
                     </ul>
                  </div>
                  <div className="mt-6">
                     <Button size="lg" className="w-full gap-2 bg-primary hover:bg-primary/90">
                        Solicitar Carteirinha
                        <ExternalLink className="h-4 w-4" />
                     </Button>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
