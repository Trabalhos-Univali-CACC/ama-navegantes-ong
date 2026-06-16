"use client";

import { Puzzle } from "lucide-react";

export function PuzzlePiece({
  className = "",
  color = "currentColor",
  size = 40,
}: {
  className?: string;
  color?: string;
  size?: number;
}) {
  return (
    <Puzzle
      width={size}
      height={size}
      color={color}
      className={className}
    />
  );
}

export function PuzzleDivider() {
  const colors = [
    "bg-chart-1",
    "bg-chart-2",
    "bg-chart-3",
    "bg-chart-4",
  ];

  return (
    <div className="flex items-center justify-center py-8">
      <div className="flex items-center gap-3">
        <div className="h-px w-16 bg-linear-to-r from-transparent to-chart-1/50 sm:w-24" />
        {colors.map((color, i) => (
          <div
            key={i}
            className={`h-3 w-3 rounded-sm ${color}`}
            style={{
              animation: `rotate-square 2s ease-in-out ${i * 0.2}s infinite alternate`,
            }}
          />
        ))}
        <div className="h-px w-16 bg-linear-to-l from-transparent to-chart-4/50 sm:w-24" />
      </div>
    </div>
  );
}

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
