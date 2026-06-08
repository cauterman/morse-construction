export interface FAQItem {
  question: string;
  answer: string;
  points?: string[];
  subsections?: { title: string; content: string }[];
}

export const FAQ_DATA: FAQItem[] = [
  {
    question: "How much does it cost to build a custom home?",
    answer: "It varies widely. It’s hard to establish one number for the cost to build a house. It varies greatly depending on a number of factors … is there a basement, is there a second floor, is there a garage, is it more or less a rectangular house or are there lots of corners and extensions? In addition, the quality of the materials and finishes also impact the cost. But as a starting point, custom homes in Nova Scotia typically range from $250 to $350 per square foot, depending on location, materials, finishes, and complexity.",
    subsections: [
      {
        title: "What affects the price:",
        content: "• Lot location and site conditions (rural vs. developed area)\n• Design complexity (simple rectangle vs. custom angles and numerous corners / multi-level)\n• Multiple levels (basement and/or 2nd story vs. one story on a slab)\n• Material and finish choices (budget cabinets vs. premium standard vs. high end)\n• Energy efficiency standards (standard building code level vs. high-performance/net-zero)\n• Site work (clearing, grading, utilities access)"
      }
    ],
    points: [
      "The best time to have the cost estimate conversation is at your first meeting. We provide a transparent cost breakdown and discuss your budget range upfront to make sure we're aligned on scope and budget. This prevents surprises down the road."
    ]
  },
  {
    question: "How long does it take to build a custom home?",
    answer: "Typical timeline: 10–12 months from first consultation to move-in for a standard custom home.",
    subsections: [
      {
        title: "Here's a realistic breakdown:",
        content: "• Design, specifications, formal pricing, municipal approvals phase (planning, permits): 2–3 months\n• Lot prep, foundation & framing: 2–3 months\n• Mechanical/electrical/plumbing rough-in, exterior siding, insulation: 2–3 months\n• Finishing (drywall, paint, flooring, cabinets, finishes): 3–4 months\n• Final inspections & handover: 1–2 weeks"
      }
    ],
    points: [
      "What could extend this: Weather delays (especially Atlantic Canada winters), permit processing times, material and trades availability, and scope changes can all add time. A good builder communicates this upfront and builds in realistic buffers — we don't promise miracles, we promise honesty."
    ]
  },
  {
    question: "What is a design-build company, and how is it different from a traditional builder?",
    answer: "Design-build means one company handles both design and construction. You work with a single point of contact from start to finish. Traditional (Design-Bid-Build) means you hire an architect or designer separately, they design the home, then you hire a builder to construct it. Two separate firms, more coordination needed.",
    subsections: [
      {
        title: "Advantages of design-build:",
        content: "• Faster decision-making (no back-and-forth between architect/designer and builder)\n• Cost efficiency (builder can advise on cost-saving alternatives during design)\n• Better communication (one relationship, one vision)\n• Accountability (the same company is responsible for design accuracy and build quality)"
      }
    ],
    points: [
      "For 30 years, Morse has operated as a design-build firm. We work with you from the first sketch to the keys in your hand. There's no separation between who designed it and who builds it — which means we care about both."
    ]
  },
  {
    question: "What happens if I want to change something during the build?",
    answer: "Changes during construction happen. We understand that ideas evolve. But changes come with costs and timeline impacts — and transparency about both is critical.",
    subsections: [
      {
        title: "How change orders work:",
        content: "1. You request a change (different tile, layout adjustment, upgrade)\n2. We provide a written quote (change order) showing the extra cost and timeline impact\n3. You approve it in writing before work proceeds\n4. Cost and timeline are updated"
      },
      {
        title: "Why changes cost money:",
        content: "Labor already scheduled may need to be reworked, materials ordered may have a different cost, other trades could be impacted, and scheduling shifted could be affected, etc. It's not about profit — it's the real cost of changing course mid-build."
      }
    ],
    points: [
      "Best practice: Make major decisions (layout, finishes, structural choices) before construction starts. Small changes are easier to accommodate early than mid-build. At Morse, we spend time in the design phase getting it right the first time … our process of developing custom specifications together with our clients helps cut down on changes and cost overruns that often happen when that detailed planning is not done."
    ]
  },
  {
    question: "What qualifications and information about a builder should I be looking for?",
    answer: "A quality builder should have a proven set of professional credentials, licenses, and comprehensive warranties to protect your investment. Morse Construction has been BBB-accredited since 2004. Your confidence in us is everything.",
    subsections: [
      {
        title: "What a quality builder should have:",
        content: "• Provincial contractor license (in Nova Scotia, verifiable through the Registry of Joint-Stock Companies)\n• Be a registered member of the Canadian Home Builders' Association – Nova Scotia and agreed to abide by a Code of Ethics\n• Have one or more Red Seal carpenters which guarantees a nationally recognized standard of competency\n• Have General Liability Insurance (protects you if someone is injured on the job site)\n• Builder's Risk Insurance (covers the home while under construction)\n• Workers' Compensation (covers employees)\n• Provide a one-year Builder's warranty on virtually everything (except normal wear-and-tear and homeowner damage)\n• Provide a 10-year new home structural warranty under the Atlantic New Home Warranty Program (or similar third-party provider)"
      }
    ],
    points: [
      "We're happy to provide certificates of insurance, license documentation, and warranty details. If a builder won't, that's a red flag. Never hire someone who can't prove these."
    ]
  },
  {
    question: "Can I visit the job site during construction?",
    answer: "Yes, but with safety protocols. We welcome owner visits, especially at key milestones (foundation, framing, rough-ins, finish work, final walk-through).",
    subsections: [
      {
        title: "What to expect and safety protocols:",
        content: "• You'll need to wear safety gear (hard hat, steel-toed boots)\n• There may be restrictions during certain phases (wet concrete, heavy equipment operation)\n• A site tour must be scheduled so our representative can walk you through the progress and explain what's happening\n• You'll need to take safety precautions as directed by us"
      }
    ],
    points: [
      "Good builders encourage owner involvement and communication. We'll schedule regular update meetings and provide photo updates between visits. You're not just a client — you're a partner in this process."
    ]
  },
  {
    question: "What should I ask at my first meeting with a builder?",
    answer: "Come prepared. Here are the questions that matter most when evaluating a builder for your project:",
    subsections: [
      {
        title: "Key Questions to Ask:",
        content: "• **Experience:** How long have you been building? How many homes do you build per year?\n• **References:** Can you provide contact info for 3–5 past clients I can call? Do you have any homes that we can see?\n• **Plans & Specifications:** Do we come up with a house plan, or can you help us with that? What does that cost? Do you have a standard set of specifications?\n• **Timeline:** What’s your typical build schedule? What could delay it? What things can affect the timeline?\n• **Budget:** Can you provide an estimate of the cost to build? How do you determine actual costs for a contract? What’s included in your quote? What costs extra?\n• **Changes:** Are we allowed to make changes? How do you handle change orders? Who approves them? How are changes handled in the contract?\n• **Communication:** How often will we meet? How do I reach you with questions?\n• **Warranty:** What’s covered? For how long? Do you provide any warranties? How long are they and what do they cover?\n• **Process:** Walk me through the steps from design to move-in."
      }
    ],
    points: [
      "Red flags to watch for: If a builder is vague about timeline, won't provide references, or pushes you to decide too fast — look elsewhere. There are plenty of good builders. Work with someone who respects your questions."
    ]
  },
  {
    question: "What's the difference between building in town vs. on rural land?",
    answer: "The location of your lot significantly impacts the infrastructure requirements, site preparation, timeline, and overall budget.",
    subsections: [
      {
        title: "In Town (Municipal Lot):",
        content: "• Municipal water, sewer, hydro, and internet available\n• Zoning regulations and building code inspections are standard\n• Faster construction (no well/septic delays)\n• Higher land cost typically"
      },
      {
        title: "On Rural Land:",
        content: "• Septic system required (more complex, adds cost and timeline)\n• Well drilling (site-specific, can be unpredictable)\n• Road access and utilities extensions may be needed\n• Fewer regulations, but more permitting with provincial/county authorities\n• More site work (clearing, grading)\n• Lower land cost, more privacy"
      }
    ],
    points: [
      "Budget impact: Rural builds typically can add 1–2 months and $30k–$50k+ in site work and systems. The Annapolis Valley's soil, water tables, and climate have unique considerations. A builder experienced in rural Nova Scotia is essential — we are."
    ]
  },
  {
    question: "How do you ensure the home is energy-efficient and meets current standards?",
    answer: "Energy efficiency isn't just good for the planet — it's good for your wallet. There are many options available that will help make your new home more energy efficient than if built just to the building code. We discuss these during the development of the specifications.",
    subsections: [
      {
        title: "Points of discussion & efficiency features:",
        content: "• Upgrades to wall, ceiling, and floor insulation (insulating well beyond the Building Code requirements)\n• Air sealing to prevent drafts and heat loss\n• High-performance windows (triple-glazing, low-E coatings)\n• Alternatives to electric hot water tanks that are more energy-efficient (hybrid electric/heat pump or tankless)\n• Mechanical systems that adhere to Efficiency Nova Scotia cold climate standards (air source ductless heat pumps)\n• Upgrade incentives/rebates that may be available"
      }
    ],
    points: [
      "A quality builder can explain how higher upfront efficiency investments reduce your long-term energy bills. It's not an expense — it's an investment that pays back."
    ]
  },
  {
    question: "What happens after I move in? Do you offer warranty or follow-up service?",
    answer: "Yes. We believe that the relationship doesn't end at closing — it evolves into a long-term partnership. We provide a solid warranty program to protect your new home.",
    subsections: [
      {
        title: "Our Warranty Coverage:",
        content: "• **One-Year Builder's Warranty:** A one-year warranty on virtually everything (except normal wear-and-tear and homeowner damage).\n• **10-Year Structural Warranty:** A 10-year new home structural warranty under the Atlantic New Home Warranty Program (or similar third-party provider)."
      },
      {
        title: "What to expect:",
        content: "• A walk-through inspection before you move in (punch list for any final touches)\n• A 1-year inspection to identify any issues to be addressed\n• Clear process for reporting warranty claims\n• Responsive service (we address issues promptly)"
      }
    ],
    points: [
      "Pro tip: Document everything with photos and dates. Keep records of maintenance. Warranty disputes are easier to resolve with clear documentation."
    ]
  }
];
