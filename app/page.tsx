"use client"
import Image from "next/image";
import dynamic from "next/dynamic";
const ActionButton = dynamic(
  () => import("@baseline-ui/core").then((mod) => mod.ActionButton),
  { ssr: false }
);
const I18nProvider = dynamic(() => import("@baseline-ui/core").then((mod) => mod.I18nProvider), { ssr: false });
const ThemeProvider = dynamic(() => import("@baseline-ui/core").then((mod) => mod.ThemeProvider), { ssr: false });

export default function Home() {
  return (
    <ThemeProvider>
      <I18nProvider locale="en-US">
        <ActionButton label="Click Me" />
        <div>
          <h1>Home</h1>
        </div>
      </I18nProvider>
    </ThemeProvider>
  );
}
