import { Target, Eye, Heart, Users, Lightbulb, Shield } from "lucide-react";
import { PuzzleDivider } from "./ui/autism-symbols";
import type { SobreTexto } from "@/lib/api";

const values = [
   {
      icon: Heart,
      title: "Humanização",
      description:
         "Atendimento humanizado e acolhedor, pautado em princípios éticos e no respeito a cada educando e sua família.",
      color: "bg-chart-1",
   },
   {
      icon: Users,
      title: "Inclusão",
      description:
         "Promoção da inclusão social e educacional das pessoas com TEA, ampliando a participação e a garantia de direitos.",
      color: "bg-chart-2",
   },
   {
      icon: Lightbulb,
      title: "Valorização das potencialidades",
      description:
         "Valorização das potencialidades humanas, estimulando a autonomia e o desenvolvimento das habilidades de cada pessoa.",
      color: "bg-chart-3",
   },
   {
      icon: Shield,
      title: "Respeito às individualidades",
      description:
         "Respeito às individualidades, à ética profissional e ao compromisso com a responsabilidade social.",
      color: "bg-chart-4",
   },
];

// O texto vem do backend, pela prop "sobre".
export function Sobre({ sobre }: { sobre: SobreTexto | null }) {
   return (
      <section id="quem-somos" className="relative overflow-hidden bg-card py-20 md:py-28">
         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-16 max-w-3xl text-center">
               <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
                  {sobre?.rotulo}
               </span>
               <h2 className="mb-6 font-serif text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
                  <span className="text-balance">{sobre?.titulo}</span>
               </h2>
               <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {sobre?.paragrafo}
               </p>
            </div>

            <PuzzleDivider />

            <div className="mb-20 grid gap-8 md:grid-cols-2">
               <div className="group relative overflow-hidden rounded-3xl bg-primary p-8 text-primary-foreground md:p-10">
                  <div className="absolute right-0 top-0 h-40 w-40 translate-x-10 -translate-y-10 rounded-full bg-white/10" />
                  <div className="absolute bottom-0 left-0 h-32 w-32 -translate-x-8 translate-y-8 rounded-full bg-white/5" />
                  <div className="relative">
                     <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20">
                        <Target className="h-7 w-7" />
                     </div>
                     <h3 className="mb-4 font-serif text-2xl font-bold">
                        Nossa Missão
                     </h3>
                     <p className="leading-relaxed opacity-90">
                        {sobre?.missao}
                     </p>
                  </div>
               </div>

               <div className="group relative overflow-hidden rounded-3xl bg-secondary p-8 md:p-10">
                  <div className="absolute right-0 top-0 h-40 w-40 translate-x-10 -translate-y-10 rounded-full bg-primary/5" />
                  <div className="absolute bottom-0 left-0 h-32 w-32 -translate-x-8 translate-y-8 rounded-full bg-primary/5" />
                  <div className="relative">
                     <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <Eye className="h-7 w-7" />
                     </div>
                     <h3 className="mb-4 font-serif text-2xl font-bold text-foreground">
                        Nossa Visão
                     </h3>
                     <p className="leading-relaxed text-muted-foreground">
                        {sobre?.visao}
                     </p>
                  </div>
               </div>
            </div>

            <div>
               <h3 className="mb-10 text-center font-serif text-2xl font-bold text-foreground">
                  Nossos Valores
               </h3>
               <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {values.map((value) => (
                     <div
                        key={value.title}
                        className="group rounded-2xl border border-border bg-background p-6 transition-shadow hover:shadow-lg"
                     >
                        <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${value.color} text-white transition-transform group-hover:scale-110`}>
                           <value.icon className="h-5 w-5" />
                        </div>
                        <h4 className="mb-2 font-semibold text-foreground">
                           {value.title}
                        </h4>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                           {value.description}
                        </p>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   )
}
