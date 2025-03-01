"use client";

import { ThemeProvider } from "@/components/theme-provider";
import { AuthProvider } from "@/context/authContext";

export function ClientProviders({ children }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <AuthProvider>
        {children}
      </AuthProvider>
    </ThemeProvider>
  );
}
