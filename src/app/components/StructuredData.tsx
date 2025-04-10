"use client";

export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "ChronoQuest | Cyber Relic Hunt",
    startDate: "2025-04-15T10:00",
    endDate: "2025-04-16T18:00",
    eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: "BML Munjal University",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Gurugram",
        addressRegion: "Haryana",
        postalCode: "122413",
        addressCountry: "IN",
      },
    },
    image: ["https://www.chronoquest.xyz/android-chrome-512x512.png"],
    description:
      "ChronoQuest is a futuristic cyber relic hunt hosted at BML Munjal University. Solve AI, DSA, cybersecurity, Kaggle, and HTB challenges in a dystopian tech war.",
    organizer: {
      "@type": "Organization",
      name: "ChronoQuest",
      url: "https://www.chronoquest.xyz",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}