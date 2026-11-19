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
  }
];

export function getHousePlan(slug?: string): HousePlan | undefined {
  return HOUSE_PLANS.find(plan => plan.slug === slug);
}
