import Link from "next/link";
import { Button } from "./ui/button";
import { PuzzleBackground, PuzzlePiece } from "./ui/autism-symbols";
import { ArrowDown, Calendar, Heart, Users } from "lucide-react";
import type { BannerTexto } from "@/lib/api";

const info = [
   { icon: Calendar, value: "2016", label: "Fundação", color: "bg-chart-1" },
   { icon: Users, value: "230", label: "Educandos Atendidos", color: "bg-chart-2" },
   { icon: Heart, value: "10", label: "Anos de Atuação", color: "bg-chart-4" },
];

// O texto (rótulo, título e parágrafo) vem do backend, pela prop "banner".
export function Banner({ banner }: { banner: BannerTexto | null }) {
   return (
      <section id="inicio" className="relative flex min-h-screen items-center overflow-hidden bg-linear-to-br from-background via-background to-accent/20 pt-20 md:pt-24">
         <PuzzleBackground />
         <div className="relative mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 md:py-20 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
               <div className="text-center lg:text-left">
                  <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                     <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
                     </span>
                     {banner?.rotulo}
                  </div>
                  <h1 className="mb-6 font-serif text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                     <span className="text-balance">{banner?.titulo}</span>
                  </h1>
                  <p className="mx-auto mb-8 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0">
                     {banner?.paragrafo}
                  </p>
                  <div className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
                     <Link href="#quem-somos">
                        <Button
                           size="lg"
                           className="w-full gap-2 bg-primary px-8 hover:bg-primary/90 sm:w-auto"
                        >
                           Conheça a AMA
                           <ArrowDown className="h-4 w-4" />
                        </Button>
                     </Link>
                     <Link href="#doacoes">
                        <Button
                           size="lg"
                           variant="outline"
                           className="bg-white! border-primary/30! text-primary! hover:bg-primary/10! sm:w-auto!"
                        >
                           <Heart className="h-4 w-4" />
                           Apoie nossa causa
                        </Button>
                     </Link>
                  </div>
               </div>
               <div className="relative">
                  <div className="relative mx-auto aspect-square max-w-md lg:max-w-none">

                     <div className="absolute inset-0 flex items-center justify-center">
                        <div
                           className="absolute h-[80%] w-[80%] rounded-full border border-dashed border-primary/20 [&>div]:opacity-60"
                           style={{ animation: "orbit-clockwise 60s linear infinite" }}
                        >
                           <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                              <PuzzlePiece size={24} className="text-chart-1" />
                           </div>
                           <div className="absolute top-1/2 -right-3 -translate-y-1/2">
                              <PuzzlePiece size={24} className="text-chart-2" />
                           </div>
                           <div className="absolute -bottom-3 left-1/2 -translate-x-1/2">
                              <PuzzlePiece size={24} className="text-chart-3" />
                           </div>
                           <div className="absolute top-1/2 -left-3 -translate-y-1/2">
                              <PuzzlePiece size={24} className="text-chart-4" />
                           </div>
                        </div>
                        <div
                           className="absolute h-[60%] w-[60%] rounded-full border border-dashed border-primary/15"
                           style={{ animation: "orbit-counterclockwise 80s linear infinite" }}
                        />
                     </div>

                     <div className="relative flex h-full items-center justify-center">
                        <div className="grid grid-cols-1 gap-4 sm:gap-6">
                           {info.map((info) => (
                              <div
                                 key={info.label}
                                 className="flex items-center gap-4 rounded-2xl bg-card p-4 shadow-sm ring-1 ring-border/50 sm:p-6"
                              >
                                 <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${info.color} text-white sm:h-14 sm:w-14`}>
                                    <info.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                                 </div>
                                 <div>
                                    <p className="font-serif text-2xl font-bold text-foreground sm:text-3xl">
                                       {info.value}
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                       {info.label}
                                    </p>
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block">
            <div className="flex flex-col items-center gap-2 text-muted-foreground">
               <span className="text-xs uppercase tracking-widest">Role para baixo</span>
               <ArrowDown className="h-4 w-4" />
            </div>
         </div>
      </section>
   )
}
