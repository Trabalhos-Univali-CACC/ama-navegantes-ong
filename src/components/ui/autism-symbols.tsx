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

export function InfinitySymbol({
  className = "",
  size = 60,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size * 0.5}
      viewBox="0 0 100 50"
      className={className}
      fill="none"
      strokeWidth="4"
      strokeLinecap="round"
    >
      <defs>
        <linearGradient id="autismGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" className="text-autism-blue" />
          <stop offset="33%" className="text-autism-yellow" />
          <stop offset="66%" className="text-autism-red" />
          <stop offset="100%" className="text-autism-green" />
        </linearGradient>
      </defs>
      <path
        d="M25,25 C25,15 15,10 10,15 C5,20 5,30 10,35 C15,40 25,35 30,25 C35,15 45,10 55,10 C65,10 75,15 75,25 C75,35 65,40 55,40 C45,40 35,35 30,25 C25,15 15,10 10,15"
        stroke="url(#autismGradient)"
      />
    </svg>
  );
}

export function FloatingPuzzles({ count = 6 }: { count?: number }) {
  const colors = [
    "var(--color-autism-blue)",
    "var(--color-autism-yellow)",
    "var(--color-autism-red)",
    "var(--color-autism-green)",
  ];

  const pieces = Array.from({ length: count }, (_, i) => ({
    id: i,
    color: colors[i % colors.length],
    size: 20 + Math.random() * 30,
    left: `${10 + Math.random() * 80}%`,
    top: `${10 + Math.random() * 80}%`,
    duration: 15 + Math.random() * 10,
    delay: Math.random() * 5,
    rotation: Math.random() * 360,
  }));

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {pieces.map((piece) => (
        <div
          key={piece.id}
          className="absolute opacity-10"
          style={{
            left: piece.left,
            top: piece.top,
            animation: `float-puzzle ${piece.duration}s ease-in-out ${piece.delay}s infinite`,
          }}
        >
          <div style={{ transform: `rotate(${piece.rotation}deg)` }}>
            <div
              style={{
                animation: `orbit-clockwise ${piece.duration * 1.5}s linear infinite`,
              }}
            >
              <PuzzlePiece color={piece.color} size={piece.size} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function PuzzleBorder({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-2 ${className}`}>
      {[...Array(4)].map((_, i) => {
        const colors = [
          "text-autism-blue",
          "text-autism-yellow",
          "text-autism-red",
          "text-autism-green",
        ];
        return (
          <div
            key={i}
            className="animate-spin"
            style={{
              animationDuration: "20s",
              animationDelay: `${i * 0.5}s`,
            }}
          >
            <PuzzlePiece
              color="currentColor"
              size={24}
              className={colors[i]}
            />
          </div>
        );
      })}
    </div>
  );
}

export function AutismRibbon({
  className = "",
  size = 40,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size * 1.2}
      viewBox="0 0 100 120"
      className={className}
    >
      <defs>
        <pattern
          id="puzzlePattern"
          x="0"
          y="0"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <rect x="0" y="0" width="10" height="10" fill="var(--color-autism-blue)" />
          <rect x="10" y="0" width="10" height="10" fill="var(--color-autism-yellow)" />
          <rect x="0" y="10" width="10" height="10" fill="var(--color-autism-red)" />
          <rect x="10" y="10" width="10" height="10" fill="var(--color-autism-green)" />
        </pattern>
      </defs>
      <path
        d="M50,5 C60,5 70,15 70,30 C70,45 55,60 50,75 C45,60 30,45 30,30 C30,15 40,5 50,5 Z M30,75 L20,115 L50,95 L80,115 L70,75"
        fill="url(#puzzlePattern)"
      />
    </svg>
  );
}

export function PuzzleDivider() {
  const colors = [
    "bg-autism-blue",
    "bg-autism-yellow",
    "bg-autism-red",
    "bg-autism-green",
  ];

  return (
    <div className="flex items-center justify-center py-8">
      <div className="flex items-center gap-3">
        <div className="h-px w-16 bg-linear-to-r from-transparent to-autism-blue/50 sm:w-24" />
        {colors.map((color, i) => (
          <div
            key={i}
            className={`h-3 w-3 rounded-sm ${color}`}
            style={{
              animation: `rotate-square 2s ease-in-out ${i * 0.2}s infinite alternate`,
            }}
          />
        ))}
        <div className="h-px w-16 bg-linear-to-l from-transparent to-autism-green/50 sm:w-24" />
      </div>
    </div>
  );
}

export function PuzzleBackground({ opacity = 0.03 }: { opacity?: number }) {
  return (
    <div
      className="absolute inset-0"
      style={{
        opacity,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54,27 C54,27 51,27 51,24 C51,21 54,18 57,18 C60,18 63,21 63,24 C63,27 60,30 60,30 L60,54 C60,57 57,60 54,60 L30,60 C30,60 30,57 33,57 C36,57 39,54 39,51 C39,48 36,45 33,45 C30,45 27,48 27,51 C27,54 30,57 30,57 L6,57 C3,57 0,54 0,51 L0,30 C0,30 3,30 3,33 C3,36 6,39 9,39 C12,39 15,36 15,33 C15,30 12,27 9,27 C6,27 3,30 3,30 L3,6 C3,3 6,0 9,0 L33,0 C33,0 33,3 30,3 C27,3 24,6 24,9 C24,12 27,15 30,15 C33,15 36,12 36,9 C36,6 33,3 33,3 L54,3 C57,3 60,6 60,9 L60,27 Z' fill='%23004AAD' fill-opacity='0.5'/%3E%3C/svg%3E")`,
        backgroundSize: "60px 60px",
      }}
    />
  );
}

export function InclusionHeart({
  className = "",
  size = 60,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      style={{ animation: "pulse-scale 2s ease-in-out infinite" }}
    >
      <defs>
        <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--color-autism-blue)" />
          <stop offset="50%" stopColor="var(--color-autism-yellow)" />
          <stop offset="100%" stopColor="var(--color-autism-red)" />
        </linearGradient>
      </defs>
      <path
        d="M50,90 C50,90 10,60 10,35 C10,20 25,10 40,15 C45,17 50,25 50,25 C50,25 55,17 60,15 C75,10 90,20 90,35 C90,60 50,90 50,90 Z"
        fill="url(#heartGradient)"
      />
      <circle cx="35" cy="40" r="5" fill="white" opacity="0.6" />
      <circle cx="65" cy="40" r="5" fill="white" opacity="0.6" />
    </svg>
  );
}
