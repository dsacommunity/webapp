'use client'

import {NextUIProvider} from '@nextui-org/react'
import {ThemeProvider as NextThemesProvider} from "next-themes";

export function NextUIProviders({children}: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      {/* defaultTheme - system, dark, light */}
      <NextThemesProvider attribute="class" enableSystem defaultTheme="dark">
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  )
}