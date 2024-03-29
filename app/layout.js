
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Shared/Navbar";
import Footer from "@/components/Shared/Footer";
import AuthProvider from "@/Providers/AuthProvider";
import Providers from "@/Providers/providers";
import { Toaster } from 'sonner'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ResuMagnet",
  description: "A resume builder that will help you land your dream job.",
};

export default function RootLayout({ children }) {
  return (
    <html data-theme="light" lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body suppressHydrationWarning={true} className={inter.className}>
        <>
      <Providers>
        <AuthProvider>
          <Navbar></Navbar>
          {children}
          <Footer></Footer>
          <Toaster position="top-center" richColors closeButton  />
        </AuthProvider>
      </Providers>
        </>
      </body>
    </html>
  );
}
