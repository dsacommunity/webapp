import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from 'sonner';
import "./globals.css";
import { NextUIProviders } from "@/providers/NextUIProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DSACommunity",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextUIProviders>
          {children}
          <Toaster
            theme='system'
            toastOptions={{
              className: 'justify-center',
            }}
            expand
            richColors
            position='top-center'
            closeButton
            style={{textAlign: 'center'}}
          />
        </NextUIProviders>
      </body>
    </html>
  );
}
