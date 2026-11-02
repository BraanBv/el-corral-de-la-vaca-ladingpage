import { SITE_URL, business, faqs, hours, signatureDishes, spaces } from "@/lib/site";

const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export function JsonLd() {
  const restaurant = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${SITE_URL}/#restaurant`,
    name: business.name,
    alternateName: business.alternateName,
    description: business.description,
    url: SITE_URL,
    telephone: business.phoneE164,
    priceRange: business.priceRange,
    servesCuisine: business.cuisines,
    acceptsReservations: true,
    menu: `${SITE_URL}/#carta`,
    hasMap: business.links.maps,
    image: [
      `${SITE_URL}/images/fachada-terraza-noche.jpg`,
      ...spaces.map((s) => `${SITE_URL}${s.image}`),
      ...signatureDishes.map((d) => `${SITE_URL}${d.image}`),
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.region,
      postalCode: business.address.postalCode,
      addressCountry: business.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.geo.lat,
      longitude: business.geo.lng,
    },
    openingHoursSpecification: hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: `https://schema.org/${dayNames[h.day]}`,
      opens: h.open,
      closes: h.close,
    })),
    amenityFeature: [
      "Estacionamiento",
      "Terraza al aire libre",
      "Acceso para silla de ruedas",
      "Sanitarios accesibles",
    ].map((name) => ({ "@type": "LocationFeatureSpecification", name, value: true })),
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify([restaurant, faqPage]).replace(/</g, "\\u003c"),
      }}
    />
  );
}
