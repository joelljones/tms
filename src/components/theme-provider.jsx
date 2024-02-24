'use client';

// import { type ThemeProviderProps } from "next-themes/dist/types"
import { ThemeProvider as NextThemesProvider } from 'next-themes';

// export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
export function ThemeProvider({ children, ...props }) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
