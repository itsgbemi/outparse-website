import { Inter } from "next/font/google";
import "./globals.css";
import { Zalando_Sans_SemiExpanded } from 'next/font/google';

const zalando = Zalando_Sans_SemiExpanded({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-zalando',
});

export const metadata = {
  title: "Outparse - AI-Powered Grammar Checker",
  description: "Elevate your writing with AI-powered grammar checking, spelling correction, and style suggestions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={zalando.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Zalando+Sans+SemiExpanded:wght@200..900&display=swap" rel="stylesheet" />
      </head>
      <body className={`${zalando.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
