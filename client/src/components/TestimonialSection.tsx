import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { TESTIMONIALS, type Testimonial } from "../testimonials";

export default function TestimonialSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState<number[]>([0]);
  const [selected, setSelected] = useState<Testimonial | null>(null);
  const [reduceMotion, setReduceMotion] = useState(false);
  const dialogOpener = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!api) return;
    const update = () => {
      setCurrent(api.selectedScrollSnap());
      setVisibleSlides(api.slidesInView());
    };
    update();
    api.on("select", update);
    api.on("reInit", update);
    api.on("slidesInView", update);
    return () => {
      api.off("select", update);
      api.off("reInit", update);
      api.off("slidesInView", update);
    };
  }, [api]);

  return (
    <section id="testimonials" aria-labelledby="testimonials-heading" className="scroll-mt-24 py-20 md:py-24 bg-[#F5EFE6]/50 border-t border-[#2C2C2A]/10">
      <div className="max-w-5xl mx-auto px-4 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
          <span className="text-xs uppercase tracking-[0.2em] text-[#8A705E] font-bold block mb-2">TESTIMONIALS</span>
          <h2 id="testimonials-heading" className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-[#1C3F24]">What Our Clients Say</h2>
          <p className="text-sm text-[#2C2C2A]/65 leading-relaxed mt-4">In their own words: experiences shared by Morse Construction clients.</p>
        </div>

        <Carousel
          setApi={setApi}
          opts={{ align: "start", loop: true, slidesToScroll: 1, inViewThreshold: 0.5, duration: reduceMotion ? 0 : 25 }}
          aria-label="Client testimonials"
          className="w-full"
          tabIndex={0}
        >
          <CarouselContent className="-ml-6 items-stretch">
            {TESTIMONIALS.map((testimonial, index) => {
              const isVisible = visibleSlides.includes(index);
              return (
                <CarouselItem key={testimonial.id} className="pl-6 md:basis-1/2 flex" aria-label={`${index + 1} of ${TESTIMONIALS.length}: ${testimonial.author}`} aria-hidden={!isVisible}>
                  <article data-testimonial-id={testimonial.id} className="w-full bg-white/75 border border-[#8A705E]/15 border-l-2 border-l-[#8A705E] p-6 sm:p-8 flex flex-col min-h-[340px] md:min-h-[360px]">
                    <Quote className="w-7 h-7 text-[#8A705E]/50 mb-5 shrink-0" aria-hidden="true" />
                    <blockquote className="font-serif text-lg italic leading-relaxed text-[#2C2C2A]/90 mb-6 flex-1">
                      <p>“{testimonial.excerpt}”</p>
                    </blockquote>
                    <div className="pt-5 border-t border-[#8A705E]/15">
                      <p className="font-semibold text-[#1C3F24]">{testimonial.author}</p>
                      <p className="text-[10px] uppercase tracking-[0.15em] text-[#2C2C2A]/55 mt-1">Morse Construction clients</p>
                      {testimonial.hasFullLetter && (
                        <button type="button" tabIndex={isVisible ? 0 : -1} onClick={event => { dialogOpener.current = event.currentTarget; setSelected(testimonial); }} aria-label={`Read full testimonial from ${testimonial.author}`} className="inline-flex items-center gap-2 text-xs font-semibold text-[#1C3F24] mt-4 py-2 hover:underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-[#1C3F24] focus-visible:outline-offset-4">
                          Read full testimonial <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                        </button>
                      )}
                    </div>
                  </article>
                </CarouselItem>
              );
            })}
          </CarouselContent>

          <div className="mt-7 flex flex-col sm:flex-row items-center justify-between gap-5">
            <p className="text-xs text-[#2C2C2A]/55">Swipe or use the arrows to explore {TESTIMONIALS.length} testimonials.</p>
            <div className="flex items-center gap-4">
              <Button type="button" variant="outline" size="icon" aria-label="Previous testimonial" onClick={() => api?.scrollPrev()} disabled={!api} className="size-10 rounded-none border-[#1C3F24]/25 text-[#1C3F24] bg-transparent hover:bg-[#1C3F24]/5">
                <ArrowLeft className="w-4 h-4" />
              </Button>
              <p aria-live="polite" aria-atomic="true" className="text-xs text-[#1C3F24] font-semibold min-w-10 text-center">
                <span className="sr-only">Starting at testimonial </span>{current + 1}<span aria-hidden="true"> / </span><span className="sr-only"> of </span>{TESTIMONIALS.length}
              </p>
              <Button type="button" variant="outline" size="icon" aria-label="Next testimonial" onClick={() => api?.scrollNext()} disabled={!api} className="size-10 rounded-none border-[#1C3F24]/25 text-[#1C3F24] bg-transparent hover:bg-[#1C3F24]/5">
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center gap-1 mt-5" role="group" aria-label="Choose a testimonial">
            {TESTIMONIALS.map((testimonial, index) => (
              <button key={testimonial.id} type="button" aria-label={`Show testimonial from ${testimonial.author}`} aria-current={current === index ? "true" : undefined} onClick={() => api?.scrollTo(index)} className="size-9 inline-flex items-center justify-center focus-visible:outline-2 focus-visible:outline-[#1C3F24] focus-visible:outline-offset-2">
                <span className={`block rounded-full transition-colors ${current === index ? "w-6 h-2 bg-[#1C3F24]" : "size-2 bg-[#8A705E]/35 hover:bg-[#8A705E]"}`} />
              </button>
            ))}
          </div>
        </Carousel>
      </div>

      <Dialog open={!!selected} onOpenChange={open => { if (!open) setSelected(null); }}>
        <DialogContent onCloseAutoFocus={event => { event.preventDefault(); dialogOpener.current?.focus(); }} className="rounded-none w-[calc(100%-2rem)] sm:max-w-2xl max-h-[90dvh] p-6 sm:p-8 bg-[#FBFBFA]">
          <DialogTitle className="font-serif text-2xl text-[#1C3F24] pr-7">{selected?.author}</DialogTitle>
          <DialogDescription className="text-xs text-[#8A705E] uppercase tracking-wider">Full client testimonial</DialogDescription>
          <div className="overflow-y-auto max-h-[65dvh] pr-3 overscroll-contain" tabIndex={0} aria-label="Scrollable full testimonial">
            <blockquote className="space-y-5 text-sm sm:text-base text-[#2C2C2A]/80 leading-relaxed">
              {selected?.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
            </blockquote>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
