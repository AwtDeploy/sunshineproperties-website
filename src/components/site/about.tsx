import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./reveal";
import img from "@/assets/gallery-2.jpg";
import hero from "@/assets/hero.jpg";

export function About() {
  return (
    <section id="about">
      <div className="relative py-20 md:py-28 overflow-hidden">
        <img src={hero} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/80" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-6">
          <Reveal>
            <span className="text-xs tracking-[0.22em] uppercase text-brand-orange font-medium">
              About Sunshine
            </span>
            <h2 className="mt-4 font-serif text-3xl md:text-5xl leading-tight text-white max-w-2xl">
              Where vision meets <span className="italic text-brand-green">enduring value</span>.
            </h2>
          </Reveal>
        </div>
      </div>

      <div className="py-16 md:py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-4 md:px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal>
            <div className="relative">
              <img
                src={img}
                alt="Developed roads at Sunshine plotted development"
                loading="lazy"
                className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
              />
              <div className="absolute -bottom-6 -right-6 hidden sm:block bg-white rounded-xl p-5 shadow-lg border border-border/60">
                <div className="font-serif text-3xl text-brand-green">10+</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                  Years of Trust
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <span className="text-xs tracking-[0.22em] uppercase text-brand-orange font-medium">
              Built on trust &amp; transparency
            </span>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Sunshine Marketing &amp; Promoters is a professionally managed real estate
              company focused on high-value plotted developments in emerging growth
              corridors of Karnataka.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Every project we deliver is chosen for legal transparency, future
              appreciation, and the long-term security of our customers.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6">
              {[
                { v: "500+", l: "Happy Investors" },
                { v: "100%", l: "Legal Transparency" },
                { v: "End-to-End", l: "Registration Support" },
                { v: "Prime", l: "Growth Locations" },
              ].map((s) => (
                <div key={s.l} className="border-l-2 border-brand-orange/70 pl-4">
                  <div className="font-serif text-2xl text-foreground">{s.v}</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>

            <Button
              asChild
              variant="outline"
              className="mt-10 rounded-full border-brand-green text-brand-green hover:bg-brand-green hover:text-white"
            >
              <Link to="/about">
                Our story <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
