import { Sora, Space_Mono } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono-space",
  display: "swap",
});

export const metadata = {
  title: "LinguaBridge — Two voices. One conversation.",
  description:
    "Real-time voice translation for Ghana's native tongues. Bridging the gap between languages through the power of AI.",
  keywords: ["translation", "Ghana", "Twi", "Ga", "Ewe", "AI voice", "LinguaBridge"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${sora.variable} ${spaceMono.variable}`}>{children}</body>
    </html>
  );
}
