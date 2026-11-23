import { useEffect, useState } from "react";
import { Link, useParams } from "wouter";
import { ArrowLeft, ArrowRight, Bath, BedDouble, CheckCircle, Download, FileText, Mail, Maximize2, Phone, Ruler, ZoomIn, ZoomOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { getHousePlan, HOUSE_PLANS, type PlanFloor } from "../housePlans";
import NotFound from "./NotFound";

const primaryButton = "bg-[#1C3F24] hover:bg-[#142F1A] text-white rounded-none";
const outlineButton = "rounded-none border-[#1C3F24]/25 text-[#1C3F24] hover:bg-[#1C3F24]/5";

export default function HousePlanDetail() {
  const { slug } = useParams<{ slug: string }>();
  const plan = getHousePlan(slug);
  const [expandedFloor, setExpandedFloor] = useState<PlanFloor | null>(null);
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    setExpandedFloor(null);
    setZoom(1);
    if (!plan) return;
    const previousTitle = document.title;
    document.title = `${plan.name} House Plan | Morse Construction`;
    return () => { document.title = previousTitle; };
  }, [plan]);

  if (!plan) return <NotFound />;

  const inquiryUrl = `/?plan=${encodeURIComponent(plan.slug)}#contact`;
  const related = HOUSE_PLANS.filter(item => item.slug !== plan.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#FBFBFA] text-[#2C2C2A] font-sans selection:bg-[#E5D5C5]">
      <header className="sticky top-0 z-50 bg-[#FBFBFA]/95 backdrop-blur-md border-b border-[#2C2C2A]/10">
        <div className="max-w-7xl mx-auto px-4 md:px-12 h-20 flex items-center justify-between gap-4">
          <Link href="/" aria-label="Morse Construction home">
            <img src="/assets/morse/morse_logo_web.png" alt="Morse Construction Inc." className="h-12 sm:h-14 w-auto object-contain" />
          </Link>
          <nav aria-label="Main navigation" className="hidden xl:flex items-center gap-7 text-[11px] font-bold uppercase tracking-widest text-[#2C2C2A]/70">
            <a href="/#about" className="hover:text-[#1C3F24]">About Us</a>
            <a href="/#process" className="hover:text-[#1C3F24]">Our Process</a>
            <a href="/#featured-project" className="hover:text-[#1C3F24]">Featured Build</a>
            <Link href="/plans" className="text-[#1C3F24]" aria-current="page">House Plans</Link>
            <Link href="/area-info" className="hover:text-[#1C3F24]">Area Information</Link>
            <Link href="/social" className="hover:text-[#1C3F24]">Posts</Link>
          </nav>
          <Button asChild className={`${primaryButton} shrink-0 px-4 sm:px-6`}>
            <a href={inquiryUrl}>Get Started</a>
          </Button>
        </div>
      </header>

      <main>
        <section className="bg-[#1C3F24] text-[#FBFBFA]">
          <div className="max-w-7xl mx-auto px-4 md:px-12 py-10 md:py-16">
            <Link href="/plans" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-[#E5D5C5] hover:text-white mb-10">
              <ArrowLeft className="w-4 h-4" /> Back to House Plans
            </Link>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div className="lg:col-span-5">
                <p className="text-xs uppercase tracking-[0.2em] text-[#E5D5C5] font-bold mb-4">Signature House Plans</p>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-5">{plan.name}</h1>
                <p className="text-lg text-white/80 leading-relaxed mb-7">{plan.summary}</p>
                <div className="flex flex-wrap gap-3 text-sm text-[#E5D5C5] mb-8">
                  <span className="inline-flex items-center gap-2"><Ruler className="w-4 h-4" /> {plan.areaLabel}</span>
                  <span className="text-white/30" aria-hidden="true">/</span>
                  <span>{plan.style}</span>
                </div>
                <Button asChild className="bg-[#F5EFE6] hover:bg-white text-[#1C3F24] rounded-none px-6 py-6 font-semibold">
                  <a href={inquiryUrl}>Inquire About This Plan <ArrowRight className="w-4 h-4 ml-2" /></a>
                </Button>
              </div>
              <div className="lg:col-span-7">
                <figure className="border border-white/20 bg-[#F5EFE6] shadow-xl">
                  <img src={plan.image} alt={`${plan.name} exterior, supplied by Morse Construction`} className="w-full h-auto" fetchPriority="high" />
                  <figcaption className="px-4 py-3 text-[10px] uppercase tracking-[0.16em] font-bold text-[#8A705E]">A Morse Construction home • {plan.name}</figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20 border-b border-[#2C2C2A]/10">
          <div className="max-w-7xl mx-auto px-4 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-7">
              <p className="text-xs uppercase tracking-[0.2em] text-[#8A705E] font-bold mb-3">Designed Around Your Life</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1C3F24] mb-6">A starting point for your home.</h2>
              <p className="text-[#2C2C2A]/75 leading-relaxed mb-7">{plan.description}</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                {plan.features.map(feature => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-[#2C2C2A]/75 leading-relaxed">
                    <CheckCircle className="w-4 h-4 text-[#1C3F24] shrink-0 mt-1" /> {feature}
                  </li>
                ))}
              </ul>
            </div>
            <aside className="lg:col-span-5 bg-[#F5EFE6]/60 border border-[#8A705E]/15 p-6 sm:p-8">
              <h2 className="font-serif text-2xl font-bold text-[#1C3F24] mb-6">Plan at a glance</h2>
              <dl className="space-y-5">
                {[
                  { Icon: Ruler, label: "Living area", value: plan.areaLabel },
                  { Icon: BedDouble, label: "Bedrooms", value: plan.bedsLabel },
                  { Icon: Bath, label: "Bathrooms", value: plan.bathsLabel },
                  { Icon: FileText, label: "Floor plans provided", value: `${plan.floors.length} ${plan.floors.length === 1 ? "drawing" : "drawings"}` },
                ].map(({ Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-3 border-b border-[#2C2C2A]/10 pb-4 last:border-0 last:pb-0">
                    <Icon className="w-5 h-5 text-[#8A705E] shrink-0 mt-0.5" />
                    <div className="flex-1 flex flex-wrap justify-between gap-x-4 gap-y-1 text-sm">
                      <dt className="text-[#2C2C2A]/65">{label}</dt>
                      <dd className="font-semibold text-[#1C3F24]">{value}</dd>
                    </div>
                  </div>
                ))}
              </dl>
              {plan.specNote && <p className="text-xs text-[#2C2C2A]/65 leading-relaxed mt-5">{plan.specNote}</p>}
            </aside>
          </div>
        </section>

        <section id="floor-plans" className="py-14 md:py-20 bg-[#F5EFE6]/30">
          <div className="max-w-7xl mx-auto px-4 md:px-12">
            <p className="text-xs uppercase tracking-[0.2em] text-[#8A705E] font-bold mb-3">Explore The Layout</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1C3F24] mb-4">Floor plans</h2>
            <p className="text-sm text-[#2C2C2A]/70 leading-relaxed max-w-2xl mb-10">Take a closer look at the layout, or download a PDF to help brainstorm with Gary. These drawings are for inspiration and discussion, not construction-ready plans.</p>
            <div className="space-y-10">
              {plan.floors.map(floor => (
                <article key={floor.pdf} className="bg-white border border-[#2C2C2A]/10">
                  <div className="p-5 md:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#2C2C2A]/10">
                    <div>
                      <h3 className="font-serif text-xl md:text-2xl font-bold text-[#1C3F24]">{floor.label}</h3>
                      {floor.area && <p className="text-xs text-[#2C2C2A]/60 mt-1">Living area shown: {floor.area}</p>}
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <Button variant="outline" className={outlineButton} onClick={() => { setExpandedFloor(floor); setZoom(1); }}>
                        <Maximize2 className="w-4 h-4 mr-2" /> Enlarge
                      </Button>
                      <Button asChild className={primaryButton}>
                        <a href={floor.pdf} download><Download className="w-4 h-4 mr-2" /> Download PDF</a>
                      </Button>
                    </div>
                  </div>
                  <button type="button" onClick={() => { setExpandedFloor(floor); setZoom(1); }} className="block w-full p-3 sm:p-6 focus-visible:outline-2 focus-visible:outline-[#1C3F24] focus-visible:outline-offset-2" aria-label={`Enlarge ${plan.name} ${floor.label.toLowerCase()} drawing`}>
                    <img src={floor.preview} alt={`${plan.name} ${floor.label.toLowerCase()} with room labels and dimensions`} loading="lazy" className="w-full h-auto max-h-[760px] object-contain" />
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#1C3F24] text-white py-14 md:py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <p className="text-xs uppercase tracking-[0.2em] text-[#E5D5C5] font-bold mb-3">Make It Your Own</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Let’s talk about {plan.name}.</h2>
              <p className="text-white/75 leading-relaxed max-w-2xl">Your home should reflect your land, your needs, and the way you live. Bring your ideas to Gary and explore how this design could be tailored to you.</p>
            </div>
            <div className="lg:col-span-5 lg:justify-self-end">
              <Button asChild className="bg-[#F5EFE6] hover:bg-white text-[#1C3F24] rounded-none px-6 py-6 font-semibold">
                <a href={inquiryUrl}>Inquire About This Plan <ArrowRight className="w-4 h-4 ml-2" /></a>
              </Button>
              <div className="flex flex-wrap gap-4 mt-5 text-sm text-[#E5D5C5]">
                <a href="tel:+19026813970" className="inline-flex items-center gap-2 hover:text-white"><Phone className="w-4 h-4" /> 902-681-3970</a>
                <a href={`mailto:info@morseconstruction.com?subject=${encodeURIComponent(`Inquiry about ${plan.name}`)}`} className="inline-flex items-center gap-2 hover:text-white"><Mail className="w-4 h-4" /> Email Gary</a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-12">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <h2 className="font-serif text-3xl font-bold text-[#1C3F24]">Explore more designs</h2>
              <Link href="/plans" className="text-sm font-semibold text-[#1C3F24] inline-flex items-center gap-2">View all house plans <ArrowRight className="w-4 h-4" /></Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map(item => (
                <Link key={item.slug} href={`/plans/${item.slug}`} className="group bg-white border border-[#2C2C2A]/10 hover:shadow-lg transition-shadow focus-visible:outline-2 focus-visible:outline-[#1C3F24]">
                  <div className="aspect-[4/3] bg-[#F5EFE6]/60 overflow-hidden"><img src={item.thumbnail} alt={item.name} loading="lazy" className="w-full h-full object-contain" /></div>
                  <div className="p-6">
                    <p className="text-xs text-[#8A705E] uppercase tracking-wider mb-2">{item.cardAreaLabel}</p>
                    <h3 className="font-serif text-xl font-bold text-[#1C3F24] mb-3">{item.name}</h3>
                    <span className="text-xs font-bold text-[#1C3F24] inline-flex items-center gap-2">View plan &amp; details <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#111] text-[#FBFBFA]/60 py-10">
        <div className="max-w-7xl mx-auto px-4 md:px-12 flex flex-col sm:flex-row justify-between gap-5 text-xs">
          <p>© {new Date().getFullYear()} Morse Construction Inc. All rights reserved.</p>
          <div className="flex flex-wrap gap-6"><Link href="/plans" className="hover:text-white">House Plans</Link><a href="/#contact" className="hover:text-white">Contact Us</a><Link href="/seven-things" className="hover:text-white">7 Things Series</Link></div>
        </div>
      </footer>

      <Dialog open={!!expandedFloor} onOpenChange={open => { if (!open) setExpandedFloor(null); }}>
        <DialogContent className="rounded-none w-[calc(100%-2rem)] sm:max-w-[1100px] max-h-[92dvh] p-4 sm:p-6 bg-[#FBFBFA]">
          <DialogTitle className="font-serif text-xl text-[#1C3F24] pr-8">{plan.name} — {expandedFloor?.label}</DialogTitle>
          <DialogDescription className="text-xs">Use the zoom controls and scroll to inspect room labels. Download the original PDF for full detail.</DialogDescription>
          <div className="flex flex-wrap items-center gap-2">
            <Button variant="outline" size="sm" className={outlineButton} disabled={zoom <= 1} aria-label="Zoom out" onClick={() => setZoom(value => Math.max(1, value - 0.5))}><ZoomOut className="w-4 h-4" /></Button>
            <span className="text-xs min-w-10 text-center">{Math.round(zoom * 100)}%</span>
            <Button variant="outline" size="sm" className={outlineButton} disabled={zoom >= 3} aria-label="Zoom in" onClick={() => setZoom(value => Math.min(3, value + 0.5))}><ZoomIn className="w-4 h-4" /></Button>
            <Button asChild size="sm" className={`${primaryButton} ml-auto`}><a href={expandedFloor?.pdf} download><Download className="w-4 h-4 mr-2" /> PDF</a></Button>
          </div>
          <div className="overflow-auto max-h-[65dvh] bg-white border border-[#2C2C2A]/10" tabIndex={0} aria-label="Scrollable enlarged floor-plan drawing">
            {expandedFloor && <img src={expandedFloor.preview} alt={`${plan.name} ${expandedFloor.label.toLowerCase()} enlarged`} style={{ width: `${zoom * 100}%`, maxWidth: "none" }} className="h-auto" />}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
