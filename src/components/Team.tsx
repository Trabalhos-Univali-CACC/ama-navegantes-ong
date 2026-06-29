import { Mail } from "lucide-react";
import { imageUrl, type EquipeTexto, type EquipeMembro } from "@/lib/api";

const autismColors = ["bg-chart-1", "bg-chart-2", "bg-chart-3", "bg-chart-4"];

// O texto da seção e a lista de membros vêm do backend, pelas props.
export function Team({
   texto,
   membros,
}: {
   texto: EquipeTexto | null;
   membros: EquipeMembro[];
}) {
   return (
      <section id="equipe" className="relative overflow-hidden bg-background py-20 md:py-28">
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
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
               {membros.map((membro, index) => (
                  <div key={membro.id} className="group relative overflow-hidden rounded-2xl bg-card p-6 shadow-sm ring-1 ring-border/50 transition-all hover:shadow-xl">
                     <div className="mb-5 flex items-center gap-4">
                        <div className="relative">
                           {membro.imagemIdentificador ? (
                              // eslint-disable-next-line @next/next/no-img-element
                              <img
                                 src={imageUrl(membro.imagemIdentificador)}
                                 alt={membro.nome}
                                 className="h-16 w-16 rounded-full object-cover"
                              />
                           ) : (
                              <div className={`flex h-16 w-16 items-center justify-center rounded-full ${autismColors[index % autismColors.length]} text-2xl font-serif font-bold text-white`}>
                                 {membro.nome.charAt(0)}
                              </div>
                           )}
                           <div className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full border-2 border-card bg-green-500" />
                        </div>
                        <div>
                           <h3 className="font-semibold text-foreground">
                              {membro.nome}
                           </h3>
                           <p className="text-sm text-primary">{membro.cargo}</p>
                        </div>
                     </div>
                     <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                        {membro.descricao}
                     </p>
                     <div className="flex gap-2">
                        <button className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground">
                           <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                           </svg>
                        </button>
                        <button className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground">
                           <Mail className="h-4 w-4" />
                        </button>
                     </div>
                     <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/5 transition-transform group-hover:scale-150" />
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}
