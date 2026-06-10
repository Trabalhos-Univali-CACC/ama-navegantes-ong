import { Puzzle } from "lucide-react";

export function PuzzleBackground() {
   const PUZZLE_COUNT = 200

   return (
      <div className="pointer-events-none absolute -inset-10 grid h-[calc(100%+5rem)] w-[calc(100%+5rem)] grid-cols-[repeat(auto-fill,minmax(4.5rem,1fr))] gap-8 p-4 opacity-[0.08]">
         {Array.from({ length: PUZZLE_COUNT }, (_, i) => (
            <Puzzle key={i} className="mx-auto size-11 text-primary sm:size-12 md:size-14" strokeWidth={1.5} style={{ transform: `rotate(${((i * 53) % 120) - 60}deg)` }} />
         ))}
      </div>
   )
}
