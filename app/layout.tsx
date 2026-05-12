import type { ReactNode } from "react";

// The root layout is a thin pass-through. The real <html> and <body> live in
// app/[locale]/layout.tsx so the lang attribute can be set from the URL
// segment. The middleware always redirects "/" to "/{defaultLocale}", so this
// component never renders its children at runtime — it only exists to satisfy
// Next.js's requirement of a root layout file. shadcn init tried to inject a
// Geist font here; reverted because Outfit is the project font and is wired in
// the [locale] layout.
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
