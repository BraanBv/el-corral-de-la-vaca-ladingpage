import Image from "next/image";
import { Icon } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { HoursTable, OpenStatus } from "@/components/open-status";
import {
  business,
  faqs,
  moreFromMenu,
  reviewTopics,
  reviews,
  services,
  signatureDishes,
  spaces,
} from "@/lib/site";

const nav = [
  { href: "#carta", label: "La carta" },
  { href: "#lugar", label: "El lugar" },
  { href: "#resenas", label: "Reseñas" },
  { href: "#visitanos", label: "Visítanos" },
];

function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`flex flex-col leading-none font-stencil uppercase ${className}`}>
      <span className="text-[1.05rem] font-extrabold tracking-[0.06em]">El Corral de la Vaca</span>
      <span className="mt-1 flex items-center gap-2 text-[0.7rem] font-bold tracking-[0.4em]">
        <span aria-hidden className="h-px w-5 bg-current opacity-60" />
        Steak
      </span>
    </span>
  );
}

function CallButton({ className = "", label = "Llamar para reservar" }) {
  return (
    <a
      href={business.phoneHref}
      className={`inline-flex items-center justify-center gap-2.5 rounded-full bg-brasa px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brasa-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mostaza ${className}`}
    >
      <Icon name="phone" className="size-4" />
      {label}
    </a>
  );
}

function SectionHeading({
  eyebrow,
  title,
  children,
  tone = "light",
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <div className="max-w-2xl">
      <p className={`eyebrow ${tone === "dark" ? "text-mostaza" : "text-brasa"}`}>{eyebrow}</p>
      <h2 className="mt-3 font-display text-5xl leading-[0.95] font-bold uppercase sm:text-6xl">
        {title}
      </h2>
      {children && (
        <p className={`mt-5 text-lg leading-relaxed ${tone === "dark" ? "text-cantera/70" : "text-humo"}`}>
          {children}
        </p>
      )}
    </div>
  );
}

