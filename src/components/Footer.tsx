"use client";

import Link from "next/link";
import Image from "next/image";
import { Heart, ArrowUp } from "lucide-react";
import logo from "@/../public/imgs/ama_logo.png";
import { Facebook, Instagram, Youtube } from "@/type/types";

const footerLinks = {
   institucional: [
      { label: "Quem Somos", href: "#quem-somos" },
      { label: "Nossa Equipe", href: "#equipe" },
      { label: "Parcerias", href: "#parcerias" },
      { label: "Transparência", href: "#" },
   ],
   recursos: [
      { label: "Informações", href: "#informacoes" },
      { label: "Carteirinha CIPTEA", href: "#carteirinha" },
      { label: "Direitos do Autista", href: "#" },
      { label: "FAQ", href: "#" },
   ],
   contato: [
      { label: "Fale Conosco", href: "#contato" },
      { label: "Voluntariado", href: "#" },
      { label: "Trabalhe Conosco", href: "#" },
      { label: "Imprensa", href: "#" },
   ],
};

const socialLinks = [
   { icon: Instagram, href: "#", label: "Instagram" },
   { icon: Facebook, href: "#", label: "Facebook" },
   { icon: Youtube, href: "#", label: "YouTube" },
];

export function Footer() {
   const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
   };

   return (
      <footer className="relative overflow-hidden border-t border-border bg-card">
         <div className="flex h-1">
            <div className="flex-1 bg-chart-1" />
            <div className="flex-1 bg-chart-2" />
            <div className="flex-1 bg-chart-3" />
            <div className="flex-1 bg-chart-4" />
         </div>

         <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
               <div className="lg:col-span-2">
                  <Link href="#inicio" className="inline-flex items-center gap-2">
                     <Image src={logo} alt="Logo" width={50} height={50} className="rounded-full" />
                     <div>
                        <p className="font-serif text-lg font-semibold text-foreground">
                           AMA Navegantes
                        </p>
                        <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
                           Apoio ao Autismo
                        </p>
                     </div>
                  </Link>
                  <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
                     Organização da sociedade civil, sem fins lucrativos, que atua há
                     mais de dez anos no atendimento especializado a pessoas com
                     Transtorno do Espectro Autista (TEA) em Navegantes/SC.
                  </p>

                  <div className="mt-6 flex gap-3">
                     {socialLinks.map((social) => (
                        <a
                           key={social.label}
                           href={social.href}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                           aria-label={social.label}
                        >
                           <social.icon className="h-4 w-4" />
                        </a>
                     ))}
                  </div>
               </div>

               <div>
                  <h4 className="mb-4 font-semibold text-foreground">Institucional</h4>
                  <ul className="space-y-2">
                     {footerLinks.institucional.map((link) => (
                        <li key={link.label}>
                           <a
                              href={link.href}
                              className="text-sm text-muted-foreground transition-colors hover:text-primary"
                           >
                              {link.label}
                           </a>
                        </li>
                     ))}
                  </ul>
               </div>

               <div>
                  <h4 className="mb-4 font-semibold text-foreground">Recursos</h4>
                  <ul className="space-y-2">
                     {footerLinks.recursos.map((link) => (
                        <li key={link.label}>
                           <a
                              href={link.href}
                              className="text-sm text-muted-foreground transition-colors hover:text-primary"
                           >
                              {link.label}
                           </a>
                        </li>
                     ))}
                  </ul>
               </div>

               <div>
                  <h4 className="mb-4 font-semibold text-foreground">Contato</h4>
                  <ul className="space-y-2">
                     {footerLinks.contato.map((link) => (
                        <li key={link.label}>
                           <a
                              href={link.href}
                              className="text-sm text-muted-foreground transition-colors hover:text-primary"
                           >
                              {link.label}
                           </a>
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
         </div>

         <div className="border-t border-border bg-secondary/30">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-3 sm:flex-row sm:px-6 lg:px-8">
               <p className="text-center text-sm text-muted-foreground">
                  © {new Date().getFullYear()} AMA Navegantes. Todos os direitos
                  reservados.
               </p>
               <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  Feito com
                  <Heart className="h-4 w-4 fill-current text-red-500" />
                  para a comunidade
               </div>
            </div>
         </div>

         <button
            className="cursor-pointer fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-colors hover:bg-primary/90"
            aria-label="Voltar ao topo"
            onClick={scrollToTop}
         >
            <ArrowUp className="h-5 w-5" />
         </button>
      </footer>
   );
}
