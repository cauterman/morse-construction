// The two existing testimonials plus five supplied client letters (23 Nov 2026).
// Excerpts and full bodies retain the clients' words. Only whitespace and enclosing
// quotation marks are normalized. Simmons uses Option 1: Professional & Concise.
export type Testimonial = {
  id: string;
  author: string;
  excerpt: string;
  paragraphs: string[];
  hasFullLetter: boolean;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    "id": "hale",
    "author": "Scott & Stephanie Hale",
    "excerpt": "You took the time to get to know us and educate us about the home building process – allowing us the chance to collaborate on a design that is both functional, beautiful and ideally suited to our family.",
    "paragraphs": [],
    "hasFullLetter": false
  },
  {
    "id": "north",
    "author": "Blaine & Karen North",
    "excerpt": "The whole package that you offer your clients (not just building them a house) certainly exceeded our expectations of what a contractor's role can be. This kind of service is invaluable and worth much in time and money.",
    "paragraphs": [],
    "hasFullLetter": false
  },
  {
    "id": "troy-emily",
    "author": "Troy and Emily",
    "excerpt": "Throughout the process, the team was easy to work with, professional, and genuinely cared about the outcome. Building a custom home is a significant undertaking, and we appreciated their commitment to helping bring our ideas to life.",
    "paragraphs": [
      "We are very happy with our home built by Morse Construction. The finished product reflects the vision we had from the beginning and includes many features and details that were important to us. The quality of the workmanship and attention to detail are evident throughout the home.",
      "Throughout the process, the team was easy to work with, professional, and genuinely cared about the outcome. Building a custom home is a significant undertaking, and we appreciated their commitment to helping bring our ideas to life.",
      "What has stood out most is their commitment to their clients after construction is complete. More than two years later, they continue to be responsive and helpful whenever questions or issues arise. That ongoing support has reinforced our confidence in choosing Morse Construction.",
      "We are pleased to call this house our home and look forward to enjoying it for many years to come. We would be happy to recommend Morse Construction to anyone considering a custom home build."
    ],
    "hasFullLetter": true
  },
  {
    "id": "binns",
    "author": "Michael and Carol Binns",
    "excerpt": "Morse Construction came highly recommended to us by our realtor, and we are immeasurably grateful for that recommendation. An award winning family business with over 30 years of experience in the Annapolis Valley, they provided us with first rate care from floor planning, landscaping, interior design, right down to appliance selection.",
    "paragraphs": [
      "When our home burned beyond repair, we were tasked with finding a quality contractor to rebuild. Morse Construction came highly recommended to us by our realtor, and we are immeasurably grateful for that recommendation. An award winning family business with over 30 years of experience in the Annapolis Valley, they provided us with first rate care from floor planning, landscaping, interior design, right down to appliance selection. Gary, Shawn and Ryan all work together not only on the front end, but they are right there after completion. We cannot recommend them highly enough."
    ],
    "hasFullLetter": true
  },
  {
    "id": "madore",
    "author": "Alex and Hollie Madore",
    "excerpt": "Morse Construction made the process of planning and building our forever home a truly enjoyable experience. Gary was excellent at keeping us involved and informed from start to finish. Even beyond completion, Morse Construction continues to stand by their work, addressing any concern with care and professionalism.",
    "paragraphs": [
      "Morse Construction made the process of planning and building our forever home a truly enjoyable experience. Gary was excellent at keeping us involved and informed from start to finish. Even beyond completion, Morse Construction continues to stand by their work, addressing any concern with care and professionalism."
    ],
    "hasFullLetter": true
  },
  {
    "id": "cockburn",
    "author": "Kevin & Cindy Cockburn",
    "excerpt": "Morse Construction was excellent at keeping us updated during the build process. When we did our walk through any minor issues we had were quickly addressed and they have continued to handle any problems we have encountered in a timely manner.",
    "paragraphs": [
      "As a retired couple we decided to downsize & start our search for a one level new home build. Our research sent us to different areas in the province to see new builds by different builders. Our search kept us returning to a new home build by Morse Construction in Port Williams.",
      "This particular build had just been framed. At this stage we were able to meet with the owner of Morse Construction himself. Gary was very accommodating in allowing us to customize the features we wanted in our home. He was great at guiding us through the many options he offered as finishes for this house.",
      "Gary even came shopping with us when it was time to pick out lights, vanities & bathroom accessories.",
      "The quality & energy efficiency of this home is excellent. We love the craftsmanship & design that Morse Construction has built into this home.",
      "A couple of examples are the unique trim work, the huge outstanding walk in panty and huge island which includes four pullout recycle bins, making our life much simpler. At the same time our house was being finished we wanted a shed built in our backyard. Gary took the dimensions & design that we wanted and had it built for us.",
      "Morse Construction was excellent at keeping us updated during the build process. When we did our walk through any minor issues we had were quickly addressed and they have continued to handle any problems we have encountered in a timely manner.",
      "We love our new energy efficient home & Morse Construction made it a very pleasant experience during the build.",
      "We would highly recommend them if you are looking for a highly skilled and reliable home builder."
    ],
    "hasFullLetter": true
  },
  {
    "id": "simmons",
    "author": "Lisa & Peter Simmons",
    "excerpt": "Morse Construction has built two custom homes for us since 2017, and we couldn’t be more pleased with the results. The quality of workmanship, attention to detail, and commitment to bringing our design vision to life have been exceptional on both projects.",
    "paragraphs": [
      "Morse Construction has built two custom homes for us since 2017, and we couldn’t be more pleased with the results. The quality of workmanship, attention to detail, and commitment to bringing our design vision to life have been exceptional on both projects. Their team’s thorough planning process and focus on every detail, large and small, are what set them apart and contribute greatly to the success of their builds."
    ],
    "hasFullLetter": true
  }
];
