import React, { useEffect, useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, MapPin, GraduationCap, Compass, ExternalLink, Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AreaInfo() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const communities = [
    { name: "County of Kings", url: "https://www.countyofkings.ca/", desc: "The municipal heart of the Annapolis Valley, offering beautiful landscapes and strong local governance." },
    { name: "New Minas", url: "https://newminas.com/", desc: "The retail and commercial hub of the valley, offering excellent shopping, dining, and community facilities." },
    { name: "Kentville", url: "https://kentville.ca/", desc: "The professional center of the county, featuring beautiful parks, historic streets, and active recreational facilities." },
    { name: "Wolfville", url: "https://www.wolfville.ca/", desc: "A vibrant university town famous for its historic architecture, local wineries, cultural events, and beautiful dykelands." },
    { name: "Canning", url: "https://canning.ca/", desc: "A historic village near the famous Cape Split, offering access to beautiful beaches, farming, and hiking." },
    { name: "Berwick", url: "https://www.berwick.ca/", desc: "Known as Nova Scotia's Apple Capital, offering a friendly, tight-knit community with a rich agricultural heritage." },
    { name: "Kingston", url: "https://www.kingstonnovascotia.ca/", desc: "A friendly village located in the western end of Kings County, offering great community events and family parks." },
    { name: "Greenwood", url: "https://www.greenwoodnovascotia.com/", desc: "Home to 14 Wing Greenwood, the largest air base in Atlantic Canada, offering robust local commerce and recreational amenities." }
  ];

  const education = [
    { name: "Annapolis Valley Regional Centre for Education", url: "https://avrce.ca/", desc: "The regional school board supervising public schools in the Annapolis Valley, dedicated to student success." },
    { name: "AVRCE Schools List", url: "https://avrce.ca/our-schools", desc: "A comprehensive directory of public elementary, middle, and high schools across local communities." },
    { name: "Acadia University", url: "https://www2.acadiau.ca/home.html", desc: "Located in Wolfville, Acadia is one of Canada's most prestigious liberal arts universities, founded in 1838." },
    { name: "Nova Scotia Community College (NSCC)", url: "https://www.nscc.ca", desc: "Providing hands-on vocational and technical education with local campuses serving Valley students." },
    { name: "Landmark East School", url: "https://www.landmarkeast.org/", desc: "A renowned co-educational day and boarding school in Wolfville, specialized for students with learning differences." }
  ];

  const resources = [
    { name: "Efficiency Nova Scotia", url: "https://www.efficiencyns.ca/", desc: "The province's energy efficiency administrator, offering great rebates and advice for energy-efficient home building." },
    { name: "Nova Scotia Highway Cameras", url: "https://novascotia.ca/tran/cameras/all.asp", desc: "Real-time highway and weather cameras to check road conditions across the province before traveling." },
    { name: "Nova Scotia Government", url: "https://www.novascotia.ca/", desc: "The official provincial government portal for licenses, permits, services, and provincial guidelines." },
    { name: "Nova Scotia Tourism", url: "https://www.novascotia.com/", desc: "Explore things to do, places to stay, and beautiful scenic routes across our ocean playground." },
    { name: "Annapolis Valley Tourism", url: "http://valleytourism.ca/", desc: "Your guide to local wineries, farmers markets, craft breweries, historic sites, and outdoor adventures." },
    { name: "Valley Events Calendar", url: "https://valleyevents.ca/", desc: "The ultimate community-sourced calendar for local concerts, festivals, farmers markets, and theater." }
  ];

  return (
    <div className="min-h-screen bg-[#FBF8F5] text-slate-800 flex flex-col font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#FBF8F5]/90 backdrop-blur-md border-b border-slate-200/50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center group">
            <img src="/assets/morse/morse_logo_web.png" alt="Morse Construction Inc." className="h-12 sm:h-14 w-auto object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/#about" className="text-sm font-semibold text-slate-600 hover:text-[#0F4C3A] transition-colors">About Us</Link>
            <Link href="/#process" className="text-sm font-semibold text-slate-600 hover:text-[#0F4C3A] transition-colors">Our Process</Link>
            <Link href="/#gallery" className="text-sm font-semibold text-slate-600 hover:text-[#0F4C3A] transition-colors">Featured Project</Link>
            <Link href="/seven-things" className="text-sm font-semibold text-slate-600 hover:text-[#0F4C3A] transition-colors">7 Things Series</Link>
            <Link href="/social" className="text-sm font-semibold text-slate-600 hover:text-[#0F4C3A] transition-colors">Posts</Link>
            <Link href="/area-info" className="text-sm font-bold text-[#0F4C3A] border-b-2 border-[#0F4C3A] pb-1">Area Information</Link>
            <Link href="/#faq" className="text-sm font-semibold text-slate-600 hover:text-[#0F4C3A] transition-colors">FAQ</Link>
          </nav>

          <div className="hidden lg:flex items-center gap-6">
            <Link href="/#contact">
              <Button className="bg-[#0F4C3A] hover:bg-[#083328] text-white font-bold px-5 py-5 rounded-md transition-all duration-300 shadow-sm hover:shadow-md">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-600 hover:text-[#0F4C3A] transition-colors"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FBF8F5] border-b border-slate-200 px-4 pt-2 pb-6 flex flex-col gap-4 animate-fadeIn">
            <Link href="/#about" onClick={() => setMobileMenuOpen(false)} className="text-base font-semibold text-slate-700 py-2 border-b border-slate-100">About Us</Link>
            <Link href="/#process" onClick={() => setMobileMenuOpen(false)} className="text-base font-semibold text-slate-700 py-2 border-b border-slate-100">Our Process</Link>
            <Link href="/seven-things" onClick={() => setMobileMenuOpen(false)} className="text-base font-semibold text-slate-700 py-2 border-b border-slate-100">7 Things Series</Link>
            <Link href="/social" onClick={() => setMobileMenuOpen(false)} className="text-base font-semibold text-slate-700 py-2 border-b border-slate-100">Posts</Link>
            <Link href="/area-info" onClick={() => setMobileMenuOpen(false)} className="text-base font-bold text-[#0F4C3A] py-2 border-b border-slate-100">Area Information</Link>
            <Link href="/#faq" onClick={() => setMobileMenuOpen(false)} className="text-base font-semibold text-slate-700 py-2 border-b border-slate-100">FAQ</Link>
            <Link href="/#contact" onClick={() => setMobileMenuOpen(false)} className="text-base font-semibold text-slate-700 py-2">Contact</Link>
          </div>
        )}
      </header>

      {/* Hero Header */}
      <section className="bg-[#0F4C3A] text-white py-16 sm:py-24 relative overflow-hidden">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-[#A37B5C] hover:text-white mb-6 transition-colors group">
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Homepage
          </Link>
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#A37B5C] bg-[#A37B5C]/10 border border-[#A37B5C]/20 px-3 py-1.5 rounded-full inline-block mb-4">
              Nova Scotia Living
            </span>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold tracking-tight leading-tight mb-6">
              Welcome to the Annapolis Valley
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-light">
              Many of our clients move here from out of province, and it's easy to see why. Nestled between two mountain ranges along the Bay of Fundy, the Annapolis Valley offers an unmatched quality of life, rich history, academic excellence, and a thriving local food and wine culture.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid Content */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        
        {/* Local Communities Section */}
        <section className="space-y-8">
          <div className="flex items-center gap-4 border-b border-slate-200 pb-4">
            <div className="w-10 h-10 rounded-lg bg-[#0F4C3A]/5 border border-[#0F4C3A]/10 flex items-center justify-center">
              <MapPin className="h-5 w-5 text-[#0F4C3A]" />
            </div>
            <h2 className="text-3xl font-serif font-bold text-[#0F4C3A]">Local Communities</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communities.map((item, idx) => (
              <a 
                key={idx} 
                href={item.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-[#A37B5C]/30 transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <h3 className="font-bold text-lg text-slate-800 group-hover:text-[#0F4C3A] transition-colors flex items-center justify-between">
                    <span>{item.name}</span>
                    <ExternalLink className="h-4 w-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-slate-600 text-sm font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <span className="text-xs font-bold text-[#A37B5C] mt-4 block uppercase tracking-wider group-hover:underline">Visit Site →</span>
              </a>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="space-y-8">
          <div className="flex items-center gap-4 border-b border-slate-200 pb-4">
            <div className="w-10 h-10 rounded-lg bg-[#0F4C3A]/5 border border-[#0F4C3A]/10 flex items-center justify-center">
              <GraduationCap className="h-5 w-5 text-[#0F4C3A]" />
            </div>
            <h2 className="text-3xl font-serif font-bold text-[#0F4C3A]">Education & Schools</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {education.map((item, idx) => (
              <a 
                key={idx} 
                href={item.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-[#A37B5C]/30 transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <h3 className="font-bold text-lg text-slate-800 group-hover:text-[#0F4C3A] transition-colors flex items-center justify-between">
                    <span>{item.name}</span>
                    <ExternalLink className="h-4 w-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-slate-600 text-sm font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <span className="text-xs font-bold text-[#A37B5C] mt-4 block uppercase tracking-wider group-hover:underline">Visit Site →</span>
              </a>
            ))}
          </div>
        </section>

        {/* Resources & Recreation Section */}
        <section className="space-y-8">
          <div className="flex items-center gap-4 border-b border-slate-200 pb-4">
            <div className="w-10 h-10 rounded-lg bg-[#0F4C3A]/5 border border-[#0F4C3A]/10 flex items-center justify-center">
              <Compass className="h-5 w-5 text-[#0F4C3A]" />
            </div>
            <h2 className="text-3xl font-serif font-bold text-[#0F4C3A]">Local Resources & Tourism</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((item, idx) => (
              <a 
                key={idx} 
                href={item.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-[#A37B5C]/30 transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <h3 className="font-bold text-lg text-slate-800 group-hover:text-[#0F4C3A] transition-colors flex items-center justify-between">
                    <span>{item.name}</span>
                    <ExternalLink className="h-4 w-4 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-slate-600 text-sm font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <span className="text-xs font-bold text-[#A37B5C] mt-4 block uppercase tracking-wider group-hover:underline">Visit Site →</span>
              </a>
            ))}
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-[#0F4C3A] text-white py-16 mt-auto relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-slate-700/50">
            <div className="md:col-span-5 space-y-6">
              <Link href="/" className="inline-flex items-center">
                <img src="/assets/morse/morse_logo_web.png" alt="Morse Construction Inc." className="h-14 w-auto object-contain bg-white/95 rounded-sm p-1" />
              </Link>
              <p className="text-slate-300 text-sm leading-relaxed max-w-sm font-light">
                Crafting premium, energy-efficient custom homes in the Annapolis Valley, Nova Scotia for over 30 years.
              </p>
            </div>
            
            <div className="md:col-span-3 space-y-4">
              <h4 className="font-serif text-base font-bold tracking-wider uppercase text-[#A37B5C]">Quick Links</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/#about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/#process" className="hover:text-white transition-colors">Our Process</Link></li>
                <li><Link href="/#gallery" className="hover:text-white transition-colors">Featured Project</Link></li>
                <li><Link href="/seven-things" className="hover:text-white transition-colors">7 Things Series</Link></li>
              </ul>
            </div>

            <div className="md:col-span-4 space-y-4">
              <h4 className="font-serif text-base font-bold tracking-wider uppercase text-[#A37B5C]">Contact Us</h4>
              <ul className="space-y-3 text-sm text-slate-300 font-light">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-[#A37B5C]">A:</span>
                  <span>8999 Commercial St, New Minas, NS B4N 3E3</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="font-bold text-[#A37B5C]">P:</span>
                  <a href="tel:9026813970" className="hover:text-white transition-colors">(902) 681-3970</a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="font-bold text-[#A37B5C]">E:</span>
                  <a href="mailto:info@morseconstruction.com" className="hover:text-white transition-colors">info@morseconstruction.com</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-light">
            <p>© {new Date().getFullYear()} Morse Construction Inc. All rights reserved.</p>
            <p>Designed with care for the Annapolis Valley.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
