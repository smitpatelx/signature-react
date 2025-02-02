import { GeneratorView } from "@spx/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Email Signature Generator - Generator",
  description: "Create a professional email signature for free with our generator",
};

export default function Generator() {
  return (
    <main className="flex-1 h-full flex flex-col bg-gradient-to-br from-zinc-950 from-0% via-lime-950/30 via-80% to-sky-950/30 to-[120%]">
      <GeneratorView />
    </main>
  );
}
