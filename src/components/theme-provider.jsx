'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
// import { type ThemeProviderProps } from "next-themes/dist/types"

// export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
export function ThemeProvider({ children, ...props }) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
