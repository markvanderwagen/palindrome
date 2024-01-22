import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Palindrome Checker",
  description: "A simple palindrome checker made with Next.js and TailwindCSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <div className="p-5 md:p-0 bg-gradient-to-r from-[#e9f26f] to-[#337ebfc6] h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
