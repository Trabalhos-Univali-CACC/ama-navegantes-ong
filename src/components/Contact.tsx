"use client";

import { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram } from "@/type/types";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, } from "lucide-react";

const contactInfo = [
   {
      icon: MapPin,
      label: "Endereço",
      value: "Rua Lorem Ipsum, 123 - Centro, Navegantes/SC",
      href: "#",
      color: "bg-chart-1",
   },
   {
      icon: Phone,
      label: "Telefone",
      value: "(47) 3333-3333",
      href: "tel:+554733333333",
      color: "bg-chart-2",
   },
   {
      icon: Mail,
      label: "E-mail",
      value: "contato@amanavegantes.org.br",
      href: "mailto:contato@amanavegantes.org.br",
      color: "bg-chart-3",
   },
   {
      icon: Clock,
      label: "Horário",
      value: "Seg a Sex: 8h às 18h",
      href: null,
      color: "bg-chart-4",
   },
];

const socialLinks = [
   { icon: Instagram, label: "Instagram", href: "#" },
   { icon: Facebook, label: "Facebook", href: "#" },
   { icon: MessageCircle, label: "WhatsApp", href: "#" },
];

export function Contact() {
   const [formState, setFormState] = useState({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
   });

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();

      console.log(formState);
   };

   return (
      <section id="contato" className="relative overflow-hidden bg-background py-20 md:py-28">
         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-16 max-w-3xl text-center">
               <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
                  Contato
               </span>
               <h2 className="mb-6 font-serif text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
                  <span className="text-balance">Fale conosco</span>
               </h2>
               <p className="text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
               </p>
            </div>

            <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
               <div className="lg:col-span-2">
                  <div className="space-y-6">
                     {contactInfo.map((item, index) => (
                        <div key={item.label} className="flex gap-4">
                           <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${item.color} text-white`}>
                              <item.icon className="h-5 w-5" />
                           </div>
                           <div>
                              <p className="text-sm font-medium text-muted-foreground">
                                 {item.label}
                              </p>
                              {item.href ? (
                                 <a
                                    href={item.href}
                                    className="font-medium text-foreground transition-colors hover:text-primary"
                                 >
                                    {item.value}
                                 </a>
                              ) : (
                                 <p className="font-medium text-foreground">{item.value}</p>
                              )}
                           </div>
                        </div>
                     ))}
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
                        Envie uma mensagem
                     </h3>

                     <div className="space-y-5">
                        <div className="grid gap-5 sm:grid-cols-2">
                           <div>
                              <label className="mb-2 block text-sm font-medium text-foreground">
                                 Nome completo
                              </label>
                              <Input
                                 value={formState.name}
                                 onChange={(e: any) =>
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
                                 onChange={(e: any) =>
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
                                 onChange={(e: any) =>
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
                                 onChange={(e: any) =>
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
                              onChange={(e: any) =>
                                 setFormState({ ...formState, message: e.target.value })
                              }
                              placeholder="Escreva sua mensagem aqui..."
                              className="min-h-[140px] resize-none"
                           />
                        </div>

                        <Button
                           type="submit"
                           size="lg"
                           className="w-full gap-2 bg-primary hover:bg-primary/90"
                        >
                           Enviar mensagem
                           <Send className="h-4 w-4" />
                        </Button>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </section>
   );
}
