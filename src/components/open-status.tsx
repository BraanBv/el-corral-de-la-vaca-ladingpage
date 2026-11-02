"use client";

import { useSyncExternalStore } from "react";
import { TIME_ZONE, formatHour, hours } from "@/lib/site";

type Now = { day: number; minutes: number };

const weekdayIndex: Record<string, number> = {
  Sun: 0,
  Mon: 1,
  Tue: 2,
  Wed: 3,
  Thu: 4,
  Fri: 5,
  Sat: 6,
};

const formatter = new Intl.DateTimeFormat("en-US", {
  timeZone: TIME_ZONE,
  weekday: "short",
  hour: "2-digit",
  minute: "2-digit",
  hourCycle: "h23",
});

// Snapshot como string para que sea estable entre lecturas del mismo minuto.
function getSnapshot() {
  const parts = formatter.formatToParts(new Date());
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "0";
  return `${weekdayIndex[get("weekday")]}|${Number(get("hour")) * 60 + Number(get("minute"))}`;
}

function subscribe(onChange: () => void) {
  const id = window.setInterval(onChange, 30_000);
  return () => window.clearInterval(id);
}

/** Hora actual en San Juan del Río; null durante el render del servidor. */
export function useLocalNow(): Now | null {
  const snap = useSyncExternalStore(subscribe, getSnapshot, () => null);
  if (!snap) return null;
  const [day, minutes] = snap.split("|").map(Number);
  return { day, minutes };
}

const toMinutes = (hhmm: string) => {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
};

function describe(now: Now) {
  const today = hours.find((h) => h.day === now.day)!;
  const open = toMinutes(today.open);
  const close = toMinutes(today.close);

  if (now.minutes >= open && now.minutes < close) {
    const closingSoon = close - now.minutes <= 45;
    return {
      open: true,
      text: closingSoon
        ? `Abierto · cierra pronto (${formatHour(today.close)})`
        : `Abierto ahora · cierra a las ${formatHour(today.close)}`,
    };
  }
  if (now.minutes < open) {
    return { open: false, text: `Cerrado · abre hoy a la${today.open.startsWith("13") ? "" : "s"} ${formatHour(today.open)}` };
  }
  const tomorrow = hours.find((h) => h.day === (now.day + 1) % 7)!;
  return {
    open: false,
    text: `Cerrado · abre mañana a la${tomorrow.open.startsWith("13") ? "" : "s"} ${formatHour(tomorrow.open)}`,
  };
}

export function OpenStatus({ className = "" }: { className?: string }) {
  const now = useLocalNow();
  const status = now ? describe(now) : null;

  return (
    <span
      className={`inline-flex min-h-6 items-center gap-2 transition-opacity duration-300 ${status ? "opacity-100" : "opacity-0"} ${className}`}
      aria-live="polite"
    >
      <span
        aria-hidden
        className={`size-2 rounded-full ${status?.open ? "bg-emerald-400 shadow-[0_0_0_4px_rgba(52,211,153,0.2)]" : "bg-mostaza"}`}
      />
      {status?.text ?? "Horario"}
    </span>
  );
}

export function HoursTable() {
  const now = useLocalNow();

  return (
    <table className="w-full text-left">
      <caption className="sr-only">Horario de El Corral de la Vaca</caption>
      <tbody>
        {hours.map((h) => {
          const isToday = now?.day === h.day;
          return (
            <tr
              key={h.day}
              className={`border-b border-hierro/10 last:border-0 ${isToday ? "font-semibold text-hierro" : "text-hierro/75"}`}
            >
              <th scope="row" className="py-2.5 pr-4 font-[inherit]">
                {h.label}
                {isToday && (
                  <span className="ml-2 rounded-sm bg-mostaza px-1.5 py-0.5 text-[0.65rem] font-semibold tracking-wider text-hierro uppercase">
                    Hoy
                  </span>
                )}
              </th>
              <td className="py-2.5 text-right tabular-nums">
                {formatHour(h.open)} – {formatHour(h.close)}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
