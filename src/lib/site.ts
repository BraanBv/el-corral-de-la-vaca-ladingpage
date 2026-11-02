// Fuente única de datos del restaurante. Todo lo publicado aquí proviene de
// información pública (ficha de Google Maps, directorios y fotos del lugar).

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://elcorraldelavaca.mx"
).replace(/\/$/, "");

export const business = {
  name: "El Corral de la Vaca",
  alternateName: "El Corral de la Vaca Steak",
  tagline: "Steak",
  description:
    "Restaurante de cortes a la brasa, molcajetes y cocina internacional en San Juan del Río, Querétaro. Comedor de bóveda, patio de talavera, terraza y estacionamiento amplio.",
  phoneDisplay: "427 272 5118",
  phoneHref: "tel:+524272725118",
  phoneE164: "+52 427 272 5118",
  address: {
    street: "Carretera Federal 45 México–Querétaro, km 171",
    neighborhood: "Centro",
    city: "San Juan del Río",
    region: "Querétaro",
    regionShort: "Qro.",
    postalCode: "76800",
    country: "MX",
  },
  geo: { lat: 20.3838024, lng: -100.0116119 },
  plusCode: "9XMQ+G9 San Juan del Río, Querétaro",
  rating: { value: 4.6, count: 2194 },
  priceRange: "$$",
  cuisines: ["Parrilla", "Cortes de carne", "Cocina mexicana", "Cocina internacional"],
  links: {
    maps: "https://maps.google.com/?cid=7733927947775188913",
    directions:
      "https://www.google.com/maps/dir/?api=1&destination=El%20Corral%20de%20la%20Vaca%2C%20San%20Juan%20del%20R%C3%ADo%2C%20Qro.",
    embed:
      "https://www.google.com/maps?q=El+Corral+de+la+Vaca,+San+Juan+del+R%C3%ADo,+Qro.&z=16&output=embed",
    reviews: "https://maps.google.com/?cid=7733927947775188913",
  },
} as const;

/** Días según Date#getDay(): 0 = domingo. Horas en formato 24 h, hora del centro de México. */
export const hours = [
  { day: 1, label: "Lunes", open: "13:00", close: "22:30" },
  { day: 2, label: "Martes", open: "13:00", close: "22:30" },
  { day: 3, label: "Miércoles", open: "13:00", close: "22:30" },
  { day: 4, label: "Jueves", open: "13:00", close: "22:30" },
  { day: 5, label: "Viernes", open: "13:00", close: "22:30" },
  { day: 6, label: "Sábado", open: "13:00", close: "22:30" },
  { day: 0, label: "Domingo", open: "14:00", close: "18:30" },
] as const;

export const TIME_ZONE = "America/Mexico_City";

export function formatHour(hhmm: string) {
  const [h, m] = hhmm.split(":").map(Number);
  const suffix = h >= 12 ? "p.m." : "a.m.";
  const h12 = h % 12 === 0 ? 12 : h % 12;
  return `${h12}:${String(m).padStart(2, "0")} ${suffix}`;
}

export const signatureDishes = [
  {
    name: "Cortes a la brasa",
    description:
      "Asados al carbón y servidos sobre plancha de hierro y base de madera, para que lleguen calientes hasta el último bocado.",
    image: "/images/rib-eye-brasa.jpg",
    alt: "Corte de res a la brasa servido en plancha de hierro sobre base de madera en El Corral de la Vaca",
    width: 1080,
    height: 1920,
  },
  {
    name: "Molcajete",
    description:
      "Carne, chorizo, nopal y queso gratinado, hirviendo en piedra volcánica. De lo más pedido por nuestros comensales.",
    image: "/images/molcajete.jpg",
    alt: "Molcajete de piedra volcánica con carne, chorizo, nopales y queso gratinado",
    width: 1800,
    height: 2400,
  },
  {
    name: "Pulpo asado",
    description: "Pulpo dorado a las brasas con arroz blanco y verduras al vapor.",
    image: "/images/pulpo-asado.jpg",
    alt: "Pulpo asado entero con arroz blanco y verduras al vapor",
    width: 1800,
    height: 2400,
  },
  {
    name: "A la parrilla",
    description: "Marcado a fuego directo, con cebollitas cambray y papas asadas.",
    image: "/images/corte-a-la-parrilla.jpg",
    alt: "Corte marcado a la parrilla con cebollitas cambray y papas asadas",
    width: 1800,
    height: 2400,
  },
] as const;

