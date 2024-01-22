'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Shared/Navbar";
import Footer from "@/components/Shared/Footer";
import AuthProvider from "@/Providers/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

const inter = Inter({ subsets: ["latin"] });
const queryClient = new QueryClient()

// export const metadata = {
//   title: "ResuMagnet",
//   description: "A resume builder that will help you land your dream job.",
// };

export default function RootLayout({ children }) {
  return (
    <html data-theme="light" lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={inter.className}>
        <>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Navbar></Navbar>
          {children}
          <Footer></Footer>
        </AuthProvider>
      </QueryClientProvider>
        </>
      </body>
    </html>
  );
}
