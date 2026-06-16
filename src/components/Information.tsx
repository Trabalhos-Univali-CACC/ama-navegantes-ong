"use client";

import { useState } from "react";
import { InformationCard } from "./ui/information-card";
import { Clock, MapPin, FileText, Calendar, HelpCircle, Phone } from "lucide-react";

const infoItems = [
   {
      icon: Clock,
      title: "Horário de Funcionamento",
      content:
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Segunda a Sexta: 8h às 18h. Sábados: 8h às 12h.",
   },
   {
      icon: MapPin,
      title: "Localização",
      content:
         "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Endereço: Rua Lorem Ipsum, 123 - Centro, Navegantes/SC.",
   },
   {
      icon: FileText,
      title: "Documentação Necessária",
      content:
         "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Documentos: RG, CPF, Comprovante de residência, Laudo médico.",
   },
   {
      icon: Calendar,
      title: "Agendamentos",
      content:
         "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Agendamentos podem ser feitos por telefone ou presencialmente.",
   },
   {
      icon: HelpCircle,
      title: "Dúvidas Frequentes",
      content:
         "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
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
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                     eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>

                  <div className="rounded-2xl bg-primary p-6 text-primary-foreground">
                     <h3 className="mb-3 font-semibold">Precisa de ajuda imediata?</h3>
                     <p className="mb-4 text-sm opacity-90">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit.
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
