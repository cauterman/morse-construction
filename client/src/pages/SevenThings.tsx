import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { ChevronRight, ArrowLeft, CheckCircle, HelpCircle, Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SEVEN_THINGS_DATA } from "../const";

export default function SevenThings() {
  const [, setLocation] = useLocation();
  const [activeTopic, setActiveTopic] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentTopic = SEVEN_THINGS_DATA[activeTopic];
  const currentStepData = currentTopic.items[activeStep];

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
            <Link href="/seven-things" className="text-sm font-bold text-[#0F4C3A] border-b-2 border-[#0F4C3A] pb-1">7 Things Series</Link>
            <Link href="/social" className="text-sm font-semibold text-slate-600 hover:text-[#0F4C3A] transition-colors">Posts</Link>
            <Link href="/area-info" className="text-sm font-semibold text-slate-600 hover:text-[#0F4C3A] transition-colors">Area Information</Link>
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
            <Link href="/seven-things" onClick={() => setMobileMenuOpen(false)} className="text-base font-bold text-[#0F4C3A] py-2 border-b border-slate-100">7 Things Series</Link>
            <Link href="/social" onClick={() => setMobileMenuOpen(false)} className="text-base font-semibold text-slate-700 py-2 border-b border-slate-100">Posts</Link>
            <Link href="/area-info" onClick={() => setMobileMenuOpen(false)} className="text-base font-semibold text-slate-700 py-2 border-b border-slate-100">Area Information</Link>
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
              Educational Guide Series
            </span>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold tracking-tight leading-tight mb-6">
              The Seven Things Series
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-light">
              Building or renovating a home is a major milestone. We believe that an educated client is a happy client. Explore our curated checklists of 7 crucial things you should know before making key construction decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Sidebar Navigation */}
          <aside className="lg:col-span-4 space-y-4">
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm sticky top-24">
              <h3 className="font-serif text-lg font-bold text-[#0F4C3A] mb-4 pb-3 border-b border-slate-100">
                Choose a Topic
              </h3>
              <div className="flex flex-col gap-2">
                {SEVEN_THINGS_DATA.map((topic, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setActiveTopic(idx);
                      setActiveStep(0);
                    }}
                    className={`w-full text-left px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-200 flex items-center justify-between group ${
                      activeTopic === idx
                        ? "bg-[#0F4C3A] text-white shadow-sm"
                        : "bg-slate-50 hover:bg-slate-100 text-slate-700"
                    }`}
                  >
                    <span className="truncate">{topic.title}</span>
                    <ChevronRight className={`h-4 w-4 transition-transform ${
                      activeTopic === idx ? "text-white translate-x-1" : "text-slate-400 group-hover:translate-x-1"
                    }`} />
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Interactive Checklist Presentation */}
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-sm">
              {/* Topic Header */}
              <div className="border-b border-slate-100 pb-6 mb-8">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#A37B5C] block mb-2">
                  Topic {activeTopic + 1} of 7
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0F4C3A]">
                  {currentTopic.title}
                </h2>
              </div>

              {/* Numbered Steps Selector */}
              <div className="flex justify-between items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-slate-100 scrollbar-none">
                {currentTopic.items.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveStep(idx)}
                    className={`flex-shrink-0 w-10 h-10 rounded-full font-serif font-bold text-base flex items-center justify-center transition-all duration-200 ${
                      activeStep === idx
                        ? "bg-[#A37B5C] text-white scale-110 shadow-sm"
                        : "bg-slate-100 hover:bg-slate-200 text-slate-600"
                    }`}
                  >
                    {idx + 1}
                  </button>
                ))}
              </div>

              {/* Active Step Content */}
              <div className="min-h-[250px] flex flex-col justify-between animate-fadeIn">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#0F4C3A]/5 border border-[#0F4C3A]/10 flex items-center justify-center flex-shrink-0">
                      <span className="font-serif text-xl font-bold text-[#0F4C3A]">
                        {activeStep + 1}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-800 leading-tight mt-1">
                        {currentStepData.title}
                      </h4>
                    </div>
                  </div>
                  <p className="text-slate-600 leading-relaxed text-base sm:text-lg pl-0 sm:pl-16 font-light">
                    {currentStepData.content}
                  </p>
                </div>

                {/* Pagination Controls */}
                <div className="flex justify-between items-center pt-8 mt-8 border-t border-slate-100">
                  <Button
                    variant="outline"
                    disabled={activeStep === 0}
                    onClick={() => setActiveStep(prev => prev - 1)}
                    className="border-slate-200 text-slate-600 hover:bg-slate-50 font-bold px-4 py-2"
                  >
                    Previous
                  </Button>
                  <span className="text-xs font-semibold text-slate-400">
                    Step {activeStep + 1} of 7
                  </span>
                  <Button
                    disabled={activeStep === 6}
                    onClick={() => setActiveStep(prev => prev + 1)}
                    className="bg-[#0F4C3A] hover:bg-[#083328] text-white font-bold px-5 py-2"
                  >
                    Next Step
                  </Button>
                </div>
              </div>
            </div>

            {/* Educational Trust Banner */}
            <div className="bg-[#A37B5C]/5 border border-[#A37B5C]/10 rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="w-12 h-12 rounded-full bg-[#A37B5C]/10 flex items-center justify-center flex-shrink-0">
                <CheckCircle className="h-6 w-6 text-[#A37B5C]" />
              </div>
              <div className="space-y-1">
                <h5 className="font-bold text-slate-800 text-lg">Have questions about these guidelines?</h5>
                <p className="text-slate-600 text-sm leading-relaxed font-light">
                  Our team is committed to absolute transparency and education. We walk through each of these items in detail with every client before signing a contract.
                </p>
              </div>
            </div>
          </div>
        </div>
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
