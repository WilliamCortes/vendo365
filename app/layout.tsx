import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Vendo365 - Tu Tienda Online + Redes Sociales Automáticas",
    description: "Tienda online lista en 48 horas con publicación diaria automática en redes sociales por solo $49.500/mes. Sin permanencia.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es">
            <body>{children}</body>
        </html>
    );
}
