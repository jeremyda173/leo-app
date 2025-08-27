"use client"

import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

export type ColorKey =
  | "blue-500"
  | "green-500"
  | "yellow-500"
  | "orange-500"
  | "red-500"
  | "pink-500"
  | "purple-500"
  | "teal-500";

const COLOR_BG: Record<ColorKey, string> = {
  "blue-500": "bg-blue-500",
  "green-500": "bg-green-500",
  "yellow-500": "bg-yellow-500",
  "orange-500": "bg-orange-500",
  "red-500": "bg-red-500",
  "pink-500": "bg-pink-500",
  "purple-500": "bg-purple-500",
  "teal-500": "bg-teal-500",
} as const;

const COLOR_RING: Record<ColorKey, string> = {
  "blue-500": "ring-blue-200",
  "green-500": "ring-green-200",
  "yellow-500": "ring-yellow-200",
  "orange-500": "ring-orange-200",
  "red-500": "ring-red-200",
  "pink-500": "ring-pink-200",
  "purple-500": "ring-purple-200",
  "teal-500": "ring-teal-200",
} as const;

const COLOR_GRADIENT: Record<ColorKey, string> = {
  "blue-500": "from-blue-500/90 to-blue-600",
  "green-500": "from-green-500/90 to-green-600",
  "yellow-500": "from-yellow-500/90 to-yellow-600",
  "orange-500": "from-orange-500/90 to-orange-600",
  "red-500": "from-red-500/90 to-red-600",
  "pink-500": "from-pink-500/90 to-pink-600",
  "purple-500": "from-purple-500/90 to-purple-600",
  "teal-500": "from-teal-500/90 to-teal-600",
} as const;

export interface EventItem {
  year: string;
  title: string;
  description: string;
  color: ColorKey;
  location?: string;
}

const defaultEvents: EventItem[] = [
  {
    year: "1987",
    title: "Lionel Messi is born",
    description: "Lionel Messi was born on June 24, 1987, in Rosario, Argentina.",
    color: "blue-500",
    location: "Rosario, Argentina",
  },
  {
    year: "1988",
    title: "Antonela Roccuzzo is born",
    description:
      "Antonela Roccuzzo was born on February 26, 1988, in Rosario, Argentina.",
    color: "green-500",
    location: "Rosario, Argentina",
  },
  {
    year: "2008",
    title: "Meets Antonela Roccuzzo",
    description:
      "Lionel Messi reconnects with Antonela Roccuzzo, his future wife, in his hometown of Rosario.",
    color: "yellow-500",
    location: "Rosario, Argentina",
  },
  {
    year: "2012",
    title: "Birth of first son, Thiago",
    description:
      "Lionel Messi and Antonela welcome their first son, Thiago, on November 2, 2012.",
    color: "orange-500",
    location: "Barcelona, España",
  },
  {
    year: "2015",
    title: "Birth of second son, Mateo",
    description: "On September 11, 2015, their second son, Mateo, is born.",
    color: "red-500",
    location: "Barcelona, España",
  },
  {
    year: "2017",
    title: "Marries Antonela Roccuzzo",
    description: "Lionel Messi and Antonela marry on June 30, 2017.",
    color: "pink-500",
    location: "Rosario, Argentina",
  },
  {
    year: "2018",
    title: "Birth of third son, Ciro",
    description: "On March 10, 2018, they welcome their third son, Ciro.",
    color: "purple-500",
    location: "Barcelona, España",
  },
  {
    year: "2021",
    title: "Moves to Paris",
    description:
      "In August 2021, Messi and family move to Paris after his transfer to PSG.",
    color: "teal-500",
    location: "Paris, Francia",
  },
  {
    year: "2023",
    title: "Moves to Miami",
    description:
      "In July 2023, Messi and family move to Miami after his transfer to Inter Miami CF.",
    color: "red-500",
    location: "Miami, USA",
  },
];

function classNames(...arr: Array<string | false | null | undefined>): string {
  return arr.filter(Boolean).join(" ");
}

function Dot({ color }: { color: ColorKey }) {
  const bg = COLOR_BG[color] ?? "bg-gray-400";
  const ring = COLOR_RING[color] ?? "ring-gray-200";
  return (
    <div
      className={classNames(
        "relative z-10 flex h-10 w-10 items-center justify-center rounded-full ring-4 bg-white",
        ring
      )}
      aria-hidden
    >
      <div className={classNames("h-4 w-4 rounded-full", bg)} />
    </div>
  );
}

function Card({ event, side = "left" }: { event: EventItem; side?: "left" | "right" }) {
  const gradient = COLOR_GRADIENT[event.color] ?? "from-gray-500 to-gray-600";
  return (
    <motion.article
      tabIndex={0}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={classNames(
        "group relative max-w-xl rounded-2xl p-5 shadow-lg outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        "bg-gradient-to-br text-white",
        gradient,
        side === "left" ? "ml-auto" : "mr-auto"
      )}
      role="region"
      aria-label={`${event.year}: ${event.title}`}
    >
      <header className="flex items-center gap-2">
        <Calendar className="h-4 w-4 opacity-90" aria-hidden />
        <h3 className="text-base font-semibold tracking-wide">{event.year}</h3>
      </header>
      <h4 className="mt-1 text-lg font-bold leading-snug">{event.title}</h4>
      <p className="mt-2 text-sm/6 opacity-95 text-white/90">{event.description}</p>
      {event.location && (
        <p className="mt-3 flex items-center gap-2 text-xs/5 text-white/80">
          <MapPin className="h-3.5 w-3.5" aria-hidden />
          <span>{event.location}</span>
        </p>
      )}
      <div className="pointer-events-none absolute -inset-1 -z-10 rounded-2xl opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-60 bg-white/20" />
    </motion.article>
  );
}

export interface FamilyTimelineProProps {
  title?: string;
  events?: EventItem[];
}

export default function FamilyTimelinePro({
  title = "Family timeline",
  events = defaultEvents,
}: FamilyTimelineProProps) {
  return (
    <section className="mx-auto max-w-5xl px-4 py-10 sm:py-14">
      <div className="mx-auto mb-10 max-w-3xl text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-600 sm:text-base">
          Hitos familiares de Lionel Messi y Antonela Roccuzzo en una línea de tiempo elegante.
        </p>
      </div>
      <div className="relative">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-1/2 hidden -translate-x-1/2 transform sm:block"
        >
          <div className="h-full w-1 bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200" />
        </div>
        <ol className="hidden gap-16 sm:grid" style={{ gridTemplateColumns: "1fr 40px 1fr" }}>
          {events.map((e, i) => (
            <li key={`${e.year}-${i}`} className="contents">
              {i % 2 === 0 ? (
                <div className="flex justify-end py-6">
                  <Card event={e} side="left" />
                </div>
              ) : (
                <div className="py-6" />
              )}
              <div className="flex items-center justify-center py-6">
                <Dot color={e.color} />
              </div>
              {i % 2 !== 0 ? (
                <div className="flex justify-start py-6">
                  <Card event={e} side="right" />
                </div>
              ) : (
                <div className="py-6" />
              )}
            </li>
          ))}
        </ol>
        <div className="sm:hidden">
          <div className="relative before:absolute before:inset-y-0 before:left-5 before:w-0.5 before:bg-gray-200">
            <ol className="space-y-6 py-1">
              {events.map((e, i) => (
                <li key={`${e.year}-${i}`} className="relative pl-16">
                  <div className="absolute left-0 top-2">
                    <Dot color={e.color} />
                  </div>
                  <Card event={e} side={i % 2 === 0 ? "left" : "right"} />
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
