import Navbar from "@/components/Navbar";
import "./globals.css";
import { ClientProviders } from "@/components/client-providers";
import { Poppins } from "next/font/google";
import { Toaster } from 'sonner'

export const metadata = {
  title: "Ink Space",
  description: "Where creativity flows.",
  icons:'/logo.svg'
};

const poppins = Poppins({
  subsets: ["latin"], // Ensures only the required characters are loaded
  weight: ["400", "600", "700"], // Load specific font weights
  variable: "--font-poppins", // Assign a CSS variable for global usage
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
          <div className="w-[80%] max-w-6xl m-auto">
            <Toaster richColors />
            <Navbar/>
            {children}
          </div>
        </ClientProviders>
      </body>
    </html>
  );
}
