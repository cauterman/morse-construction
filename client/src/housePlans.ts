// Gary Morse's supplied photos and floor-plan PDFs, November 2026.
// Room counts and living areas were checked against the drawings; flexible rooms
// and lower-floor areas are identified rather than silently combined.
export type PlanFloor = {
  label: string;
  area: string;
  preview: string;
  pdf: string;
};

export type HousePlan = {
  slug: string;
  name: string;
  areaLabel: string;
  cardAreaLabel: string;
  bedsLabel: string;
  bedroomSummary: string;
  bathsLabel: string;
  style: string;
  summary: string;
  description: string;
  features: string[];
  image: string;
  thumbnail: string;
  floors: PlanFloor[];
  specNote?: string;
};

export const HOUSE_PLANS: HousePlan[] = [
  {
    "slug": "brownstone",
    "name": "The Brownstone",
    "areaLabel": "1,628 sq. ft.",
    "bedsLabel": "3",
    "bathsLabel": "2",
    "summary": "A three-bedroom layout with two bathrooms, open living spaces, a covered veranda and an attached two-bay garage.",
    "description": "The Brownstone places three bedrooms beside an open kitchen, dining area and great room. Two bathrooms each show a tub, toilet and basin. A separate laundry, utility room and storage room support the layout, while an attached two-bay garage and covered veranda provide additional practical spaces.",
    "features": [
      "Three labeled bedrooms, including the master bedroom",
      "Two bathrooms, each drawn with a tub, toilet and basin",
      "Kitchen island adjoining the dining area and great room",
      "Separate laundry, utility and storage rooms",
      "Attached two-bay garage and covered veranda"
    ],
    "cardAreaLabel": "1,628 sq. ft.",
    "bedroomSummary": "3 bedrooms",
    "style": "Single-level living",
    "image": "/assets/morse/plans/brownstone-exterior.webp",
    "thumbnail": "/assets/morse/plans/brownstone-thumbnail.webp",
    "floors": [
      {
        "label": "Main floor",
        "area": "1,628 sq. ft.",
        "preview": "/assets/morse/plans/brownstone-main-floor.webp",
        "pdf": "/assets/morse/plans/brownstone-main-floor.pdf"
      }
    ],
    "specNote": "Living area follows the figure printed on the supplied drawing; garage and outdoor areas are not added to it."
  },
  {
    "slug": "hollow",
    "name": "The Hollow",
    "areaLabel": "1,836 sq. ft. main floor; 1,412 sq. ft. finished lower floor",
    "bedsLabel": "3",
    "bathsLabel": "2.5",
    "summary": "A traditional gabled home with a main-floor primary bedroom, sunroom and a lower floor offering bedrooms and recreation spaces.",
    "description": "The main floor pairs a primary bedroom with a kitchen, great room, dining room, sunroom and laundry. Its fixtures show a full bathroom and a powder room. The lower floor adds two bedrooms, a full bathroom, family room, bar, den/study and exercise room.",
    "features": [
      "Main-floor primary bedroom with adjoining tub bathroom",
      "Kitchen with an island and desk",
      "Separate dining room and sunroom",
      "Main-floor laundry and attached garage",
      "Lower-floor family room, bar, den/study and exercise room"
    ],
    "cardAreaLabel": "1,836 sq. ft. + lower level",
    "bedroomSummary": "3 bedrooms",
    "style": "Main & lower levels",
    "image": "/assets/morse/plans/hollow-exterior.webp",
    "thumbnail": "/assets/morse/plans/hollow-thumbnail.webp",
    "floors": [
      {
        "label": "Main floor",
        "area": "1,836 sq. ft.",
        "preview": "/assets/morse/plans/hollow-main-floor.webp",
        "pdf": "/assets/morse/plans/hollow-main-floor.pdf"
      },
      {
        "label": "Lower floor",
        "area": "1,412 sq. ft.",
        "preview": "/assets/morse/plans/hollow-lower-floor.webp",
        "pdf": "/assets/morse/plans/hollow-lower-floor.pdf"
      }
    ],
    "specNote": "Living areas are shown separately: 1,836 sq. ft. on the main floor and 1,412 sq. ft. of finished lower-floor space. The three bedrooms and 2.5 bathrooms span both floors; the den/study is not counted as a bedroom."
  },
  {
    "slug": "lockwood",
    "name": "The Lockwood",
    "areaLabel": "1,400 sq. ft.",
    "bedsLabel": "3",
    "bathsLabel": "2",
    "summary": "A single-story, three-bedroom layout with two bathrooms, connected great room and dining spaces, a pantry, and an attached garage.",
    "description": "The Lockwood places the great room and dining area beside a kitchen with an island and separate pantry. A primary bedroom with its own bathroom sits apart from two additional bedrooms. The plan also includes a hall bathroom, utility room, and attached garage.",
    "features": [
      "Connected great room and dining area",
      "Kitchen island and separate pantry",
      "Primary bedroom with a private bathroom",
      "Utility room beside the attached garage",
      "Covered front porch shown in the exterior photo"
    ],
    "cardAreaLabel": "1,400 sq. ft.",
    "bedroomSummary": "3 bedrooms",
    "style": "Single-level living",
    "image": "/assets/morse/plans/lockwood-exterior.webp",
    "thumbnail": "/assets/morse/plans/lockwood-thumbnail.webp",
    "floors": [
      {
        "label": "Main floor",
        "area": "1,400 sq. ft.",
        "preview": "/assets/morse/plans/lockwood-main-floor.webp",
        "pdf": "/assets/morse/plans/lockwood-main-floor.pdf"
      }
    ],
    "specNote": "Living area follows the figure printed on the supplied drawing; garage and outdoor areas are not added to it."
  },
  {
    "slug": "maple",
    "name": "The Maple",
    "areaLabel": "1,679 sq. ft.",
    "bedsLabel": "3",
    "bathsLabel": "2",
    "summary": "A three-bedroom, two-bathroom design with connected great room and dining spaces, a kitchen pantry, utility room and attached garage.",
    "description": "The Maple places two bedrooms beside a shared bathroom and the primary bedroom beside its own bathroom. A central great room and dining area connect with the kitchen, which includes an island and pantry. A utility room sits between the bedroom wing and attached garage.",
    "features": [
      "Connected great room and dining area",
      "Kitchen with an island and labelled pantry",
      "Primary bedroom with an adjoining bathroom",
      "Separate utility room",
      "Attached garage"
    ],
    "cardAreaLabel": "1,679 sq. ft.",
    "bedroomSummary": "3 bedrooms",
    "style": "Single-level living",
    "image": "/assets/morse/plans/maple-exterior.webp",
    "thumbnail": "/assets/morse/plans/maple-thumbnail.webp",
    "floors": [
      {
        "label": "Main floor",
        "area": "1,679 sq. ft.",
        "preview": "/assets/morse/plans/maple-main-floor.webp",
        "pdf": "/assets/morse/plans/maple-main-floor.pdf"
      }
    ],
    "specNote": "Living area follows the figure printed on the supplied drawing; garage and outdoor areas are not added to it."
  },
  {
    "slug": "newport",
    "name": "The Newport",
    "areaLabel": "1,489 sq. ft.",
    "bedsLabel": "2 + flexible den/bedroom",
    "bathsLabel": "2",
    "summary": "A single-storey layout with two labeled bedrooms, a flexible den/bedroom, two bathrooms and a great room with a tray ceiling.",
    "description": "The Newport places the great room, dining area and kitchen together, with an island and pantry. Two labeled bedrooms are complemented by a flexible den/bedroom. The plan also shows two bathrooms, separate laundry and utility rooms, an attached garage and a deck.",
    "features": [
      "Great room with a tray ceiling",
      "Kitchen island and pantry",
      "Primary bedroom with an adjoining bathroom containing a shower",
      "Separate laundry and utility rooms",
      "Attached garage and a deck off the dining area"
    ],
    "cardAreaLabel": "1,489 sq. ft.",
    "bedroomSummary": "2 bedrooms + flexible den/bedroom",
    "style": "Flexible single-level living",
    "image": "/assets/morse/plans/newport-exterior.webp",
    "thumbnail": "/assets/morse/plans/newport-thumbnail.webp",
    "floors": [
      {
        "label": "Main floor",
        "area": "1,489 sq. ft.",
        "preview": "/assets/morse/plans/newport-main-floor.webp",
        "pdf": "/assets/morse/plans/newport-main-floor.pdf"
      }
    ],
    "specNote": "Two rooms are labeled bedrooms; the additional den/bedroom is flexible space. Living area is the figure printed on the supplied drawing."
  },
  {
    "slug": "pine",
    "name": "The Pine",
    "areaLabel": "3,066 sq. ft.",
    "bedsLabel": "3",
    "bathsLabel": "3.5",
    "summary": "The Pine combines three bedrooms with a central kitchen and family room, separate dining and study rooms, and a deck.",
    "description": "The Pine’s plan places three bedrooms around a central kitchen and family room, with separate dining and study rooms. The primary bedroom adjoins a bathroom with a tub, separate shower and two sinks. A deck, laundry, utility and storage rooms, and attached garage complete the layout.",
    "features": [
      "Kitchen island and built-in desk beside the family room",
      "Separate dining room and study",
      "Three full bathrooms plus a half bath; primary bathroom includes a tub, separate shower and two sinks",
      "Deck accessible from the family room and primary bedroom",
      "Attached garage with nearby laundry, utility and storage rooms"
    ],
    "cardAreaLabel": "3,066 sq. ft.",
    "bedroomSummary": "3 bedrooms",
    "style": "Traditional family home",
    "image": "/assets/morse/plans/pine-exterior.webp",
    "thumbnail": "/assets/morse/plans/pine-thumbnail.webp",
    "floors": [
      {
        "label": "Floor plan",
        "area": "3,066 sq. ft.",
        "preview": "/assets/morse/plans/pine-main-floor.webp",
        "pdf": "/assets/morse/plans/pine-main-floor.pdf"
      }
    ],
    "specNote": "The bedroom and bathroom counts cover the supplied floor drawing only. Stairs are shown, but no additional-floor drawing or area was provided."
  },
  {
    "slug": "ridge",
    "name": "The Ridge",
    "areaLabel": "1,601 sq. ft.",
    "bedsLabel": "3",
    "bathsLabel": "2",
    "summary": "A single-level home with three bedrooms, two bathrooms, an open living area and an attached garage.",
    "description": "The Ridge places a primary bedroom and two additional bedrooms beside an open great room, dining area and kitchen with an island. Two bathrooms, a utility room and an attached garage complete the single-level layout, while the exterior photo shows a covered front porch.",
    "features": [
      "Primary bedroom with an ensuite bathroom containing a shower",
      "Open great room, dining area and kitchen with an island",
      "Separate utility room",
      "Attached garage with interior access",
      "Covered front porch shown in the exterior photo"
    ],
    "cardAreaLabel": "1,601 sq. ft.",
    "bedroomSummary": "3 bedrooms",
    "style": "Single-level living",
    "image": "/assets/morse/plans/ridge-exterior.webp",
    "thumbnail": "/assets/morse/plans/ridge-thumbnail.webp",
    "floors": [
      {
        "label": "Main floor",
        "area": "1,601 sq. ft.",
        "preview": "/assets/morse/plans/ridge-main-floor.webp",
        "pdf": "/assets/morse/plans/ridge-main-floor.pdf"
      }
    ],
    "specNote": "Living area follows the figure printed on the supplied drawing; garage and outdoor areas are not added to it."
  },
  {
    "slug": "saffron",
    "name": "The Saffron",
    "areaLabel": "1,654 sq. ft.",
    "bedsLabel": "3",
    "bathsLabel": "2",
    "summary": "The Saffron offers three bedrooms, two bathrooms, an open kitchen and great room, a rear deck, and an attached garage.",
    "description": "The Saffron places the primary bedroom and its private bathroom apart from two additional bedrooms and a shared bathroom. The kitchen includes an island and pantry beside the great room and dining area. A rear deck, laundry/mudroom, utility room, and attached garage complete the layout.",
    "features": [
      "Three labeled bedrooms, including a primary bedroom with a private bathroom",
      "Kitchen island and labeled pantry",
      "Connected kitchen, great room, and dining area with access to the rear deck",
      "Laundry/mudroom beside a separate utility room and attached garage",
      "Covered front porch and gabled roof shown in the exterior photo"
    ],
    "cardAreaLabel": "1,654 sq. ft.",
    "bedroomSummary": "3 bedrooms",
    "style": "Single-level living",
    "image": "/assets/morse/plans/saffron-exterior.webp",
    "thumbnail": "/assets/morse/plans/saffron-thumbnail.webp",
    "floors": [
      {
        "label": "Main floor",
        "area": "1,654 sq. ft.",
        "preview": "/assets/morse/plans/saffron-main-floor.webp",
        "pdf": "/assets/morse/plans/saffron-main-floor.pdf"
      }
    ],
    "specNote": "Living area follows the figure printed on the supplied drawing; garage and outdoor areas are not added to it."
  },
  {
    "slug": "modern",
    "name": "The Modern",
    "areaLabel": "2,294 sq. ft. total living area — 1,234 main + 1,060 second",
    "cardAreaLabel": "2,294 sq. ft. total living area",
    "bedroomSummary": "3 bedrooms",
    "style": "Two-storey living",
    "summary": "A two-storey layout with three upstairs bedrooms, an island kitchen, separate family room and attached two-car garage.",
    "description": "The Modern pairs a kitchen with an island and adjoining dining and living areas with a separate family room. Upstairs are three bedrooms, including a primary bedroom with a walk-in closet and shower ensuite. A main-floor shower bathroom and attached two-car garage complete the layout.",
    "features": [
      "Kitchen island with adjoining dining and living areas",
      "Separate main-floor family room",
      "Three second-floor bedrooms",
      "Primary bedroom with walk-in closet and shower ensuite",
      "Attached two-car garage"
    ],
    "specNote": "The supplied main- and second-floor sheets print separate living areas of 1,234 and 1,060 sq. ft., totaling 2,294 sq. ft.; these figures are not independently measured. The garage is shown separately from living space. All three bedrooms are upstairs; the main-floor family room is not counted as a bedroom. Fixtures show a main-floor shower bathroom, an upstairs tub bathroom and a primary shower ensuite. No lower-floor plan was supplied. These drawings are brainstorming material, not construction-ready plans.",
    "bedsLabel": "3",
    "bathsLabel": "3",
    "image": "/assets/morse/plans/modern-exterior.webp",
    "thumbnail": "/assets/morse/plans/modern-thumbnail.webp",
    "floors": [
      {
        "label": "Main floor",
        "area": "1,234 sq. ft.",
        "preview": "/assets/morse/plans/modern-main-floor.webp",
        "pdf": "/assets/morse/plans/modern-main-floor.pdf"
      },
      {
        "label": "Second floor",
        "area": "1,060 sq. ft.",
        "preview": "/assets/morse/plans/modern-second-floor.webp",
        "pdf": "/assets/morse/plans/modern-second-floor.pdf"
      }
    ]
  },
  {
    "slug": "mount",
    "name": "The Mount",
    "areaLabel": "3,325 sq. ft. total living area (main: 2,266; second: 1,059)",
    "cardAreaLabel": "3,325 sq. ft. total living area",
    "bedroomSummary": "4 bedrooms + flexible den",
    "style": "Two-storey living",
    "summary": "The Mount pairs a main-floor primary suite with three upstairs bedrooms, a flexible office/den, a loft and a screened room.",
    "description": "The Mount offers a main-floor primary bedroom with an ensuite and walk-in closet, plus three bedrooms and a loft upstairs. The kitchen includes an island and pantry beside the great room and dining area. An office/den, screened room and attached garage complete the layout.",
    "features": [
      "Main-floor primary suite with ensuite and walk-in closet",
      "Three upstairs bedrooms and a loft",
      "Kitchen island and pantry",
      "Flexible main-floor office/den",
      "Screened room and attached garage"
    ],
    "specNote": "The supplied main- and second-floor sheets print distinct living areas of 2,266 and 1,059 sq. ft.; the reported total is their sum, not an independent measurement. Four labelled bedrooms are shown; the office/den and loft are not counted as bedrooms. Fixtures confirm a main-floor ensuite with tub, shower, two basins and toilet, a separate main-floor toilet-and-basin half bathroom, and an upstairs bathroom with tub, basin and toilet. The sheets do not explicitly state whether garage, screened-room or storage areas are included in the printed living-area figures. These drawings are brainstorming material, not construction-ready plans.",
    "bedsLabel": "4",
    "bathsLabel": "2.5",
    "image": "/assets/morse/plans/mount-exterior.webp",
    "thumbnail": "/assets/morse/plans/mount-thumbnail.webp",
    "floors": [
      {
        "label": "Main floor",
        "area": "2,266 sq. ft.",
        "preview": "/assets/morse/plans/mount-main-floor.webp",
        "pdf": "/assets/morse/plans/mount-main-floor.pdf"
      },
      {
        "label": "Second floor",
        "area": "1,059 sq. ft.",
        "preview": "/assets/morse/plans/mount-second-floor.webp",
        "pdf": "/assets/morse/plans/mount-second-floor.pdf"
      }
    ]
  },
  {
    "slug": "canaan",
    "name": "The Canaan",
    "areaLabel": "Main floor: 1,678 sq. ft. living area; lower floor: 1,058 sq. ft. finished area",
    "cardAreaLabel": "Main 1,678 / lower finished 1,058 sq. ft.",
    "bedroomSummary": "4 bedrooms",
    "style": "Main & lower levels",
    "summary": "The Canaan combines a main-floor primary suite, kitchen/family space and living/dining areas with three bedrooms on the lower level.",
    "description": "The Canaan offers a main-floor primary bedroom with an ensuite, a kitchen/family area with an island, and living and dining spaces. A powder room sits near the garage entry. The lower floor includes three bedrooms, a full bathroom, utility/storage space and additional unfinished space.",
    "features": [
      "Main-floor primary bedroom with ensuite",
      "Kitchen/family area with island",
      "Living and dining spaces",
      "Three lower-floor bedrooms and a full bathroom",
      "Lower-level utility/storage and unfinished space"
    ],
    "specNote": "Areas are reported separately as printed: 1,678 sq. ft. of main-floor living area and 1,058 sq. ft. of lower-floor finished area, not repeated whole-home totals. The lower sheet also shows unfinished areas outside its finished-area coverage. Garage space is shown separately from living/finished space. Counts cover both supplied floors: one bedroom, one full ensuite and one powder room on the main floor; three bedrooms and one full bathroom on the lower floor. The bathroom fixtures were checked visually. These drawings are brainstorming material, not construction-ready plans.",
    "bedsLabel": "4",
    "bathsLabel": "2.5",
    "image": "/assets/morse/plans/canaan-exterior.webp",
    "thumbnail": "/assets/morse/plans/canaan-thumbnail.webp",
    "floors": [
      {
        "label": "Main floor",
        "area": "1,678 sq. ft.",
        "preview": "/assets/morse/plans/canaan-main-floor.webp",
        "pdf": "/assets/morse/plans/canaan-main-floor.pdf"
      },
      {
        "label": "Lower floor — finished area",
        "area": "1,058 sq. ft.",
        "preview": "/assets/morse/plans/canaan-lower-floor.webp",
        "pdf": "/assets/morse/plans/canaan-lower-floor.pdf"
      }
    ]
  },
  {
    "slug": "overlook",
    "name": "The Overlook",
    "areaLabel": "2,443 sq. ft. total — 1,521 main floor + 922 second floor",
    "cardAreaLabel": "2,443 sq. ft. total (two floors)",
    "bedroomSummary": "3 bedrooms + flexible den",
    "style": "Two-storey living",
    "summary": "A two-storey layout with a main-floor primary bedroom, upstairs family room, rooftop patio and dedicated spaces for work and recreation.",
    "description": "The Overlook places the primary bedroom, an island kitchen, dining area and great room on the main floor. Upstairs, two bedrooms share a family room alongside two offices and a rooftop patio. A main-floor den/study, simulator room and attached garage add distinct spaces.",
    "features": [
      "Main-floor primary bedroom",
      "Kitchen island, dining area and great room",
      "Upstairs family room and rooftop patio",
      "Den/study and two upstairs offices",
      "Simulator room and attached garage"
    ],
    "specNote": "The main- and second-floor sheets print separate living areas of 1,521 and 922 sq. ft., respectively; their combined reported area is 2,443 sq. ft., not independently measured. Counts cover only these two supplied floors: one main-floor bedroom and two upstairs, with one full bath and one half bath downstairs and one full bath upstairs. The den/study and offices are not counted as bedrooms. The sheets do not explicitly document garage or simulator-room inclusion in the living-area figure. These drawings are brainstorming material, not construction-ready plans.",
    "bedsLabel": "3",
    "bathsLabel": "2.5",
    "image": "/assets/morse/plans/overlook-exterior.webp",
    "thumbnail": "/assets/morse/plans/overlook-thumbnail.webp",
    "floors": [
      {
        "label": "Main floor",
        "area": "1,521 sq. ft.",
        "preview": "/assets/morse/plans/overlook-main-floor.webp",
        "pdf": "/assets/morse/plans/overlook-main-floor.pdf"
      },
      {
        "label": "Second floor",
        "area": "922 sq. ft.",
        "preview": "/assets/morse/plans/overlook-second-floor.webp",
        "pdf": "/assets/morse/plans/overlook-second-floor.pdf"
      }
    ]
  },
  {
    "slug": "willow",
    "name": "The Willow",
    "areaLabel": "2,233 sq. ft. main-floor living area",
    "cardAreaLabel": "2,233 sq. ft. main floor",
    "bedroomSummary": "3 bedrooms + flexible study and office",
    "style": "Main-floor living",
    "summary": "The Willow pairs three main-floor bedrooms with a great room, island kitchen, separate study and office.",
    "description": "The Willow brings three bedrooms together with a great room, dining area and island kitchen. A pantry, separate study and office add useful spaces, while the primary suite includes a tub, shower and dual sinks. The plan also shows an attached garage and a deck.",
    "features": [
      "Three bedrooms on the supplied main-floor plan",
      "Primary ensuite with tub, shower and dual sinks",
      "Great room, dining area and island kitchen",
      "Pantry, separate study and office",
      "Attached garage with two vehicle doors"
    ],
    "specNote": "The supplied sheet shows the main floor and prints 2,233 sq. ft. as living area. Room counts cover this floor only: three bedrooms, two full bathrooms and one powder room. The study and office are not counted as bedrooms. Stairs marked UP are shown, but no upper-floor drawing or area is provided. These concept drawings are brainstorming material, not construction-ready plans.",
    "bedsLabel": "3",
    "bathsLabel": "2.5",
    "image": "/assets/morse/plans/willow-exterior.webp",
    "thumbnail": "/assets/morse/plans/willow-thumbnail.webp",
    "floors": [
      {
        "label": "Main floor",
        "area": "2,233 sq. ft.",
        "preview": "/assets/morse/plans/willow-main-floor.webp",
        "pdf": "/assets/morse/plans/willow-main-floor.pdf"
      }
    ]
  },
  {
    "slug": "wallace",
    "name": "The Wallace",
    "areaLabel": "1,458 sq. ft. main-floor living area",
    "cardAreaLabel": "1,458 sq. ft. main floor",
    "bedroomSummary": "2 bedrooms + flexible den",
    "style": "Single-level living",
    "summary": "Single-level living with two bedrooms, a flexible den, open living spaces and an attached garage.",
    "description": "The Wallace brings the kitchen, dining area and great room together in a single-level layout. Two bedrooms are complemented by a flexible den/bedroom, with a kitchen island, pantry and two bathrooms. An attached garage and covered front porch complete the design.",
    "features": [
      "Open kitchen, dining and great room",
      "Kitchen island and pantry",
      "Primary bedroom with an ensuite shower bathroom",
      "Flexible den/bedroom",
      "Attached garage and covered front porch"
    ],
    "specNote": "Only a single main-floor drawing is supplied, with a printed living area of 1,458 sq. ft.; no additional floors are included in these facts. Two full bathrooms are verified from fixtures: one with a tub and one with a shower. The room marked DEN/BDRM is flexible space, not a guaranteed third bedroom. The garage is shown separately, but its area and exclusion from the printed living area are not explicitly stated.",
    "bedsLabel": "2 + flexible den/bedroom",
    "bathsLabel": "2",
    "image": "/assets/morse/plans/wallace-exterior.webp",
    "thumbnail": "/assets/morse/plans/wallace-thumbnail.webp",
    "floors": [
      {
        "label": "Main floor",
        "area": "1,458 sq. ft.",
        "preview": "/assets/morse/plans/wallace-main-floor.webp",
        "pdf": "/assets/morse/plans/wallace-main-floor.pdf"
      }
    ]
  }
];

// A compact homepage selection mixing existing and newly supplied designs.
const FEATURED_PLAN_SLUGS = ["maple", "modern", "willow", "hollow"];
export const FEATURED_HOUSE_PLANS = FEATURED_PLAN_SLUGS
  .map(slug => HOUSE_PLANS.find(plan => plan.slug === slug))
  .filter((plan): plan is HousePlan => !!plan);

export function getHousePlan(slug?: string): HousePlan | undefined {
  return HOUSE_PLANS.find(plan => plan.slug === slug);
}
