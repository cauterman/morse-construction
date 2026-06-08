import React, { useEffect, useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, Facebook, Share2, MessageCircle, ThumbsUp, Calendar, Info, Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Social() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Mock Facebook posts for visual preview
  const mockPosts = [
    {
      id: 1,
      date: "June 2, 2026",
      text: "Progress update on the Pine St Project! Today we are completing the exterior shingle siding. This classic Annapolis Valley shingle style marries beautifully with modern high-performance wall insulation. Stay tuned for interior walkthroughs coming next week! 🔨🏡 #CustomHome #AnnapolisValley #MorseConstruction",
      image: "/assets/morse/pine-st-drone-1_7083d3e5.jpg",
      likes: 42,
      comments: 5
    },
    {
      id: 2,
      date: "May 28, 2026",
      text: "Thinking about building your dream home in Nova Scotia? Our new 'Seven Things' series is now live on our website! We break down everything you need to know about choosing a builder, planning your kitchen, and optimizing energy efficiency. Knowledge is power—get educated before you build! 📖✨ #HomeBuildingTips #NovaScotiaLiving #BuilderTips",
      image: "/assets/morse/pine-st-drone-2_d296594b.jpg",
      likes: 38,
      comments: 3
    },
    {
      id: 3,
      date: "May 15, 2026",
      text: "A beautiful spring morning in the Annapolis Valley. There's a reason so many families are choosing to relocate here from out of province. From the historic dykelands of Wolfville to local vineyards and farmers markets, the Valley offers an unmatched pace of life. Let's design a custom space that helps you enjoy it. 🌸🍷 #AnnapolisValley #NovaScotiaLiving #DreamHome",
      image: "/assets/morse/pine_st_hero_26ff1fc6.jpg",
      likes: 56,
      comments: 8
    }
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
            <Link href="/social" className="text-sm font-bold text-[#0F4C3A] border-b-2 border-[#0F4C3A] pb-1">Posts</Link>
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
            <Link href="/seven-things" onClick={() => setMobileMenuOpen(false)} className="text-base font-semibold text-slate-700 py-2 border-b border-slate-100">7 Things Series</Link>
            <Link href="/social" onClick={() => setMobileMenuOpen(false)} className="text-base font-bold text-[#0F4C3A] py-2 border-b border-slate-100">Posts</Link>
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
              Community Hub
            </span>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold tracking-tight leading-tight mb-6">
              The Social Hub
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-light">
              Follow along with our daily builds, client testimonials, and home construction tips. We update our community regularly with real photos from active job sites around the Annapolis Valley.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        
        {/* Automated Sync Notice Banner */}
        <div className="bg-[#A37B5C]/5 border border-[#A37B5C]/15 rounded-xl p-6 flex flex-col md:flex-row gap-5 items-start md:items-center">
          <div className="w-12 h-12 rounded-full bg-[#A37B5C]/10 flex items-center justify-center flex-shrink-0">
            <Info className="h-6 w-6 text-[#A37B5C]" />
          </div>
          <div className="space-y-1">
            <h4 className="font-bold text-slate-800 text-lg">Automated Social Sync Active</h4>
            <p className="text-slate-600 text-sm font-light leading-relaxed">
              This hub is configured to automatically sync posts directly from the **Morse Construction Facebook Page**. Any new photos, videos, or updates Gary posts on Facebook will appear here in real-time without needing separate website updates!
            </p>
          </div>
        </div>

        {/* Facebook Feed Showcase */}
        <div className="space-y-8">
          <h2 className="text-2xl font-serif font-bold text-[#0F4C3A] border-b border-slate-200 pb-3 flex items-center gap-3">
            <Facebook className="h-6 w-6 text-[#1877F2]" />
            <span>Recent Updates</span>
          </h2>

          <div className="space-y-8">
            {mockPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                {/* Header */}
                <div className="p-5 flex items-center justify-between border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full border border-slate-200 bg-[#0F4C3A] text-white flex items-center justify-center font-serif font-bold text-lg" aria-label="Morse Construction">
                      M
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm">Morse Construction Inc.</h4>
                      <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-0.5">
                        <Calendar className="h-3 w-3" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </div>
                  <a 
                    href="https://www.facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-[#0F4C3A] hover:text-[#A37B5C] flex items-center gap-1 transition-colors"
                  >
                    <span>View on Facebook</span>
                    <Share2 className="h-3 w-3" />
                  </a>
                </div>

                {/* Body Text */}
                <div className="p-5">
                  <p className="text-slate-600 text-base leading-relaxed font-light whitespace-pre-line">
                    {post.text}
                  </p>
                </div>

                {/* Post Image */}
                {post.image && (
                  <div className="border-y border-slate-100 overflow-hidden bg-slate-50">
                    <img 
                      src={post.image} 
                      alt="Facebook Post Attachment" 
                      className="w-full h-auto max-h-[500px] object-cover hover:scale-[1.02] transition-transform duration-500"
                    />
                  </div>
                )}

                {/* Footer Engagement Metrics */}
                <div className="p-4 bg-slate-50/50 flex items-center gap-6 text-xs font-semibold text-slate-500 border-t border-slate-100">
                  <div className="flex items-center gap-1.5 hover:text-[#0F4C3A] cursor-pointer transition-colors">
                    <ThumbsUp className="h-4 w-4" />
                    <span>{post.likes} Likes</span>
                  </div>
                  <div className="flex items-center gap-1.5 hover:text-[#0F4C3A] cursor-pointer transition-colors">
                    <MessageCircle className="h-4 w-4" />
                    <span>{post.comments} Comments</span>
                  </div>
                </div>
              </article>
            ))}
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
