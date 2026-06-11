import React, { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Compass, 
  Hammer, 
  MapPin, 
  Phone, 
  Mail, 
  ChevronRight, 
  CheckCircle, 
  ArrowRight, 
  FileText, 
  Info,
  Calendar,
  Layers,
  Sparkles,
  Eye,
  Play,
  Utensils,
  Home as HomeIcon,
  HelpCircle,
  Lightbulb,
  Check,
  Plus,
  Minus
} from "lucide-react";
import { toast } from "sonner";
// Removed SEVEN_THINGS_DATA import as it is now moved to its own dedicated page
import { FAQ_DATA } from "../faqData";
import { PROCESS_STEPS } from "../processData";

// High-quality generated and client drone assets
const ASSETS = {
  hero: "/assets/morse/pine_st_hero_26ff1fc6.jpg",
  interior: "https://d2xsxph8kpxj0f.cloudfront.net/310519663704077519/QQvH5TfEQgJbe5jUyfqBbm/modern-interior-ZNqz3uXRpyuAPhHRpVGfwF.webp",
  
  // Client's actual drone project photos (enhanced)
  drone1: "/assets/morse/pine-st-drone-1_7083d3e5.jpg",
  drone2: "/assets/morse/pine-st-drone-2_d296594b.jpg",
  drone3: "/assets/morse/pine-st-drone-3_240ed8e6.jpg",
  drone4: "/assets/morse/pine-st-drone-4_f01795a2.jpg",
  drone5: "/assets/morse/pine-st-drone-5_3254456e.jpg"
};

// Existing house plans data structured beautifully
const HOUSE_PLANS = [
  {
    name: "The Byrne",
    size: "1,440 sq. ft.",
    beds: 3,
    baths: 2,
    style: "Modern Bungalow",
    desc: "A beautifully compact design maximizing natural light and single-level convenience.",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "The Blomidon",
    size: "2,804 sq. ft.",
    beds: 4,
    baths: 3.5,
    style: "Contemporary Estate",
    desc: "Designed for panoramic views of the Annapolis Valley with floor-to-ceiling glass.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "The Lockwood",
    size: "1,288 sq. ft.",
    beds: 2,
    baths: 2,
    style: "Classic Cottage",
    desc: "Cozy yet spacious living, perfect for downsizers or a premium secondary home.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80"
  },
  {
    name: "The Modern",
    size: "2,273 sq. ft.",
    beds: 3,
    baths: 2.5,
    style: "Architectural Minimalist",
    desc: "Bold lines, flat roof accents, and sustainable materials built for modern living.",
    image: ASSETS.hero
  }
];

// Testimonials from original site
const TESTIMONIALS = [
  {
    quote: "You took the time to get to know us and educate us about the home building process – allowing us the chance to collaborate on a design that is both functional, beautiful and ideally suited to our family.",
    author: "Scott & Stephanie Hale",
    project: "Custom Family Home"
  },
  {
    quote: "The whole package that you offer your clients (not just building them a house) certainly exceeded our expectations of what a contractor's role can be. This kind of service is invaluable and worth much in time and money.",
    author: "Blaine & Karen North",
    project: "Modern Timber Renovation"
  }
];

// Helper to resolve icon string to Lucide icon
const IconResolver = ({ name, className }: { name: string; className?: string }) => {
  switch (name) {
    case "Hammer": return <Hammer className={className} />;
    case "Utensils": return <Utensils className={className} />;
    case "Home": return <HomeIcon className={className} />;
    case "Compass": return <Compass className={className} />;
    case "Sparkles": return <Sparkles className={className} />;
    case "Layers": return <Layers className={className} />;
    default: return <HelpCircle className={className} />;
  }
};

