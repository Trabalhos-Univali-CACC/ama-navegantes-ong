"use client";

import { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram } from "@/type/types";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import { API_URL, type ContatoTexto, type ContatoInfo } from "@/lib/api";

// Ícones e cores dos dados de contato, na ordem em que aparecem.
const icones = [MapPin, Phone, Mail, Clock];
const cores = ["bg-chart-1", "bg-chart-2", "bg-chart-3", "bg-chart-4"];

const socialLinks = [
   { icon: Instagram, label: "Instagram", href: "#" },
   { icon: Facebook, label: "Facebook", href: "#" },
   { icon: MessageCircle, label: "WhatsApp", href: "#" },
];

export function Contact({
   texto,
   infos,
}: {
   texto: ContatoTexto | null;
   infos: ContatoInfo[];
}) {
   const [formState, setFormState] = useState({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
   });

   // "idle" | "enviando" | "ok" | "erro"
   const [status, setStatus] = useState<"idle" | "enviando" | "ok" | "erro">("idle");

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setStatus("enviando");
      try {
         // Envia a mensagem para o backend (rota pública)
         const res = await fetch(`${API_URL}/api/mensagens`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
               nome: formState.name,
               email: formState.email,
               telefone: formState.phone,
               assunto: formState.subject,
               conteudo: formState.message,
            }),
         });
         if (!res.ok) throw new Error("falha ao enviar");
         setStatus("ok");
         setFormState({ name: "", email: "", phone: "", subject: "", message: "" });
      } catch {
         setStatus("erro");
      }
   };

   return (
      <section id="contato" className="relative overflow-hidden bg-background py-20 md:py-28">
         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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

            <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
               <div className="lg:col-span-2">
                  <div className="space-y-6">
                     {infos.map((item, index) => {
                        const Icone = icones[index % icones.length];
                        return (
                           <div key={item.id} className="flex gap-4">
                              <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${cores[index % cores.length]} text-white`}>
                                 <Icone className="h-5 w-5" />
                              </div>
                              <div>
                                 <p className="text-sm font-medium text-muted-foreground">
                                    {item.rotulo}
                                 </p>
                                 {item.link ? (
                                    <a
                                       href={item.link}
                                       className="font-medium text-foreground transition-colors hover:text-primary"
                                    >
                                       {item.valor}
                                    </a>
                                 ) : (
                                    <p className="font-medium text-foreground">{item.valor}</p>
                                 )}
                              </div>
                           </div>
                        );
                     })}
                  </div>
                  <div className="mt-10">
                     <p className="mb-4 text-sm font-medium text-muted-foreground">
                        Redes sociais
                     </p>
                     <div className="flex gap-3">
                        {socialLinks.map((social) => (
                           <a
                              key={social.label}
                              href={social.href}
                              target="_blank"
                              className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                           >
                              <social.icon className="h-5 w-5" />
                           </a>
                        ))}
                     </div>
                  </div>
                  <div className="mt-10 overflow-hidden rounded-2xl bg-secondary">
                     <div className="flex h-48 items-center justify-center">

                        {/* MAPA INTERATIVO */}
                        <div className="text-center">
                           <MapPin className="mx-auto mb-2 h-8 w-8 text-muted-foreground" />
                           <p className="text-sm text-muted-foreground">
                              Mapa interativo
                           </p>
                        </div>


                     </div>
                  </div>
               </div>
               <div className="lg:col-span-3">
                  <form
                     onSubmit={handleSubmit}
                     className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8"
                  >
                     <h3 className="mb-6 font-serif text-xl font-bold text-foreground">
                        {texto?.formTitulo}
                     </h3>

                     <div className="space-y-5">
                        <div className="grid gap-5 sm:grid-cols-2">
                           <div>
                              <label className="mb-2 block text-sm font-medium text-foreground">
                                 Nome completo
                              </label>
                              <Input
                                 value={formState.name}
                                 onChange={(e) =>
                                    setFormState({ ...formState, name: e.target.value })
                                 }
                                 placeholder="Seu nome"
                                 className="h-12"
                              />
                           </div>
                           <div>
                              <label className="mb-2 block text-sm font-medium text-foreground">
                                 E-mail
                              </label>
                              <Input
                                 type="email"
                                 value={formState.email}
                                 onChange={(e) =>
                                    setFormState({ ...formState, email: e.target.value })
                                 }
                                 placeholder="seu@email.com"
                                 className="h-12"
                              />
                           </div>
                        </div>

                        <div className="grid gap-5 sm:grid-cols-2">
                           <div>
                              <label className="mb-2 block text-sm font-medium text-foreground">
                                 Telefone
                              </label>
                              <Input
                                 value={formState.phone}
                                 onChange={(e) =>
                                    setFormState({ ...formState, phone: e.target.value })
                                 }
                                 placeholder="(00) 00000-0000"
                                 className="h-12"
                              />
                           </div>
                           <div>
                              <label className="mb-2 block text-sm font-medium text-foreground">
                                 Assunto
                              </label>
                              <Input
                                 value={formState.subject}
                                 onChange={(e) =>
                                    setFormState({ ...formState, subject: e.target.value })
                                 }
                                 placeholder="Sobre o que deseja falar?"
                                 className="h-12"
                              />
                           </div>
                        </div>

                        <div>
                           <label className="mb-2 block text-sm font-medium text-foreground">
                              Mensagem
                           </label>
                           <Textarea
                              value={formState.message}
                              onChange={(e) =>
                                 setFormState({ ...formState, message: e.target.value })
                              }
                              placeholder="Escreva sua mensagem aqui..."
                              className="min-h-[140px] resize-none"
                           />
                        </div>

                        <Button
                           type="submit"
                           size="lg"
                           disabled={status === "enviando"}
                           className="w-full gap-2 bg-primary hover:bg-primary/90"
                        >
                           {status === "enviando" ? "Enviando..." : "Enviar mensagem"}
                           <Send className="h-4 w-4" />
                        </Button>

                        {status === "ok" && (
                           <p className="text-center text-sm font-medium text-green-600">
                              Mensagem enviada com sucesso! Em breve entraremos em contato.
                           </p>
                        )}
                        {status === "erro" && (
                           <p className="text-center text-sm font-medium text-destructive">
                              Não foi possível enviar. Tente novamente mais tarde.
                           </p>
                        )}
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </section>
   );
}
