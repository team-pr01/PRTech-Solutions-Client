import { GRADIENT_BG } from "@/assets";
import Container from "@/components/Reusable/Container/Container";
import Heading from "@/components/Reusable/Heading/Heading";
import Image from "next/image";

export default function USPSection() {
  return (
    <div className="bg-secondary-60 w-full overflow-hidden relative flex h-full flex-col items-center justify-center py-10">
      <div className="absolute right-[-40px] top-10 h-[460px] w-[250px] pointer-events-none select-none z-0">
        <Image
          src={GRADIENT_BG.gradientServiceRight}
          alt="Gradient"
          fill
          className="object-contain"
        />
      </div>
      <div className="absolute left-[-40px]  h-[460px] w-[250px] pointer-events-none select-none z-0">
        <Image
          src={GRADIENT_BG.gradientServiceRight}
          alt="Gradient"
          fill
          className="object-contain scale-x-[-1]"
        />
      </div>

      <Container>
        {/* Heading */}
        <Heading
          heading="Why Teams Choose Us Before They Build"
          subHeading="A practical, engineering-first approach focused on clarity,
                  performance, and long-term scalability — not rushed
                  development."
          align="left"
        />

        {/* USP Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* USP 1 */}
          <div className="group rounded-2xl border border-gray-200 p-8 transition hover:border-gray-900">
            <h3 className="text-xl font-semibold text-neutral-10">
              Feasibility Before Code
            </h3>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We don’t jump into development blindly. Every project starts by
              validating technical feasibility, scope, and trade-offs — so you
              avoid building the wrong thing or over-engineering too early.
            </p>
          </div>

          {/* USP 2 */}
          <div className="group rounded-2xl border border-gray-200 p-8 transition hover:border-gray-900">
            <h3 className="text-xl font-semibold text-gray-900">
              Built for Speed, Not Just Looks
            </h3>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Performance is treated as a requirement, not an afterthought. We
              design and develop systems optimized for fast load times, clean
              architecture, and real-world usage from day one.
            </p>
            <p className="mt-3 text-sm text-gray-500">
              Focused on Core Web Vitals, scalability, and production readiness.
            </p>
          </div>

          {/* USP 3 */}
          <div className="group rounded-2xl border border-gray-200 p-8 transition hover:border-gray-900">
            <h3 className="text-xl font-semibold text-gray-900">
              Future-Proof Architecture Planning
            </h3>
            <p className="mt-4 text-gray-600 leading-relaxed">
              We design systems with growth in mind — so your product can evolve
              from MVP to scale without costly rewrites. Clear phases, clean
              boundaries, and room to grow.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <p className="text-lg text-gray-700">
            Not sure which approach fits your idea?
          </p>
          <a
            href="/feasibility-review"
            className="inline-flex items-center mt-4 text-base font-medium text-gray-900 border-b border-gray-900 hover:opacity-70 transition"
          >
            Start with a Free Feasibility Review →
          </a>
        </div>
      </Container>
    </div>
  );
}
