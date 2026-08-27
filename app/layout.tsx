import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans, JetBrains_Mono } from "next/font/google";
import { WhatsAppFAB } from "@/components/ui/WhatsAppFAB";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm",
  display: "swap",
});

const jbMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono-jb",
  display: "swap",
});

const siteUrl = "https://www.vendo365.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Vendo365 | Landing pages y tiendas online para emprendedores",
    template: "%s | Vendo365",
  },
  description:
    "Vendo365 diseña landing pages y mini tiendas online para emprendedores y pymes en Colombia. Escríbenos por WhatsApp y revisamos juntos tu proyecto.",
  keywords: [
    "landing page colombia",
    "tienda online para emprendedores",
    "mini tienda online",
    "pagina web para pymes",
    "crear tienda online colombia",
  ],
  alternates: {
    canonical: siteUrl,
    types: {
      "application/rss+xml": `${siteUrl}/blog/rss.xml`,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: siteUrl,
    siteName: "Vendo365",
    title: "Vendo365 | Landing pages y tiendas online para emprendedores",
    description:
      "Landing pages y mini tiendas online para emprendedores y pymes en Colombia. Escríbenos por WhatsApp y revisamos juntos tu proyecto.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vendo365 | Landing pages y tiendas online para emprendedores",
    description:
      "Landing pages y mini tiendas online para emprendedores y pymes en Colombia. Escríbenos por WhatsApp y revisamos juntos tu proyecto.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Vendo365",
  url: siteUrl,
  logo: `${siteUrl}/icon.png`,
  email: "hola@vendo365.com",
  description:
    "Vendo365 diseña landing pages y mini tiendas online para emprendedores y pymes en Colombia.",
  areaServed: { "@type": "Country", name: "Colombia" },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      telephone: "+57-310-329-8346",
      areaServed: "CO",
      availableLanguage: ["Spanish"],
    },
  ],
  sameAs: ["https://www.wabot365.com"],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Diseño de landing pages y tiendas online",
  provider: { "@type": "Organization", name: "Vendo365", url: siteUrl },
  areaServed: { "@type": "Country", name: "Colombia" },
  audience: {
    "@type": "Audience",
    audienceType: "Emprendedores y pequeñas y medianas empresas",
  },
  description:
    "Diseño y publicación de landing pages y mini tiendas online a medida para emprendedores y pymes, con acompañamiento humano en cada proyecto.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
        />
      </head>
      <body className={`${jakarta.variable} ${dmSans.variable} ${jbMono.variable} antialiased noise-overlay`}>
        {children}
        <WhatsAppFAB phone="573103298346" message="Hola, quiero información sobre Vendo365" />
      </body>
    </html>
  );
}
