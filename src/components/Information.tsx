"use client";

import { useState } from "react";
import { InformationCard } from "./ui/information-card";
import { Clock, MapPin, FileText, Calendar, HelpCircle, Phone } from "lucide-react";

const infoItems = [
   {
      icon: Clock,
      title: "Horário de Funcionamento",
      content:
         "Os atendimentos são realizados de segunda a sexta-feira na sede da instituição. Entre em contato para confirmar os horários disponíveis. [Horário a confirmar]",
   },
   {
      icon: MapPin,
      title: "Localização",
      content:
         "Av. Prefeito José Juvenal Mafra, nº 98 – Centro – Navegantes/SC – CEP 88370-094. A sede dispõe de estrutura acessível, salas de atendimento, espaços pedagógicos e áreas de convivência.",
   },
   {
      icon: FileText,
      title: "Documentação Necessária",
      content:
         "No acolhimento institucional são realizados o cadastro, a análise documental e a entrevista inicial com a família. Leve os documentos pessoais, o comprovante de residência e o laudo ou relatório médico.",
   },
   {
      icon: Calendar,
      title: "Agendamentos e Ingresso",
      content:
         "O ingresso dos usuários ocorre mediante encaminhamento pelo setor de regulação da Secretaria Municipal de Saúde, seguido de acolhimento institucional, cadastro e entrevista com a família.",
   },
   {
      icon: HelpCircle,
      title: "Dúvidas Frequentes",
      content:
         "Tem dúvidas sobre os atendimentos, o processo de ingresso ou os serviços oferecidos? Fale com a nossa equipe pelos canais de atendimento da instituição.",
   },
];

export function Information() {
   const [openIndex, setOpenIndex] = useState<number | null>(0);

   return (
      <section id="informacoes" className="relative overflow-hidden bg-secondary/30 py-20 md:py-28">
         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-8 lg:flex-row lg:gap-16">
               <div>
                  <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
                     Informações
                  </span>
                  <h2 className="mb-6 font-serif text-3xl font-bold text-foreground sm:text-4xl xl:text-5xl">
                     <span className="text-balance">
                        Informações importantes da AMA
                     </span>
                  </h2>
                  <p className="mb-8 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                     Reunimos aqui as principais informações sobre o funcionamento, a
                     localização e o ingresso na AMA Navegantes. Se precisar de
                     orientação, nossa equipe está à disposição para ajudar.
                  </p>

                  <div className="rounded-2xl bg-primary p-6 text-primary-foreground">
                     <h3 className="mb-3 font-semibold">Precisa de ajuda imediata?</h3>
                     <p className="mb-4 text-sm opacity-90">
                        Fale com a nossa equipe e receba orientação sobre atendimentos,
                        ingresso e serviços para pessoas com TEA e suas famílias.
                     </p>
                     <a
                        href="tel:+5547999999999"
                        className="inline-flex items-center gap-2 rounded-lg bg-white/20 px-4 py-2 text-sm font-medium transition-colors hover:bg-white/30"
                     >
                        <Phone className="h-4 w-4" />
                        (47) 99999-9999
                     </a>
                  </div>
               </div>

               <div className="space-y-3">
                  {infoItems.map((item, index) => (
                     <InformationCard
                        key={item.title}
                        item={item}
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
