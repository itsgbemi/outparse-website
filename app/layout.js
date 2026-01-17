import { Inter } from "next/font/google";
import "./globals.css";

// Use Inter as fallback, load Zalando Sans via CSS
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Outparse - AI-Powered Grammar Checker",
  description: "Elevate your writing with AI-powered grammar checking, spelling correction, and style suggestions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Zalando+Sans+SemiExpanded:wght@200..900&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className} style={{ fontFamily: "'Zalando Sans SemiExpanded', sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
