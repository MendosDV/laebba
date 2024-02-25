  import type { Metadata } from "next";
  import { Nunito } from "next/font/google";
  import "./globals.css";
  import SizeScreenProvider from "@/context";
  import Navbar from '../components/Navbar';
  import Footer from '../components/Footer';
  import PageTransition from "../components/PageTransition";
  import SocialDesktop from '../components/SocialMedia/SocialDesktop';

  const nunito = Nunito({
    weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
    variable: "--font-nunito",
  });

  export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
  };

  export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body className={nunito.className}>
          <SizeScreenProvider>
            <div className="flex flex-col h-screen justify-between">
              <Navbar />
                <div className="px-10 mt-10 mb-10">
                  <SocialDesktop />
                  <PageTransition>
                    <main className="mb-auto">
                      {children}
                    </main>
                  </PageTransition>
                </div>
              <Footer />
            </div>
          </SizeScreenProvider>
        </body>
      </html>
    )
  }
