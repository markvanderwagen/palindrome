import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <div className="bg-gradient-to-r from-[#e9f26f] to-[#337ebfc6] h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