export default function Home() {
  const fullAddress = `${business.address.street}, ${business.address.neighborhood}, ${business.address.postalCode} ${business.address.city}, ${business.address.regionShort}`;

  return (
    <>
      <JsonLd />

      {/* ───────── Encabezado ───────── */}
      <header className="absolute inset-x-0 top-0 z-30">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-5 text-cantera sm:px-8">
          <a href="#inicio" aria-label={`${business.name}, inicio`}>
            <Wordmark />
          </a>
          <nav aria-label="Principal" className="hidden items-center gap-8 text-sm font-medium md:flex">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="text-cantera/80 transition-colors hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href={business.phoneHref}
            className="hidden items-center gap-2 rounded-full border border-cantera/30 px-4 py-2 text-sm font-semibold tabular-nums backdrop-blur-sm transition-colors hover:border-cantera hover:bg-cantera hover:text-hierro sm:inline-flex"
          >
            <Icon name="phone" className="size-4" />
            {business.phoneDisplay}
          </a>
        </div>
      </header>

      <main id="inicio">
        {/* ───────── Hero ───────── */}
        <section className="relative isolate flex min-h-[92svh] items-end overflow-hidden bg-hierro text-cantera">
          <Image
            src="/images/fachada-terraza-noche.jpg"
            alt="Terraza de El Corral de la Vaca Steak de noche, con faroles de hierro, muros de cantera y mesas listas"
            fill
            preload
            sizes="100vw"
            className="-z-10 object-cover object-[60%_center]"
          />
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(25,21,18,0.55)_0%,rgba(25,21,18,0.1)_35%,rgba(25,21,18,0.85)_78%,#191512_100%)]"
          />
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(25,21,18,0.8)_0%,rgba(25,21,18,0.45)_45%,transparent_70%)]"
          />

          <div className="mx-auto w-full max-w-7xl px-4 pt-36 pb-12 sm:px-8 sm:pb-16">
            <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">
              <div className="max-w-3xl">
                <p className="eyebrow text-mostaza">Parrilla · San Juan del Río, Qro.</p>
                <h1 className="mt-4 font-display text-[3.4rem] leading-[0.88] font-extrabold uppercase sm:text-8xl lg:text-[6.75rem]">
                  Cortes a la brasa
                  <span className="block text-mostaza">en San Juan del Río</span>
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-cantera/80">
                  Carnes asadas, molcajetes y cocina internacional en una casa con patio de talavera,
                  comedor de bóveda y terraza.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <CallButton />
                  <a
                    href={business.links.directions}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center justify-center gap-2.5 rounded-full border border-cantera/35 px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-cantera hover:text-hierro"
                  >
                    <Icon name="pin" className="size-4" />
                    Cómo llegar
                  </a>
                </div>
                <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-cantera/75">
                  <a href="#resenas" className="inline-flex items-center gap-1.5 hover:text-white">
                    <Icon name="star" className="size-4 text-mostaza" />
                    <strong className="font-semibold text-cantera">{business.rating.value.toFixed(1)}</strong>
                    <span>· {business.rating.count.toLocaleString("es-MX")} reseñas en Google</span>
                  </a>
                  <OpenStatus />
                </div>
              </div>

              {/* Señal de kilómetro: así se llega, por la carretera 45 */}
              <div
                aria-label="Ubicados en el kilómetro 171 de la Carretera Federal 45"
                className="hidden w-32 shrink-0 flex-col items-center rounded-md border-2 border-hierro bg-cantera px-3 pt-2 pb-3 text-center text-hierro shadow-2xl lg:flex"
              >
                <span className="font-display text-xs font-bold tracking-[0.25em] uppercase">Carr. 45</span>
                <span className="my-1 h-px w-full bg-hierro/30" />
                <span className="font-display text-xs font-semibold tracking-[0.2em] uppercase">km</span>
                <span className="font-display text-5xl leading-none font-extrabold">171</span>
              </div>
            </div>
          </div>
        </section>

        <div className="talavera-strip" aria-hidden />

        {/* ───────── Datos rápidos ───────── */}
        <section aria-label="Información rápida" className="bg-hierro text-cantera">
          <dl className="mx-auto grid max-w-7xl grid-cols-2 divide-cantera/10 px-4 sm:px-8 lg:grid-cols-4 lg:divide-x">
            {[
              { icon: "clock", term: "Lunes a sábado", detail: "1:00 – 10:30 p.m." },
              { icon: "clock", term: "Domingo", detail: "2:00 – 6:30 p.m." },
              { icon: "parking", term: "Estacionamiento", detail: "Amplio y accesible" },
              { icon: "pin", term: "Carretera 45", detail: "km 171, Centro" },
            ].map((item) => (
              <div key={item.term} className="flex items-start gap-3 py-6 lg:px-6 lg:first:pl-0">
                <Icon name={item.icon as "clock"} className="mt-0.5 size-5 shrink-0 text-mostaza" />
                <div>
                  <dt className="text-xs tracking-wider text-cantera/55 uppercase">{item.term}</dt>
                  <dd className="mt-1 font-medium">{item.detail}</dd>
                </div>
              </div>
            ))}
          </dl>
        </section>

        {/* ───────── La carta ───────── */}
        <section id="carta" className="mx-auto max-w-7xl px-4 py-24 sm:px-8 sm:py-32">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeading eyebrow="La carta" title="Del carbón a tu mesa">
              Nuestra cocina gira alrededor de la brasa: cortes de res, molcajetes y pulpo, con entradas,
              pastas y sopas para completar la mesa. Porciones para compartir.
            </SectionHeading>
            <CallButton className="self-start lg:self-auto" label="Reservar mesa" />
          </div>

          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {signatureDishes.map((dish, i) => (
              <li key={dish.name} className={`group ${i % 2 === 1 ? "lg:mt-16" : ""}`}>
                <figure>
                  <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-cantera-deep">
                    <Image
                      src={dish.image}
                      alt={dish.alt}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                  <figcaption className="mt-4">
                    <h3 className="font-display text-2xl font-bold uppercase">{dish.name}</h3>
                    <p className="mt-1.5 leading-relaxed text-humo">{dish.description}</p>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>

          <div className="mt-24 border-t border-hierro/15 pt-12">
            <h3 className="eyebrow text-humo">También en la carta</h3>
            <div className="mt-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {moreFromMenu.map((group) => (
                <div key={group.title}>
                  <h4 className="font-display text-xl font-bold uppercase">{group.title}</h4>
                  <ul className="mt-3 space-y-2 text-hierro/80">
                    {group.items.map((item) => (
                      <li key={item} className="leading-snug">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mt-10 text-sm text-humo">
              Carta completa disponible en mesa a través de nuestro menú digital (código QR). Todos los
              precios incluyen IVA.
            </p>
          </div>
        </section>

        {/* ───────── El lugar ───────── */}
        <section id="lugar" className="bg-hierro py-24 text-cantera sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-8">
            <SectionHeading eyebrow="El lugar" title="Tres ambientes, una sola casa" tone="dark">
              Un comedor cálido de estilo campestre, con techo alto, patio colonial y una terraza amplia.
              Para la comida familiar del domingo, la reunión de trabajo o la cena tranquila.
            </SectionHeading>

            <div className="mt-14 grid gap-6 lg:grid-cols-12">
              {spaces.map((space, i) => (
                <figure
                  key={space.name}
                  className={
                    i === 0
                      ? "lg:col-span-5 lg:row-span-2"
                      : "lg:col-span-7"
                  }
                >
                  <div
                    className={`relative overflow-hidden rounded-sm bg-hierro-soft ${i === 0 ? "aspect-[4/5] lg:aspect-auto lg:h-[calc(100%-6.5rem)]" : "aspect-[16/9]"}`}
                  >
                    <Image
                      src={space.image}
                      alt={space.alt}
                      fill
                      sizes={i === 0 ? "(min-width: 1024px) 40vw, 100vw" : "(min-width: 1024px) 58vw, 100vw"}
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="mt-4 grid gap-1 sm:grid-cols-[10rem_1fr] sm:gap-6">
                    <h3 className="font-display text-2xl font-bold text-mostaza uppercase">{space.name}</h3>
                    <p className="leading-relaxed text-cantera/70">{space.description}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* ───────── Reseñas ───────── */}
        <section id="resenas" className="mx-auto max-w-7xl px-4 py-24 sm:px-8 sm:py-32">
          <div className="grid gap-14 lg:grid-cols-[minmax(0,22rem)_1fr]">
            <div>
              <h2 className="eyebrow text-brasa">Lo que dicen nuestros comensales</h2>
              <p className="mt-4 font-display text-[7rem] leading-none font-extrabold">
                {business.rating.value.toFixed(1).replace(".", ",")}
              </p>
              <div className="mt-2 flex gap-1 text-mostaza" aria-label={`${business.rating.value} de 5 estrellas`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Icon key={i} name="star" className="size-5" />
                ))}
              </div>
              <p className="mt-3 text-humo">
                Promedio de {business.rating.count.toLocaleString("es-MX")} reseñas en Google Maps.
              </p>
              <p className="mt-8 text-xs font-semibold tracking-wider text-humo uppercase">
                Lo que más mencionan
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {reviewTopics.map((topic) => (
                  <li key={topic} className="rounded-full border border-hierro/20 px-3 py-1 text-sm">
                    {topic}
                  </li>
                ))}
              </ul>
              <a
                href={business.links.reviews}
                target="_blank"
                rel="noopener"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brasa underline-offset-4 hover:underline"
              >
                Leer todas las reseñas
                <Icon name="arrow" className="size-4" />
              </a>
            </div>

            <ul className="grid content-start gap-px overflow-hidden rounded-sm bg-hierro/10 sm:grid-cols-2">
              {reviews.map((review, i) => (
                <li key={review.author} className={`bg-cantera p-8 ${i === 0 ? "sm:col-span-2" : ""}`}>
                  <blockquote>
                    <p className={`font-display leading-tight font-semibold ${i === 0 ? "text-3xl sm:text-4xl" : "text-2xl"}`}>
                      “{review.quote}”
                    </p>
                    <footer className="mt-5 text-sm text-humo">
                      <span className="font-semibold text-hierro">{review.author}</span> · {review.source}
                    </footer>
                  </blockquote>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ───────── Servicios ───────── */}
        <section aria-labelledby="servicios-title" className="bg-cantera-deep">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-8 sm:py-24">
            <h2 id="servicios-title" className="eyebrow text-brasa">
              Servicios
            </h2>
            <ul className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <li key={s.title} className="flex gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-hierro text-mostaza">
                    <Icon name={s.icon} className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold">{s.title}</h3>
                    <p className="mt-1 text-humo">{s.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ───────── Visítanos ───────── */}
        <section id="visitanos" className="mx-auto max-w-7xl px-4 py-24 sm:px-8 sm:py-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading eyebrow="Visítanos" title="Sobre la 45, en el km 171" />
              <address className="mt-8 text-lg leading-relaxed not-italic">
                {business.address.street}
                <br />
                Col. {business.address.neighborhood}, {business.address.postalCode}
                <br />
                {business.address.city}, {business.address.region}
              </address>
              <p className="mt-2 text-sm text-humo">Plus Code: {business.plusCode}</p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <CallButton label={`Llamar · ${business.phoneDisplay}`} />
                <a
                  href={business.links.directions}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center justify-center gap-2.5 rounded-full border border-hierro/25 px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-hierro hover:text-cantera"
                >
                  <Icon name="pin" className="size-4" />
                  Abrir en Google Maps
                </a>
              </div>

              <div className="mt-12">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-2xl font-bold uppercase">Horario</h3>
                  <OpenStatus className="text-sm text-humo" />
                </div>
                <div className="mt-3">
                  <HoursTable />
                </div>
              </div>
            </div>

            <div className="relative min-h-[420px] overflow-hidden rounded-sm bg-cantera-deep lg:min-h-full">
              <iframe
                title={`Mapa de ubicación de ${business.name}`}
                src={business.links.embed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 size-full border-0 grayscale-[35%] sepia-[15%]"
              />
            </div>
          </div>
        </section>

        {/* ───────── Preguntas frecuentes ───────── */}
        <section aria-labelledby="faq-title" className="border-t border-hierro/10">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-24 sm:px-8 lg:grid-cols-[minmax(0,22rem)_1fr]">
            <div>
              <p className="eyebrow text-brasa">Antes de venir</p>
              <h2 id="faq-title" className="mt-3 font-display text-5xl leading-[0.95] font-bold uppercase">
                Preguntas frecuentes
              </h2>
            </div>
            <div className="divide-y divide-hierro/15 border-y border-hierro/15">
              {faqs.map((f) => (
                <details key={f.q} className="group">
                  <summary className="flex cursor-pointer items-center justify-between gap-6 py-5 text-lg font-semibold">
                    {f.q}
                    <Icon
                      name="plus"
                      className="size-5 shrink-0 text-brasa transition-transform duration-200 group-open:rotate-45"
                    />
                  </summary>
                  <p className="-mt-1 max-w-2xl pb-6 leading-relaxed text-humo">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* ───────── Pie ───────── */}
      <footer className="bg-hierro pb-28 text-cantera md:pb-0">
        <div className="talavera-strip" aria-hidden />
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-8 md:grid-cols-3">
          <div>
            <Wordmark />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cantera/60">
              Restaurante de cortes y parrilla en San Juan del Río, Querétaro.
            </p>
          </div>
          <div className="text-sm leading-relaxed text-cantera/75">
            <p className="eyebrow text-mostaza">Dirección</p>
            <p className="mt-3">{fullAddress}</p>
            <a href={business.phoneHref} className="mt-3 inline-block font-semibold text-cantera hover:text-mostaza">
              {business.phoneDisplay}
            </a>
          </div>
          <div className="text-sm leading-relaxed text-cantera/75">
            <p className="eyebrow text-mostaza">Horario</p>
            <p className="mt-3">Lunes a sábado · 1:00 – 10:30 p.m.</p>
            <p>Domingo · 2:00 – 6:30 p.m.</p>
          </div>
        </div>
        <div className="mx-auto max-w-7xl border-t border-cantera/10 px-4 py-6 text-xs text-cantera/45 sm:px-8">
          © {business.name}. San Juan del Río, Qro.
        </div>
      </footer>

      {/* ───────── Barra fija móvil ───────── */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-cantera/10 bg-hierro/95 p-3 backdrop-blur md:hidden">
        <div className="grid grid-cols-[1fr_auto] gap-2">
          <CallButton className="w-full" label="Llamar para reservar" />
          <a
            href={business.links.directions}
            target="_blank"
            rel="noopener"
            aria-label="Cómo llegar"
            className="inline-flex items-center justify-center rounded-full border border-cantera/30 px-5 text-cantera"
          >
            <Icon name="pin" className="size-5" />
          </a>
        </div>
      </div>
    </>
  );
}
