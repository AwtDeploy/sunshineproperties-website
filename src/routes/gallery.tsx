import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/page-shell";
import { Gallery } from "@/components/site/gallery";
import { CTA } from "@/components/site/cta";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery - Sunshine Marketing & Promoters" },
      { name: "description", content: "Brochure-quality visuals of our plotted developments, project layouts and site progress." },
      { property: "og:title", content: "Gallery - Sunshine Projects" },
      { property: "og:description", content: "A visual tour of our premium plotted developments in Karnataka." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: () => (
    <PageShell>
      <section className="relative pt-36 md:pt-44 pb-20 md:pb-28 overflow-hidden">
        <img src={hero} alt="Aerial view of plotted development" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/80" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-6 text-center">
          <span className="text-xs tracking-[0.22em] uppercase text-brand-orange font-medium">
            Gallery
          </span>
          <h1 className="mt-4 font-serif text-4xl md:text-6xl text-white leading-tight max-w-4xl mx-auto">
            A visual tour of our <span className="italic text-brand-orange">developments</span>.
          </h1>
          <p className="mt-5 text-white/80 max-w-2xl mx-auto">
            Real layouts, real progress, real homes - captured at golden hour.
          </p>
        </div>
      </section>
      <Gallery heading={false} />
      <CTA />
    </PageShell>
  ),
});
