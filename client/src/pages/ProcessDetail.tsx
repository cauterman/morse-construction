import { Link, useParams } from "wouter";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getProcessStep, PROCESS_STEPS } from "../processData";


export default function ProcessDetail() {
  const params = useParams<{ slug: string }>();
  const currentStep = getProcessStep(params.slug);

  if (!currentStep) {
    return (
      <div className="min-h-screen bg-[#F5EFE6] text-[#2C2C2A] flex items-center justify-center px-4">
        <div className="max-w-xl text-center bg-white border border-[#2C2C2A]/10 p-10 shadow-xl">
          <p className="text-xs uppercase tracking-[0.2em] text-[#8A705E] font-bold mb-3">Our Process</p>
          <h1 className="font-serif text-3xl font-bold text-[#1C3F24] mb-4">Process step not found</h1>
          <p className="text-sm text-[#2C2C2A]/70 leading-relaxed mb-8">
            The process page you requested could not be found. Please return to the full process overview.
          </p>
          <Button asChild className="bg-[#1C3F24] hover:bg-[#142F1A] text-white rounded-none">
            <Link href="/#process">Return to Our Process</Link>
          </Button>
        </div>
      </div>
    );
  }

  const relatedSteps = PROCESS_STEPS.filter((step) => step.slug !== currentStep.slug);

  return (
    <div className="min-h-screen bg-[#FBFBFA] text-[#2C2C2A]">
      <header className="sticky top-0 z-50 bg-[#F5EFE6]/95 backdrop-blur-md border-b border-[#2C2C2A]/10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-12 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center group">
            <img src="/assets/morse/morse_logo_web.png" alt="Morse Construction Inc." className="h-12 sm:h-14 w-auto object-contain" />
          </Link>

          <nav className="hidden xl:flex items-center gap-7 text-[11px] font-bold uppercase tracking-widest text-[#2C2C2A]/70">
            <a href="/#about" className="hover:text-[#1C3F24] transition-colors">About Us</a>
            <a href="/#process" className="text-[#1C3F24] transition-colors">Process</a>
            <a href="/#featured-project" className="hover:text-[#1C3F24] transition-colors">Featured Build</a>
            <a href="/#plans" className="hover:text-[#1C3F24] transition-colors">Plans</a>
            <a href="/#faq" className="hover:text-[#1C3F24] transition-colors">FAQ</a>
            <Link href="/area-info" className="hover:text-[#1C3F24] transition-colors">Area Information</Link>
            <Link href="/social" className="hover:text-[#1C3F24] transition-colors">Posts</Link>
          </nav>

          <Button asChild className="bg-[#1C3F24] hover:bg-[#142F1A] text-white rounded-none hidden sm:inline-flex">
            <a href="/#contact">Contact Us</a>
          </Button>
        </div>
      </header>

      <main>
        <section className="relative bg-[#1C3F24] text-[#FBFBFA] overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FBFBFA_1px,transparent_1px)] [background-size:24px_24px]" />
          <div className="max-w-7xl mx-auto px-4 md:px-12 py-20 md:py-28 relative z-10">
            <Link href="/#process" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#E5D5C5] font-bold mb-8 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Our Process
            </Link>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
              <div className="lg:col-span-8">
                <span className="font-serif text-7xl md:text-8xl font-extrabold text-[#E5D5C5]/15 block mb-2">{currentStep.step}</span>
                <p className="text-xs uppercase tracking-[0.25em] text-[#E5D5C5] font-bold mb-4">{currentStep.eyebrow}</p>
                <h1 className="font-serif text-4xl md:text-6xl font-bold tracking-tight mb-6">{currentStep.title}</h1>
                <p className="text-lg md:text-xl text-[#FBFBFA]/80 leading-relaxed max-w-3xl">{currentStep.intro}</p>
              </div>
              <div className="lg:col-span-4 bg-[#F5EFE6] text-[#2C2C2A] p-8 border border-white/10 shadow-2xl">
                <p className="text-xs uppercase tracking-[0.2em] text-[#8A705E] font-bold mb-4">Key Takeaways</p>
                <div className="space-y-4">
                  {currentStep.takeaways.map((item) => (
                    <div key={item} className="flex gap-3">
                      <CheckCircle className="w-5 h-5 text-[#1C3F24] shrink-0 mt-0.5" />
                      <p className="text-sm leading-relaxed text-[#2C2C2A]/75">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24 bg-[#FBFBFA]">
          <div className="max-w-5xl mx-auto px-4 md:px-12">
            <div className="space-y-10">
              {currentStep.sections.map((section, index) => (
                <article key={section.heading} className="grid grid-cols-1 md:grid-cols-12 gap-6 border-b border-[#2C2C2A]/10 pb-10 last:border-0 last:pb-0">
                  <div className="md:col-span-3">
                    <span className="text-xs uppercase tracking-[0.2em] text-[#8A705E] font-bold">0{index + 1}</span>
                  </div>
                  <div className="md:col-span-9">
                    <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#1C3F24] mb-4">{section.heading}</h2>
                    <p className="text-[#2C2C2A]/75 leading-relaxed">{section.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#F5EFE6] border-y border-[#2C2C2A]/10">
          <div className="max-w-7xl mx-auto px-4 md:px-12">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-[#8A705E] font-bold block mb-2">Continue The Process</span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-[#1C3F24]">Explore the other steps</h2>
              </div>
              <Button asChild variant="outline" className="rounded-none border-[#1C3F24] text-[#1C3F24] hover:bg-[#1C3F24] hover:text-white w-fit">
                <Link href="/#process">View All Steps</Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedSteps.map((step) => (
                <Link
                  key={step.slug}
                  href={`/process/${step.slug}`}
                  className="group bg-white border border-[#2C2C2A]/10 p-6 hover:shadow-xl hover:border-[#1C3F24]/20 transition-all"
                >
                  <span className="text-xs uppercase tracking-[0.2em] text-[#8A705E] font-bold block mb-3">Step {step.step}</span>
                  <h3 className="font-serif text-xl font-bold text-[#1C3F24] mb-3">{step.title}</h3>
                  <p className="text-sm text-[#2C2C2A]/70 leading-relaxed mb-4">{step.summary}</p>
                  <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#1C3F24]">
                    Read More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
