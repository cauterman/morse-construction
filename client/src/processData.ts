export type ProcessStep = {
  slug: string;
  step: string;
  title: string;
  eyebrow: string;
  summary: string;
  intro: string;
  sections: Array<{
    heading: string;
    body: string;
  }>;
  takeaways: string[];
};

export const PROCESS_STEPS: ProcessStep[] = [
  {
    slug: "dream",
    step: "01",
    title: "DREAM",
    eyebrow: "Start With The Right Conversation",
    summary:
      "Building a new home starts with a dream. We begin by listening to your ideas, needs, wants, and practical requirements so the vision can become more than a wish list.",
    intro:
      "Every custom home begins long before drawings are finalized or construction starts. It begins with a conversation about the life you want to live in the home, the spaces your family uses every day, and the special details you have imagined for years.",
    sections: [
      {
        heading: "Clarifying the vision",
        body:
          "Many clients know what they love, but they are not always sure how to connect those ideas to a floor plan, a budget, a building site, and the realities of construction. The Dream step gives those ideas a place to be explored carefully before decisions become expensive to change."
      },
      {
        heading: "Balancing wants and needs",
        body:
          "A successful home must do more than look beautiful. It needs to support daily routines, storage, entertaining, accessibility, privacy, natural light, energy performance, and long-term comfort. We help separate must-haves from nice-to-haves so the project starts with clear priorities."
      },
      {
        heading: "Setting direction before design",
        body:
          "The goal of this first step is not to rush into drawings. The goal is to understand the dream well enough that the design process has a strong direction, practical boundaries, and a shared understanding of what the finished home should accomplish."
      }
    ],
    takeaways: [
      "Discuss lifestyle, family needs, and long-term goals.",
      "Identify dream features and practical requirements early.",
      "Create a clear direction before detailed design work begins."
    ]
  },
  {
    slug: "design",
    step: "02",
    title: "DESIGN",
    eyebrow: "Turn Ideas Into A Buildable Plan",
    summary:
      "We help turn the dream into a plan. Whether you need a new design or revisions to an existing house plan, we refine the layout until it feels right.",
    intro:
      "Design is where the early dream becomes a plan that can be studied, refined, priced, and eventually built. This step connects the client’s ideas with a floor plan that respects the site, the budget, the structure, and the way the home will be used.",
    sections: [
      {
        heading: "Creating or improving the plan",
        body:
          "Some clients arrive with no plan at all. Others have a plan they like, but it does not quite fit their land, lifestyle, room sizes, storage needs, or budget. We can help develop a new plan or adjust an existing one so it better reflects the client’s priorities."
      },
      {
        heading: "Making design decisions practical",
        body:
          "A good design process does not stop at appearance. It considers how rooms connect, how traffic flows, where natural light enters, how the home sits on the property, and how design choices affect construction complexity and cost."
      },
      {
        heading: "Refining until it is right",
        body:
          "Design is collaborative. We work through the plan with the client, identifying details that need to change and features that should be protected. The objective is a home that feels personal, functional, and ready for the next level of specification."
      }
    ],
    takeaways: [
      "Develop a new plan or revise an existing plan.",
      "Connect design choices to site, structure, budget, and lifestyle.",
      "Refine the plan before detailed coordination begins."
    ]
  },
  {
    slug: "coordinate",
    step: "03",
    title: "COORDINATE",
    eyebrow: "Organize The Details Before Construction",
    summary:
      "A smoother build depends on coordination. We use detailed discussions to define specifications, selections, products, and expectations before construction begins.",
    intro:
      "Constructing or renovating a home requires many decisions to work together. The more clearly those decisions are discussed and documented before construction, the easier it is to keep the project moving with fewer surprises.",
    sections: [
      {
        heading: "Building detailed specifications",
        body:
          "Morse Construction does not rely on a generic, one-size-fits-all specification package. Each project receives detailed specifications developed through conversations with the client so the materials, products, systems, and features are understood before the contract and build process move forward."
      },
      {
        heading: "Coordinating selections and expectations",
        body:
          "This step helps organize decisions about finishes, fixtures, insulation, mechanical systems, windows, doors, exterior materials, and other project-specific details. Clear coordination reduces confusion and gives both the client and builder a better roadmap."
      },
      {
        heading: "Preparing for efficient construction",
        body:
          "When the planning and specification work is detailed, the construction phase can be more efficient. Crews, tradespeople, suppliers, and clients can all work from clearer expectations, which helps protect quality, schedule, and budget."
      }
    ],
    takeaways: [
      "Create specifications tailored to the individual project.",
      "Coordinate selections, products, systems, and expectations.",
      "Reduce avoidable surprises before the build starts."
    ]
  },
  {
    slug: "build",
    step: "04",
    title: "BUILD",
    eyebrow: "Craft The Home With Quality And Communication",
    summary:
      "The build brings the plan to life with skilled trades, quality products, strong energy-efficiency practices, and regular two-way communication throughout construction.",
    intro:
      "The construction phase is where planning becomes reality. Morse Construction focuses on quality workmanship, dependable trades, strong materials, energy efficiency, and communication that keeps the client informed as the project progresses.",
    sections: [
      {
        heading: "Using skilled trades and quality products",
        body:
          "A custom home should be built to last. We use well-qualified tradespeople and quality products throughout the construction process, avoiding the mindset that a home can be reduced to the cheapest acceptable material or shortcut."
      },
      {
        heading: "Building for performance",
        body:
          "A finished home must be more than visually appealing. It must be structurally sound, comfortable, efficient, and supported by systems that stand the test of time. Energy efficiency is an important part of that approach, including insulation practices that go beyond minimum Building Code requirements."
      },
      {
        heading: "Keeping communication open",
        body:
          "Regular two-way communication matters throughout the build. A process is put in place so questions, updates, changes, and decisions can be handled clearly instead of becoming last-minute surprises."
      }
    ],
    takeaways: [
      "Rely on skilled tradespeople and quality building products.",
      "Prioritize durability, performance, and energy efficiency.",
      "Maintain regular communication during construction."
    ]
  }
];

export const getProcessStep = (slug: string | undefined) =>
  PROCESS_STEPS.find((step) => step.slug === slug);
