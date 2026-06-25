"use client";

import Image, { type StaticImageData } from "next/image";
import { Building2, Handshake } from "lucide-react";

import navegantes from "@/../assets/logos/navegantes.png";
import fcee from "@/../assets/logos/fcee.png";
import genteEspecial from "@/../assets/logos/gente_especial.png";
import sc from "@/../assets/logos/sc.png";

const badgeColors = ["bg-chart-1", "bg-chart-2", "bg-chart-3", "bg-chart-4"];

const parceiros: { name: string; description: string; logo: StaticImageData | null }[] = [
   {
      name: "Secretaria Municipal de Educação",
      description: "Parceria direta há 8 anos na promoção do desenvolvimento integral dos educandos.",
      logo: navegantes,
   },
   {
      name: "Secretaria Municipal de Saúde",
      description: "Encaminhamento e regulação dos usuários para os atendimentos especializados.",
      logo: navegantes,
   },
   {
      name: "Fundação Catarinense de Educação Especial",
      description: "Parceria voltada à educação especial e à inclusão das pessoas com TEA.",
      logo: fcee,
   },
   {
      name: "Programa SC + Inclusiva",
      description: "Programa estadual de fortalecimento das ações de inclusão social e educacional.",
      logo: sc,
   },
   {
      name: "Programa Gente Especial",
      description: "Programa voltado ao atendimento e à garantia de direitos da pessoa com deficiência.",
      logo: genteEspecial,
   },
   {
      name: "Governo do Estado de Santa Catarina",
      description: "Execução de projetos financiados pelo Governo do Estado de Santa Catarina.",
      logo: sc,
   },
];

export function Convenios() {
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
                  Parcerias e Convênios
               </span>
               <h2 className="mb-6 font-serif text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
                  <span className="text-balance">
                     Quem caminha junto com a AMA
                  </span>
               </h2>
               <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Ao longo de mais de dez anos, a AMA Navegantes construiu parcerias
                  públicas e participou de programas governamentais voltados à educação
                  especial e à inclusão social das pessoas com TEA.
               </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
               {parceiros.map((parceiro, index) => (
                  <div
                     key={parceiro.name}
                     className="group flex flex-col items-center rounded-2xl bg-card p-6 text-center shadow-sm ring-1 ring-border/50 transition-all hover:shadow-xl"
                  >
                     <div className="mb-3 flex w-[70%] items-center justify-center overflow-hidden">
                        {parceiro.logo ? (
                           <Image
                              src={parceiro.logo}
                              alt={parceiro.name}
                              width={0}
                              height={0}
                              className="h-full w-full object-contain p-2"
                           />
                        ) : (
                           <div className={`flex h-full w-full items-center justify-center ${badgeColors[index % badgeColors.length]} text-white`}>
                              <Building2 className="h-8 w-8" />
                           </div>
                        )}
                     </div>
                     <h3 className="mb-2 font-semibold text-foreground">
                        {parceiro.name}
                     </h3>
                     <p className="text-sm leading-relaxed text-muted-foreground">
                        {parceiro.description}
                     </p>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}