export default function Home() {
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null);
  const [activeDrone, setActiveDrone] = useState<string>(ASSETS.drone1);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "", planInterest: "" });
  const [isSubmittingContact, setIsSubmittingContact] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  
  // Seven Things state removed (moved to dedicated page)

  // State for the new FAQ accordion
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill out all required fields.");
      return;
    }

    setIsSubmittingContact(true);

    try {
      const submissionData = new URLSearchParams({
        "form-name": "contact",
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        planInterest: formData.planInterest,
        message: formData.message,
      });

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: submissionData.toString(),
      });

      if (!response.ok) {
        throw new Error(`Netlify Forms submission failed with status ${response.status}`);
      }

      toast.success("Thank you! Your message has been sent. We will contact you shortly.");
      setFormData({ name: "", email: "", phone: "", message: "", planInterest: "" });
    } catch (error) {
      console.error("Contact form submission failed", error);
      toast.error("We could not send your message. Please call or email Morse Construction directly.");
    } finally {
      setIsSubmittingContact(false);
    }
  };

  const placeholderToast = (featureName: string) => {
    toast.info(`${featureName} feature coming soon in v2.0!`);
  };

  // activeTopic removed

  return (
    <div className="min-h-screen bg-[#FBFBFA] text-[#2C2C2A] font-sans relative selection:bg-[#E5D5C5]">
      
      {/* Blueprint Grid Lines (Architectural Modernism Signature) */}
      <div className="fixed inset-0 pointer-events-none z-40 flex justify-between px-4 md:px-12 max-w-7xl mx-auto opacity-5">
        <div className="w-[1px] h-full bg-[#2C2C2A]" />
        <div className="w-[1px] h-full bg-[#2C2C2A] hidden md:block" />
        <div className="w-[1px] h-full bg-[#2C2C2A] hidden md:block" />
        <div className="w-[1px] h-full bg-[#2C2C2A]" />
      </div>

      {/* Header */}
      <header className="sticky top-0 bg-[#FBFBFA]/90 backdrop-blur-md border-b border-[#2C2C2A]/10 z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-12 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center group">
            <img src="/assets/morse/morse_logo_web.png" alt="Morse Construction Inc." className="h-12 sm:h-14 w-auto object-contain" />
          </Link>
          
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
            <a href="#about" className="hover:text-[#1C3F24] transition-colors">About Us</a>
            <a href="#process" className="hover:text-[#1C3F24] transition-colors">Our Process</a>
            <a href="#featured-project" className="hover:text-[#1C3F24] transition-colors">Featured Project</a>
            <Link href="/seven-things" className="hover:text-[#1C3F24] transition-colors">7 Things Series</Link>
            <Link href="/social" className="hover:text-[#1C3F24] transition-colors">Posts</Link>
            <Link href="/area-info" className="hover:text-[#1C3F24] transition-colors">Area Information</Link>
            <a href="#plans" className="hover:text-[#1C3F24] transition-colors">House Plans</a>
            <a href="#faq" className="hover:text-[#1C3F24] transition-colors">FAQ</a>
          </nav>

          <div className="flex items-center gap-4">
            <Button 
              onClick={() => {
                const element = document.getElementById('contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-[#1C3F24] hover:bg-[#142F1A] text-[#FBFBFA] font-medium rounded-none px-6 transition-all transform active:scale-97"
            >
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1C3F24]/10 text-[#1C3F24] text-xs font-semibold uppercase tracking-wider rounded-full mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                Custom Home Builders • Nova Scotia
              </div>
              
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-[#1C3F24] mb-6">
                We Build <br />
                <span className="italic font-normal text-[#8A705E]">Dreams</span>
              </h1>
              
              {/* Gary's exact new introduction text */}
              <p className="text-lg text-[#2C2C2A]/80 leading-relaxed mb-8 max-w-xl">
                Based in the Annapolis Valley, Morse Construction is one of the top custom home builders in Nova Scotia! We craft custom homes that perfectly marry architectural elegance with your family's daily needs.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => {
                    const element = document.getElementById('plans');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-[#1C3F24] hover:bg-[#142F1A] text-[#FBFBFA] font-medium rounded-none px-8 py-6 text-base flex items-center gap-2"
                >
                  Explore House Plans <ArrowRight className="w-5 h-5" />
                </Button>
                <Button 
                  onClick={() => {
                    const element = document.getElementById('featured-project');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  variant="outline" 
                  className="border-[#2C2C2A]/20 hover:bg-[#2C2C2A]/5 text-[#2C2C2A] font-medium rounded-none px-8 py-6 text-base"
                >
                  View Actual Builds
                </Button>
              </div>

              {/* Trust Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-[#2C2C2A]/10">
                <div>
                  <span className="block text-3xl font-serif font-bold text-[#1C3F24]">30</span>
                  <span className="text-xs uppercase tracking-wider text-[#2C2C2A]/60">Years Crafting</span>
                </div>
                <div>
                  <span className="block text-3xl font-serif font-bold text-[#1C3F24]">100%</span>
                  <span className="text-xs uppercase tracking-wider text-[#2C2C2A]/60">On Budget</span>
                </div>
                <div>
                  <span className="block text-3xl font-serif font-bold text-[#1C3F24]">Annapolis</span>
                  <span className="text-xs uppercase tracking-wider text-[#2C2C2A]/60">Valley Roots</span>
                </div>
              </div>
            </div>

            {/* Right Image Collage (Asymmetric Grid) */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] md:aspect-[16/10] lg:aspect-square rounded-none overflow-hidden shadow-2xl border border-[#2C2C2A]/10">
                <img 
                  src={ASSETS.hero} 
                  alt="Modern Custom Home by Morse Construction" 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C3F24]/40 to-transparent pointer-events-none" />
              </div>
              
              {/* Overlapping Floating Material Card */}
              <div className="absolute -bottom-8 -left-4 md:-left-8 bg-[#F5EFE6] border border-[#8A705E]/20 p-6 shadow-xl max-w-xs hidden sm:block">
                <p className="font-serif text-sm italic text-[#8A705E] mb-2">"Every beam, joint, and window is placed with intention and care."</p>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-[1px] bg-[#8A705E]" />
                  <span className="text-[10px] uppercase tracking-wider font-bold text-[#2C2C2A]/60">Our Craft Promise</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Philosophy & Craftsmanship Section (with YouTube Video Integration) */}
      <section id="about" className="py-24 bg-[#F5EFE6]/50 border-y border-[#2C2C2A]/10">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Video Column */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative border border-[#2C2C2A]/10 shadow-xl overflow-hidden aspect-video bg-black group">
                {!isVideoPlaying ? (
                  <div className="absolute inset-0 w-full h-full flex items-center justify-center cursor-pointer" onClick={() => setIsVideoPlaying(true)}>
                    <img 
                      src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80" 
                      alt="Modern Architectural Construction video cover" 
                      className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C3F24]/60 to-transparent pointer-events-none" />
                    
                    {/* Pulsing Play Button */}
                    <div className="relative z-10 w-16 h-16 bg-[#1C3F24] hover:bg-[#142F1A] text-[#FBFBFA] rounded-full flex items-center justify-center shadow-2xl transform transition-transform group-hover:scale-110">
                      <Play className="w-6 h-6 fill-current ml-1" />
                    </div>
                    
                    <div className="absolute bottom-4 left-4 text-xs font-semibold uppercase tracking-widest text-[#FBFBFA] flex items-center gap-2">
                      <Layers className="w-4 h-4 text-[#E5D5C5]" />
                      Watch Our Building Journey
                    </div>
                  </div>
                ) : (
                  <iframe 
                    className="absolute inset-0 w-full h-full"
                    src="https://www.youtube.com/embed/UHObSEb5XvI?autoplay=1" 
                    title="Morse Construction Video" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  />
                )}
              </div>
            </div>

            {/* Right Content Column */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <span className="text-xs uppercase tracking-[0.2em] text-[#8A705E] font-bold block mb-2">THE MORSE DIFFERENCE</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#1C3F24] mb-6">
                Detailed specifications for each project.
              </h2>
              {/* Gary's exact new "About Us" copy */}
              <p className="text-[#2C2C2A]/80 leading-relaxed mb-6">
                When you contract with a builder, you want to ensure there is a balance between design, cost and time. We work with every client to set out the details of the project including design, specifications, costs, terms, time frame and other details. 
              </p>
              <p className="text-[#2C2C2A]/80 leading-relaxed mb-6">
                We don’t have a standard set of construction specifications … we build detailed specifications for each project together with our clients. This attention to detail before signing a contract and starting construction eliminates cost overruns.
              </p>
              <p className="text-[#2C2C2A]/80 leading-relaxed mb-8">
                Building or renovating your home may be one of the biggest and exciting projects you will undertake in your life. We are committed to working closely with our clients to make sure the entire process is smooth and enjoyable, and that you have a finished product that you will take pride in.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-[#1C3F24] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-serif font-bold text-base text-[#1C3F24]">Custom Specifications</h4>
                    <p className="text-sm text-[#2C2C2A]/70">No standard boilerplate. Built specifically for your project.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-[#1C3F24] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-serif font-bold text-base text-[#1C3F24]">Energy Efficiency</h4>
                    <p className="text-sm text-[#2C2C2A]/70">We insulate homes well beyond Building Code requirements.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Reordered 4 Pillars (Dream, Design, Coordinate, Build) with Gary's exact copy */}
      <section id="process" className="py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.2em] text-[#8A705E] font-bold block mb-2">OUR PROCESS</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-[#1C3F24]">
              Our 4-Step Building Process
            </h2>
            <p className="text-sm text-[#2C2C2A]/70 mt-4 leading-relaxed">
              We know that in the excitement of building a new home, there are things that can often be forgotten. That is why we have developed a 4-step process which ensures the right amount of time is spent with our clients before a project starts and the right steps are in place as construction progresses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((pillar) => (
              <div key={pillar.slug} className="bg-white border border-[#2C2C2A]/10 p-8 relative hover:shadow-xl hover:border-[#1C3F24]/20 transition-all group flex flex-col justify-between min-h-[340px]">
                <div>
                  <span className="font-serif text-5xl font-extrabold text-[#8A705E]/10 absolute top-4 right-6 group-hover:text-[#8A705E]/20 transition-colors">
                    {pillar.step}
                  </span>
                  <h3 className="font-serif text-xl font-bold tracking-wider text-[#1C3F24] mb-4 mt-4">{pillar.title}</h3>
                  <p className="text-xs text-[#2C2C2A]/70 leading-relaxed mb-6">{pillar.summary}</p>
                </div>
                <Button asChild variant="outline" className="rounded-none border-[#1C3F24] text-[#1C3F24] hover:bg-[#1C3F24] hover:text-white text-[10px] uppercase tracking-widest font-bold w-fit px-4 py-2 h-auto">
                  <Link href={`/process/${pillar.slug}`}>
                    Read More <ArrowRight className="w-3.5 h-3.5 ml-2" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Real Project Showcase (Integrating Google Drive Drone Photos) */}
      <section id="featured-project" className="py-24 bg-[#1C3F24] text-[#FBFBFA] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#FBFBFA_1px,transparent_1px)] [background-size:24px_24px]" />
        
        <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-5">
              <span className="text-xs uppercase tracking-[0.2em] text-[#E5D5C5] font-bold block mb-2">PROVEN WORK</span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                Featured Build: <br />
                <span className="italic font-normal text-[#E5D5C5]">3 Pine St. Residence</span>
              </h2>
              <p className="text-[#FBFBFA]/80 leading-relaxed mb-6">
                This beautiful estate, captured via high-definition drone photography, is a prime example of Morse Construction's ability to execute massive custom architectural builds on challenging terrains.
              </p>
              <p className="text-[#FBFBFA]/80 leading-relaxed mb-8">
                Featuring multi-tiered rooflines, premium structural engineering, and integrated landscape coordination, 3 Pine St. stands as a testament to our craftsmanship in the Annapolis Valley.
              </p>

              {/* Dynamic Project Details */}
              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/10 mb-8">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#E5D5C5] block">Location</span>
                  <span className="font-serif text-lg font-semibold">New Minas, NS</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#E5D5C5] block">Project Type</span>
                  <span className="font-serif text-lg font-semibold">Custom New Build</span>
                </div>
              </div>

              {/* Thumbnails Navigation */}
              <div className="flex gap-3">
                {[ASSETS.drone1, ASSETS.drone2, ASSETS.drone3, ASSETS.drone4, ASSETS.drone5].map((img, i) => (
                  <button 
                    key={i}
                    onClick={() => setActiveDrone(img)}
                    className={`w-16 h-16 border-2 transition-all overflow-hidden ${
                      activeDrone === img ? "border-[#E5D5C5] scale-105" : "border-white/10 hover:border-white/40"
                    }`}
                  >
                    <img src={img} alt={`Drone thumbnail ${i+1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Large Image Viewport */}
            <div className="lg:col-span-7 relative">
              <div className="aspect-[16/10] overflow-hidden border border-white/10 shadow-2xl relative group">
                <img 
                  src={activeDrone} 
                  alt="3 Pine St Drone Shot" 
                  className="w-full h-full object-cover transition-all duration-700 ease-out"
                />
                <div className="absolute top-4 left-4 bg-[#1C3F24]/90 backdrop-blur-sm px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[#E5D5C5] flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5" />
                  Actual Project Drone Photo
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Seven Things section has been completely moved to its own dedicated /seven-things page to make the homepage shorter and more concise */}

      {/* House Plans Showcase */}
      <section id="plans" className="py-24 bg-[#F5EFE6]/30 border-t border-[#2C2C2A]/10">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-[#8A705E] font-bold block mb-2">CURATED ARCHITECTURE</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-[#1C3F24]">
                Signature House Plans
              </h2>
              <p className="text-sm text-[#2C2C2A]/70 mt-2">
                Click on any plan to inspect details or customize it for your land.
              </p>
            </div>
            <Button 
              onClick={() => placeholderToast("Custom Blueprint Request")}
              variant="outline" 
              className="mt-4 md:mt-0 border-[#1C3F24]/20 hover:bg-[#1C3F24]/5 text-[#1C3F24] rounded-none font-medium"
            >
              Request Custom Blueprint
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {HOUSE_PLANS.map((plan, i) => (
              <Card 
                key={i} 
                className={`rounded-none border transition-all cursor-pointer overflow-hidden bg-white ${
                  selectedPlan === i 
                    ? "ring-2 ring-[#1C3F24] border-transparent shadow-xl" 
                    : "border-[#2C2C2A]/10 hover:shadow-lg"
                }`}
                onClick={() => setSelectedPlan(selectedPlan === i ? null : i)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={plan.image} alt={plan.name} className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 right-3 bg-[#1C3F24] text-[#FBFBFA] text-xs font-semibold px-2.5 py-1 uppercase tracking-wider">
                    {plan.size}
                  </div>
                </div>
                <CardContent className="p-6">
                  <span className="text-xs uppercase tracking-wider text-[#8A705E] font-bold block mb-1">{plan.style}</span>
                  <h3 className="font-serif text-xl font-bold text-[#1C3F24] mb-2">{plan.name}</h3>
                  <p className="text-xs text-[#2C2C2A]/70 line-clamp-2 mb-4">{plan.desc}</p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-[#2C2C2A]/5 text-xs text-[#2C2C2A]/60">
                    <span>{plan.beds} Bedrooms</span>
                    <span>•</span>
                    <span>{plan.baths} Bathrooms</span>
                  </div>

                  {selectedPlan === i && (
                    <div className="mt-4 pt-4 border-t border-[#1C3F24]/10 bg-[#1C3F24]/5 p-3 text-center">
                      <p className="text-xs text-[#1C3F24] font-semibold mb-2">Interested in this design?</p>
                      <Button 
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          setFormData(prev => ({ ...prev, planInterest: plan.name }));
                          const element = document.getElementById('contact');
                          element?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="bg-[#1C3F24] hover:bg-[#142F1A] text-[#FBFBFA] w-full text-xs rounded-none"
                      >
                        Inquire About {plan.name}
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#F5EFE6]/50 border-t border-[#2C2C2A]/10">
        <div className="max-w-5xl mx-auto px-4 md:px-12">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.2em] text-[#8A705E] font-bold block mb-2">TESTIMONIALS</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-[#1C3F24]">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="border-l-2 border-[#8A705E] pl-8 py-4 flex flex-col justify-between">
                <p className="font-serif text-lg italic leading-relaxed text-[#2C2C2A]/90 mb-6">
                  "{t.quote}"
                </p>
                <div>
                  <span className="block font-bold text-[#1C3F24]">{t.author}</span>
                  <span className="text-xs text-[#2C2C2A]/60">{t.project}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: Interactive FAQ Accordion Section (Gary's 10 FAQs) */}
      <section id="faq" className="py-24 bg-white border-t border-[#2C2C2A]/10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.2em] text-[#8A705E] font-bold block mb-2">HAVE QUESTIONS?</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-[#1C3F24]">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-[#2C2C2A]/70 mt-3 max-w-xl mx-auto">
              We've been building custom homes for 30 years. In that time, we've heard every question. This covers the basics—and some things you might not have thought to ask.
            </p>
          </div>

          <div className="space-y-4">
            {FAQ_DATA.map((faq, index) => {
              const isOpen = openFAQIndex === index;
              return (
                <div 
                  key={index} 
                  className={`border transition-all ${
                    isOpen ? "border-[#1C3F24] bg-[#1C3F24]/5" : "border-[#2C2C2A]/10 bg-white"
                  }`}
                >
                  {/* Accordion Header */}
                  <button
                    onClick={() => setOpenFAQIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  >
                    <span className="font-serif text-lg font-bold text-[#1C3F24] pr-4">
                      {index + 1}. {faq.question}
                    </span>
                    <span className={`p-1 border rounded-full shrink-0 ${isOpen ? "border-[#1C3F24] text-[#1C3F24]" : "border-[#2C2C2A]/20 text-[#2C2C2A]/60"}`}>
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>

                  {/* Accordion Content */}
                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 border-t border-[#2C2C2A]/5 text-sm text-[#2C2C2A]/80 leading-relaxed space-y-4">
                      <p className="font-medium text-[#2C2C2A]">{faq.answer}</p>
                      
                      {faq.subsections && faq.subsections.map((sub, i) => (
                        <div key={i} className="mt-3 bg-white/50 p-4 border border-[#2C2C2A]/5 rounded-sm">
                          <h5 className="font-bold text-[#1C3F24] mb-2">{sub.title}</h5>
                          <div className="whitespace-pre-line text-xs space-y-1">{sub.content}</div>
                        </div>
                      ))}

                      {faq.points && faq.points.map((point, i) => (
                        <p key={i} className="text-xs italic border-l-2 border-[#8A705E] pl-3 text-[#2C2C2A]/70 mt-3">
                          {point}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12 bg-[#F5EFE6]/30 p-6 border border-[#8A705E]/10">
            <p className="text-sm font-serif italic text-[#2C2C2A]/80">
              "Still have questions? Give us a call at 902-681-3970 or email us at info@morseconstruction.com."
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-24 bg-[#F5EFE6]/20 border-t border-[#2C2C2A]/10">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Contact Details */}
            <div className="lg:col-span-5">
              <span className="text-xs uppercase tracking-[0.2em] text-[#8A705E] font-bold block mb-2">CONTACT US</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-[#1C3F24] mb-6">
                Let's discuss your next project.
              </h2>
              <p className="text-[#2C2C2A]/80 leading-relaxed mb-8">
                We'd love to sit down and discuss your next building project at your convenience. Give us a call, drop by our office, or fill out the form.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-[#1C3F24] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-[#1C3F24]">Office Address</h4>
                    <p className="text-sm text-[#2C2C2A]/70">8999 Commercial Street, New Minas, NS B4N 3E3</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-[#1C3F24] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-[#1C3F24]">Phone</h4>
                    <p className="text-sm text-[#2C2C2A]/70">(902) 681-3970</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-[#1C3F24] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-[#1C3F24]">Email</h4>
                    <p className="text-sm text-[#2C2C2A]/70">info@morseconstruction.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Modern Contact Form */}
            <div className="lg:col-span-7 bg-white border border-[#2C2C2A]/10 p-8 md:p-10 shadow-lg">
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleContactSubmit}
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="planInterest" value={formData.planInterest} />
                <p className="hidden" aria-hidden="true">
                  <label>
                    Do not fill this out if you are human: <input name="bot-field" />
                  </label>
                </p>
                {formData.planInterest && (
                  <div className="bg-[#1C3F24]/5 border border-[#1C3F24]/10 p-3 text-xs text-[#1C3F24] font-semibold flex items-center justify-between">
                    <span>Inquiring about house plan: {formData.planInterest}</span>
                    <button 
                      type="button" 
                      onClick={() => setFormData(prev => ({ ...prev, planInterest: "" }))}
                      className="text-[#2C2C2A]/60 hover:text-[#2C2C2A]"
                    >
                      Clear
                    </button>
                  </div>
                )}
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-bold text-[#2C2C2A]/70 mb-2">Name *</label>
                    <input 
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#FBFBFA] border border-[#2C2C2A]/10 p-3 text-sm focus:outline-none focus:border-[#1C3F24] transition-colors"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-bold text-[#2C2C2A]/70 mb-2">Email *</label>
                    <input 
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#FBFBFA] border border-[#2C2C2A]/10 p-3 text-sm focus:outline-none focus:border-[#1C3F24] transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-bold text-[#2C2C2A]/70 mb-2">Phone Number</label>
                  <input 
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#FBFBFA] border border-[#2C2C2A]/10 p-3 text-sm focus:outline-none focus:border-[#1C3F24] transition-colors"
                    placeholder="(902) 000-0000"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-bold text-[#2C2C2A]/70 mb-2">Your Message *</label>
                  <textarea 
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#FBFBFA] border border-[#2C2C2A]/10 p-3 text-sm focus:outline-none focus:border-[#1C3F24] transition-colors resize-none"
                    placeholder="Tell us about your dream home..."
                  />
                </div>

                <Button 
                  type="submit"
                  disabled={isSubmittingContact}
                  className="bg-[#1C3F24] hover:bg-[#142F1A] text-[#FBFBFA] font-medium rounded-none w-full py-4 text-base disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmittingContact ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#111] text-[#FBFBFA]/60 py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6 text-xs">
          <div className="flex items-center gap-3">
            <span>© {new Date().getFullYear()} Morse Construction Inc. All rights reserved.</span>
          </div>
          
          <div className="flex flex-wrap gap-6 justify-center">
            <Link href="/seven-things" className="hover:text-[#FBFBFA] transition-colors">7 Things Series</Link>
            <Link href="/area-info" className="hover:text-[#FBFBFA] transition-colors">Area Info</Link>
            <Link href="/social" className="hover:text-[#FBFBFA] transition-colors">Posts</Link>
            <button onClick={() => placeholderToast("Privacy Policy")} className="hover:text-[#FBFBFA] transition-colors">Privacy Policy</button>
            <button onClick={() => placeholderToast("Terms of Service")} className="hover:text-[#FBFBFA] transition-colors">Terms of Service</button>
          </div>
        </div>
      </footer>

    </div>
  );
}