export const moreFromMenu = [
  {
    title: "Entradas",
    items: [
      "Chicharrón de rib eye",
      "Aguachile de rib eye",
      "Carpaccio de picaña con teriyaki, parmesano y pistache",
      "Cecina vaquera",
      "Mollejas de res",
      "Empanadas de elote con queso o carne molida",
    ],
  },
  {
    title: "Pastas y arroz",
    items: [
      "Fettuccine al pesto de cilantro con salmón a las brasas",
      "Fettuccine al chipotle con camarones",
      "Spaghetti a la florentina",
      "Arroz chino",
    ],
  },
  {
    title: "Sopas y cremas",
    items: ["Jugo de carne", "Sopa de tortilla", "Crema de pistache", "Crema de chile poblano"],
  },
  {
    title: "Ensaladas",
    items: [
      "Iceberg con queso de cabra, almendra y trufa blanca",
      "Navarra con nuez caramelizada y queso azul",
      "Porto Santo con pistache y balsámico",
    ],
  },
] as const;

export const spaces = [
  {
    name: "El patio",
    description:
      "Mesas de talavera azul y mostaza, palmas y una fuente de piedra al centro. Luz natural para comidas largas.",
    image: "/images/patio-talavera.jpg",
    alt: "Patio colonial con mesas de talavera azul y amarilla, palmas y fuente de piedra",
    width: 1800,
    height: 2400,
  },
  {
    name: "El comedor",
    description:
      "Techo alto de bóveda de ladrillo, vigas de madera, arcos y faroles. Manteles blancos para la comida de domingo o la reunión de trabajo.",
    image: "/images/comedor-boveda-arcos.jpg",
    alt: "Comedor con techo de bóveda de ladrillo, arcos blancos, faroles y mesas con mantel",
    width: 1800,
    height: 1350,
  },
  {
    name: "La terraza",
    description:
      "Bajo el letrero de Steak: muros de cantera, faroles de hierro y sillas de piel. Así se ve la noche en El Corral.",
    image: "/images/letrero-steak.jpg",
    alt: "Letrero iluminado de El Corral de la Vaca Steak en muro de cantera",
    width: 1800,
    height: 1012,
  },
] as const;

export const reviews = [
  {
    quote:
      "La comida es muy rica, el servicio es bueno, el lugar lindo y los precios son accesibles, van de acuerdo a las porciones.",
    author: "Susana M.",
    source: "Local Guide en Google",
  },
  {
    quote: "Excelente servicio, muy bonito lugar, platillos variados y deliciosos.",
    author: "Reseña destacada",
    source: "Google Maps",
  },
  {
    quote: "De mis restaurantes favoritos en SJR. La comida está muy buena y el trato de los meseros es impecable.",
    author: "Rincones con Ana",
    source: "Local Guide en Google",
  },
] as const;

export const reviewTopics = ["Platillos", "Molcajete", "Cortes de carne", "Pulpo"] as const;

export const services = [
  {
    icon: "phone",
    title: "Reservaciones por teléfono",
    text: "Llama al 427 272 5118 y aparta tu mesa.",
  },
  {
    icon: "parking",
    title: "Estacionamiento amplio",
    text: "Llegas directo desde la Carretera 45, con lugar de sobra.",
  },
  {
    icon: "accessible",
    title: "Accesible en silla de ruedas",
    text: "Entrada, estacionamiento, sanitarios y mesas accesibles.",
  },
  {
    icon: "sun",
    title: "Terraza y patio al aire libre",
    text: "Elige entre comedor techado, patio colonial o terraza.",
  },
  {
    icon: "glass",
    title: "Barra de bebidas",
    text: "Bebidas de la barra para acompañar tu corte.",
  },
  {
    icon: "qr",
    title: "Menú digital",
    text: "Consulta la carta desde tu celular con el código QR en mesa.",
  },
] as const;

export const faqs = [
  {
    q: "¿Dónde está El Corral de la Vaca?",
    a: "Sobre la Carretera Federal 45 México–Querétaro, km 171, colonia Centro, 76800 San Juan del Río, Querétaro.",
  },
  {
    q: "¿Cuál es el horario?",
    a: "De lunes a sábado de 1:00 p.m. a 10:30 p.m. y domingo de 2:00 p.m. a 6:30 p.m.",
  },
  {
    q: "¿Cómo hago una reservación?",
    a: "Llámanos al 427 272 5118. Te recomendamos reservar con anticipación para grupos y fines de semana.",
  },
  {
    q: "¿Tienen estacionamiento?",
    a: "Sí, contamos con estacionamiento amplio, incluidos lugares accesibles para personas en silla de ruedas.",
  },
  {
    q: "¿Qué tipo de comida sirven?",
    a: "Somos parrilla: cortes de res a la brasa, molcajetes, pulpo, además de entradas, pastas, sopas y ensaladas de cocina internacional.",
  },
  {
    q: "¿Es accesible para personas con movilidad reducida?",
    a: "Sí. La entrada, el estacionamiento, los sanitarios y las mesas son accesibles en silla de ruedas.",
  },
] as const;
