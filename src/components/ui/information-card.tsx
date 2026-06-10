import { ChevronDown, type LucideIcon } from "lucide-react";

const autismColors = [
   "bg-autism-blue",
   "bg-autism-yellow",
   "bg-autism-red",
   "bg-autism-green",
];

export interface InfoItem {
   icon: LucideIcon;
   title: string;
   content: string;
}

export function InformationCard({ item, isOpen, onToggle, index }: {
   item: InfoItem;
   isOpen: boolean;
   onToggle: () => void;
   index: number;
}) {
   return (
      <div className="overflow-hidden rounded-xl border border-border bg-card">
         <button
            onClick={onToggle}
            aria-expanded={isOpen}
            className="flex w-full items-center justify-between gap-4 p-5 text-left transition-colors hover:bg-secondary/50"
         >
            <div className="flex items-center gap-4">
               <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${autismColors[index % autismColors.length]} text-white`}>
                  <item.icon className="h-5 w-5" />
               </div>
               <span className="font-medium text-foreground">{item.title}</span>
            </div>
            <div className="shrink-0 text-muted-foreground">
               <ChevronDown
                  className={`h-5 w-5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
               />
            </div>
         </button>
         <div
            className={`grid overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
               }`}
         >
            <div className="min-h-0">
               <div className="border-t border-border px-5 py-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                     {item.content}
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
}
