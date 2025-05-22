import Navbar from "@/components/Navbar";
import "./globals.css";
import { ClientProviders } from "@/components/client-providers";
import { ReactQueryProvider } from "../components/ReactQueryClientProvider";
import { Toaster } from 'sonner'
import { Poppins } from "next/font/google";

export const metadata = {
  title: "Ink Space",
  description: "Where creativity flows.",
  icons: '/logo.svg',
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={poppins.variable}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/logo.svg" />
      </head>
      <body>
        <ClientProviders
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ReactQueryProvider>
            <div className="w-[80%] max-w-6xl m-auto">
              <Toaster richColors />
              <Navbar />
              {children}
            </div>
          </ReactQueryProvider>
        </ClientProviders>
      </body>
    </html>
  );
}
