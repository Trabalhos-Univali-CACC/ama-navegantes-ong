"use client";

import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Heart } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

import logo from "@/../public/imgs/ama_logo.png";

const navItems = [
   { label: "Início", href: "#inicio" },
   { label: "Quem Somos", href: "#quem-somos" },
   { label: "Equipe", href: "#equipe" },
   { label: "Informações", href: "#informacoes" },
   { label: "Parcerias", href: "#parcerias" },
   { label: "Carteirinha", href: "#carteirinha" },
   { label: "Contato", href: "#contato" },
]

export function Header() {
   const [isScrolled, setIsScrolled] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         setIsScrolled(window.scrollY > 50);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   return (
      <header>
         <div className="fixed top-0 left-0 right-0 z-50 flex h-1">
            <div className="flex-1 bg-chart-1" />
            <div className="flex-1 bg-chart-2" />
            <div className="flex-1 bg-chart-3" />
            <div className="flex-1 bg-chart-4" />
         </div>
         <div className={cn("fixed top-1 left-0 right-0 z-50 transition-all",
            isScrolled ? "bg-card/95 backdrop-blur-md shadow-sm" : "bg-transparent")}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
               <div className="flex h-16 items-center justify-between md:h-20">
                  <Link href="#Inicio" className="flex items-center gap-2 hover:scale-105 transition-all duration-300">
                     <Image src={logo} alt="Logo" width={50} height={50} className="rounded-full" />
                     <div className="hidden sm:block">
                        <p className="font-serif text-lg font-semibold text-foreground">
                           AMA Navegantes
                        </p>
                        <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
                           Apoio ao Autismo
                        </p>
                     </div>
                  </Link>
                  <nav className="hidden items-center gap-1 lg:flex">
                     {navItems.map((item) => (
                        <Link key={item.label} href={item.href}
                           className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                        >
                           {item.label}
                        </Link>
                     ))}
                  </nav>
                  <div className="flex items-center gap-3">
                     <Link href="#doacoes" className="hidden sm:block">
                        <Button className="gap-2 bg-primary hover:bg-primary/90 cursor-pointer">
                           <Heart className="h-4 w-4" />
                           Doar
                        </Button>
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </header>
   )
}
