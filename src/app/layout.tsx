import "@spx/styles/globals.css";
import { Inter } from "next/font/google";
import { Header } from "@spx/components";
import { ToastProvider } from "@spx/components";

const interFont = Inter({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interFont.className} antialiased flex flex-col min-h-screen font-sans bg-zinc-950`}
      >
        <Header />

        <ToastProvider>
          {children}
        </ToastProvider>
      </body>
    </html>
  );
}
