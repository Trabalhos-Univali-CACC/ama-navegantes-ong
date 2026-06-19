"use client";

import { QrCode, Heart, Shirt, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Donations() {
   return (
      <section id="doacoes" className="relative overflow-hidden bg-primary py-20 text-primary-foreground md:py-28">
         <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-chart-2/20 blur-3xl" />
            <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
         </div>

         <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-16 max-w-3xl text-center">
               <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary-foreground/70">
                  Faça parte
               </span>
               <h2 className="mb-6 font-serif text-3xl font-bold sm:text-4xl md:text-5xl">
                  <span className="text-balance">Doações</span>
               </h2>
               <p className="text-pretty text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
                  Sua contribuição ajuda a AMA Navegantes a continuar acolhendo e
                  apoiando pessoas com TEA e suas famílias. Toda ajuda faz a diferença.
               </p>
            </div>

            <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-12">
               <div className="flex flex-col rounded-3xl bg-card p-6 shadow-sm sm:p-8">
                  <div className="mb-2 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary">
                     <Heart className="h-4 w-4" />
                     Doação via PIX
                  </div>
                  <h3 className="mb-2 font-serif text-2xl font-bold text-foreground">
                     Você escolhe o valor
                  </h3>
                  <p className="mb-6 max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
                     Sem valores pré-definidos. Aponte a câmera do seu celular para o
                     QR Code e doe a quantia que desejar.
                  </p>

                  <div className="flex flex-1 flex-col items-center justify-center gap-4 rounded-2xl border-2 border-dashed border-border bg-secondary/40 p-8">
                     <div className="flex h-28 w-28 items-center justify-center rounded-2xl bg-card shadow-sm">
                        <QrCode className="h-14 w-14 text-foreground" />
                     </div>
                     <span className="text-sm font-medium text-muted-foreground">
                        QR Code em breve
                     </span>
                  </div>
               </div>

               <div className="flex flex-col justify-center rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm sm:p-8">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-chart-4 to-chart-1 text-white shadow-sm">
                     <Shirt className="h-7 w-7" />
                  </div>
                  <h3 className="mb-4 font-serif text-2xl font-bold">
                     Doação de roupas e calçados
                  </h3>
                  <p className="mb-6 text-pretty text-base leading-relaxed text-primary-foreground/85">
                     Também temos um projeto de doação de roupas e calçados para as
                     famílias que são atendidas pela instituição.
                  </p>

                  <div className="mb-8 flex flex-wrap gap-2">
                     {["Roupas", "Calçados", "Em bom estado"].map((tag) => (
                        <span
                           key={tag}
                           className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-primary-foreground/90"
                        >
                           {tag}
                        </span>
                     ))}
                  </div>

                  <Button size="lg" className="w-fit gap-2 bg-white text-primary hover:bg-white/90">
                     Quero doar roupas
                     <ArrowRight className="h-4 w-4" />
                  </Button>
               </div>
            </div>
         </div>
      </section>
   );
}
