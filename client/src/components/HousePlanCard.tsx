import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { HousePlan } from "../housePlans";

export default function HousePlanCard({ plan }: { plan: HousePlan }) {
  return (
    <Link
      href={`/plans/${plan.slug}`}
      aria-label={`View ${plan.name} photos and floor plans`}
      className="group block h-full focus-visible:outline-2 focus-visible:outline-[#1C3F24] focus-visible:outline-offset-4"
    >
      <Card className="h-full py-0 gap-0 rounded-none border border-[#2C2C2A]/10 transition-all overflow-hidden bg-white group-hover:shadow-lg group-hover:border-[#1C3F24]/25 flex flex-col">
        <div className="relative aspect-[4/3] overflow-hidden bg-[#F5EFE6]/60">
          <img src={plan.thumbnail} alt={`${plan.name} exterior by Morse Construction`} loading="lazy" className="w-full h-full object-contain" />
        </div>
        <CardContent className="p-6 flex flex-col flex-1">
          <span className="text-[10px] uppercase tracking-wider text-[#8A705E] font-bold block mb-2">{plan.style}</span>
          <h3 className="font-serif text-xl font-bold text-[#1C3F24] mb-2">{plan.name}</h3>
          <p className="text-xs font-semibold text-[#1C3F24] mb-3">{plan.cardAreaLabel}</p>
          <p className="text-xs text-[#2C2C2A]/70 leading-relaxed mb-5 flex-1">{plan.summary}</p>
          <div className="pt-4 border-t border-[#2C2C2A]/5 text-xs text-[#2C2C2A]/60 space-y-1 mb-4">
            <p>{plan.bedroomSummary}</p>
            <p>{plan.bathsLabel} bathrooms</p>
          </div>
          <span className="inline-flex items-center gap-2 text-[11px] font-bold text-[#1C3F24]">
            View plan &amp; details <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </span>
        </CardContent>
      </Card>
    </Link>
  );
}
