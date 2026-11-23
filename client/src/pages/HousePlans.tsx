import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, FileText, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import HousePlanCard from "@/components/HousePlanCard";
import { HOUSE_PLANS } from "../housePlans";

const catalog = [...HOUSE_PLANS].sort((a, b) => a.name.localeCompare(b.name));

export default function HousePlans() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "House Plans | Morse Construction";
    window.scrollTo({ top: 0, behavior: "instant" });
    return () => { document.title = previousTitle; };
  }, []);

  return (
    <div className="min-h-screen bg-[#FBFBFA] text-[#2C2C2A] font-sans selection:bg-[#E5D5C5]">
      <header className="sticky top-0 z-50 bg-[#FBFBFA]/95 backdrop-blur-md border-b border-[#2C2C2A]/10">
        <div className="max-w-7xl mx-auto px-4 md:px-12 h-20 flex items-center justify-between gap-4">
          <Link href="/" aria-label="Morse Construction home"><img src="/assets/morse/morse_logo_web.png" alt="Morse Construction Inc." className="h-12 sm:h-14 w-auto object-contain" /></Link>
          <nav aria-label="Main navigation" className="hidden xl:flex items-center gap-7 text-[11px] font-bold uppercase tracking-widest text-[#2C2C2A]/70">
            <a href="/#about" className="hover:text-[#1C3F24]">About Us</a>
            <a href="/#process" className="hover:text-[#1C3F24]">Our Process</a>
            <a href="/#featured-project" className="hover:text-[#1C3F24]">Featured Build</a>
            <Link href="/plans" className="text-[#1C3F24]" aria-current="page">House Plans</Link>
            <Link href="/area-info" className="hover:text-[#1C3F24]">Area Information</Link>
            <Link href="/social" className="hover:text-[#1C3F24]">Posts</Link>
          </nav>
          <Button asChild className="bg-[#1C3F24] hover:bg-[#142F1A] text-white rounded-none shrink-0 px-4 sm:px-6"><a href="/#contact">Get Started</a></Button>
        </div>
      </header>

      <main>
        <section className="bg-[#1C3F24] text-[#FBFBFA]">
          <div className="max-w-7xl mx-auto px-4 md:px-12 py-12 md:py-20">
            <Link href="/" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-[#E5D5C5] hover:text-white mb-8"><ArrowLeft className="w-4 h-4" /> Back to Home</Link>
            <p className="text-xs uppercase tracking-[0.2em] text-[#E5D5C5] font-bold mb-4">Signature House Plans</p>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">A starting point for<br className="hidden sm:block" /> your dream home.</h1>
            <p className="text-lg text-white/80 leading-relaxed max-w-2xl">Explore {HOUSE_PLANS.length} Morse Construction designs. Browse the homes, take a closer look at their layouts, and bring your ideas to Gary.</p>
            <div className="inline-flex items-start gap-2 text-xs text-[#E5D5C5] mt-7 leading-relaxed"><FileText className="w-4 h-4 shrink-0 mt-0.5" /><span>Floor plans are available to view and download for inspiration and discussion.</span></div>
          </div>
        </section>

        <section id="all-house-plans" aria-labelledby="catalog-heading" className="py-14 md:py-20 bg-[#F5EFE6]/30">
          <div className="max-w-7xl mx-auto px-4 md:px-12">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-10">
              <div><p className="text-xs uppercase tracking-[0.2em] text-[#8A705E] font-bold mb-2">Find Your Inspiration</p><h2 id="catalog-heading" className="font-serif text-3xl md:text-4xl font-bold text-[#1C3F24]">All house plans</h2></div>
              <p className="text-sm text-[#2C2C2A]/60">{HOUSE_PLANS.length} designs to explore</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {catalog.map(plan => <HousePlanCard key={plan.slug} plan={plan} />)}
            </div>
            <p className="text-xs text-[#2C2C2A]/60 leading-relaxed mt-10 max-w-3xl">These drawings are for brainstorming with Gary, not construction-ready plans. The photos show example homes; your layout, finishes, and specifications will be developed around your needs and property.</p>
          </div>
        </section>

        <section className="bg-[#1C3F24] text-white py-14 md:py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-12 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl"><p className="text-xs uppercase tracking-[0.2em] text-[#E5D5C5] font-bold mb-3">Make It Your Own</p><h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Your ideas. Your land. Your home.</h2><p className="text-white/75 leading-relaxed">Found a layout you like, or looking for something different? Let’s discuss the possibilities and how a design could be tailored to you.</p></div>
            <div className="shrink-0"><Button asChild className="bg-[#F5EFE6] hover:bg-white text-[#1C3F24] rounded-none px-6 py-6 font-semibold"><a href="/#contact">Discuss a Custom Design <ArrowRight className="w-4 h-4 ml-2" /></a></Button><a href="tel:+19026813970" className="flex items-center gap-2 text-sm text-[#E5D5C5] hover:text-white mt-5"><Phone className="w-4 h-4" /> 902-681-3970</a></div>
          </div>
        </section>
      </main>

      <footer className="bg-[#111] text-[#FBFBFA]/60 py-10"><div className="max-w-7xl mx-auto px-4 md:px-12 flex flex-col sm:flex-row justify-between gap-5 text-xs"><p>© {new Date().getFullYear()} Morse Construction Inc. All rights reserved.</p><div className="flex flex-wrap gap-6"><a href="/#contact" className="hover:text-white">Contact Us</a><Link href="/seven-things" className="hover:text-white">7 Things Series</Link><Link href="/area-info" className="hover:text-white">Area Information</Link></div></div></footer>
    </div>
  );
}
