/**
 * ==============================================================================
 *                         CLIENT CUSTOMIZATION
 * ==============================================================================
 * 
 * MASTER INTERIOR DESIGN WEBSITE TEMPLATE CONFIGURATION
 * 
 * Specifically designed for interior designers, interior architecture studios,
 * and residential/commercial space transformation professionals.
 * 
 * To customize this website for any interior design business, simply update
 * the values in this file. You do NOT need to modify page templates, layouts,
 * or component code.
 * 
 * Changes made here will automatically update throughout all pages:
 * - Studio name, category, and core value proposition
 * - Brand styling (palette, accents, fonts)
 * - Hero headline variations & space transformation messaging
 * - Problem & solution section ("Designing a space can feel overwhelming")
 * - 6 Core Interior Design Services & dynamic detail pages
 * - Before & After transformation showcase
 * - Credibility & trust metrics ("Trusted by homeowners and businesses...")
 * - Portfolio projects & image lightbox
 * - Client reviews & sample testimonial disclosures
 * - Design process timeline (5-step roadmap)
 * - Interior design FAQ accordion
 * - Direct contact info, WhatsApp, address, studio hours, and Google Maps
 * 
 * ==============================================================================
 */

export interface ServiceItem {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  icon: string; // Lucide icon name, e.g. "Home", "Sparkles", "Compass", "Layers", "Building", "Scissors"
  image?: string;
  benefits: string[];
  whatsIncluded: string[];
  duration?: string;
  startingPrice?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string; // e.g. "Living Rooms", "Bedrooms", "Kitchens", "Full Homes", "Offices", "Commercial Spaces"
  location: string;
  image: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  customerName: string;
  roleOrLocation: string;
  review: string;
  rating: number; // 1 to 5
  avatar?: string;
  serviceUsed?: string;
  date?: string;
  isSamplePlaceholder?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export interface BenefitItem {
  icon: string;
  title: string;
  description: string;
}

export interface ProblemItem {
  title: string;
  description: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image?: string;
}

export interface ClientConfig {
  // ==========================================
  // 1. BUSINESS
  // ==========================================
  business: {
    name: string;
    city: string;
    category: string;
    tagline: string;
    shortDescription: string;
    heroEyebrow: string;
    heroHeadline: string;
    heroHeadlineVariations: string[];
    heroSupportingCopy: string;
    storyHeadline: string;
    storyText: string[];
    mission: string;
    values: { title: string; description: string }[];
    logoText: string;
    logoImageUrl?: string;
  };

  // ==========================================
  // 2. BRAND
  // ==========================================
  brand: {
    primaryColor: string;     // Main brand color (Deep architectural slate/charcoal/bronze)
    secondaryColor: string;   // Secondary darker tone (headers, deep surfaces)
    accentColor: string;      // Warm accent tone (soft bronze, warm ochre, muted gold)
    backgroundColor: string;  // Subtle warm alabaster canvas
    textColor: string;        // Body typography color
    cardBackground: string;   // Card surface color
    headingFont: string;
    bodyFont: string;
    borderRadius: "rounded-md" | "rounded-lg" | "rounded-xl" | "rounded-2xl" | "rounded-full";
  };

  // ==========================================
  // 3. IMAGES
  // ==========================================
  images: {
    heroImage: string;
    heroImageAlt: string;
    aboutImage: string;
    aboutImageAlt: string;
    ctaBannerImage?: string;
    defaultServiceImage: string;
  };

  // ==========================================
  // 4. CONTACT
  // ==========================================
  contact: {
    phone: string;
    phoneRaw: string;
    whatsapp: string;
    whatsappFormatted: string;
    email: string;
    address: {
      street: string;
      suite?: string;
      city: string;
      state: string;
      postalCode: string;
      country: string;
      fullFormatted: string;
    };
    businessHours: {
      days: string;
      hours: string;
    }[];
  };

  // ==========================================
  // 5. SOCIAL MEDIA (empty string hides the icon)
  // ==========================================
  social: {
    instagram: string;
    facebook: string;
    linkedin: string;
    youtube: string;
    tiktok: string;
    x: string;
  };

  // ==========================================
  // 6. MAPS & REVIEWS
  // ==========================================
  mapsAndReviews: {
    googleMapsEmbedUrl: string;
    googleMapsDirectionsUrl: string;
    googleReviewsUrl: string;
    overallRating: number;
    reviewCount: string;
    ratingDisclaimer: string;
  };

  // ==========================================
  // 7. TRUST BAR CREDENTIALS
  // ==========================================
  trustBar: {
    headline: string;
    rating: string;
    ratingCount: string;
    yearsInBusiness: string;
    clientsServed: string;
    serviceArea: string;
  };

  // ==========================================
  // 8. CUSTOMER PROBLEM SECTION ("Designing a space can feel overwhelming")
  // ==========================================
  problemSection: {
    heading: string;
    supportingCopy: string;
    problems: ProblemItem[];
    ctaText: string;
  };

  // ==========================================
  // 9. BEFORE & AFTER TRANSFORMATION
  // ==========================================
  beforeAfter: {
    enabled: boolean;
    heading: string;
    supportingCopy: string;
    beforeImage: string;
    afterImage: string;
    beforeTitle: string;
    beforeDescription: string;
    afterTitle: string;
    afterDescription: string;
    ctaText: string;
  };

  // ==========================================
  // 10. SERVICES (Common interior design services)
  // ==========================================
  services: ServiceItem[];

  // ==========================================
  // 11. WHY CHOOSE US / BENEFITS
  // ==========================================
  benefits: BenefitItem[];

  // ==========================================
  // 12. PROCESS STEPS (5-step roadmap)
  // ==========================================
  process: ProcessStep[];

  // ==========================================
  // 13. PROJECTS / GALLERY
  // ==========================================
  gallery: GalleryItem[];

  // ==========================================
  // 14. TESTIMONIALS (Sample Placeholders)
  // ==========================================
  testimonials: TestimonialItem[];

  // ==========================================
  // 15. FAQ
  // ==========================================
  faq: FaqItem[];

  // ==========================================
  // 16. TEAM (Optional, empty [] to hide)
  // ==========================================
  team: TeamMember[];

  // ==========================================
  // 17. CALL TO ACTION STRIP
  // ==========================================
  cta: {
    headline: string;
    subheadline: string;
    primaryButtonText: string;
    secondaryButtonText: string;
  };

  // ==========================================
  // 18. SEO
  // ==========================================
  seo: {
    metaTitleTemplate: string;
    metaDescriptionTemplate: string;
  };
}

/**
 * DEFAULT MASTER WIREFRAME CONFIGURATION SPECIFICALLY FOR INTERIOR DESIGNERS
 */
export const defaultClientConfig: ClientConfig = {
  // 1. BUSINESS
  business: {
    name: "ELYSIAN INTERIORS",
    city: "[YOUR CITY]",
    category: "Interior Design & Architecture",
    tagline: "Luxury interior design solutions that reflect your lifestyle and personality.",
    shortDescription: "From thoughtful space planning to bespoke architectural interior design, we help homeowners and businesses create spaces that are timeless, functional, and uniquely personal.",
    heroEyebrow: "WE DESIGN",
    heroHeadline: "BEAUTIFUL SPACES THAT INSPIRE",
    heroHeadlineVariations: [
      "BEAUTIFUL SPACES THAT INSPIRE",
      "We Create Spaces That Tell Your Story",
      "Thoughtful Interiors. Beautifully Designed Around You.",
      "Turn Your Space Into a Place You Love Coming Home To.",
      "Spaces Designed Around the Way You Live."
    ],
    heroSupportingCopy: "Luxury interior design solutions that reflect your lifestyle, architectural preferences, and personality.",
    storyHeadline: "We Create Spaces That Tell Your Story",
    storyText: [
      "At ELYSIAN INTERIORS, we blend creativity, functionality, and timeless architectural design to craft spaces that are both beautiful and deeply personal.",
      "We work closely with our clients to understand their lifestyle, daily habits, and aesthetic sensibilities before developing a cohesive architectural vision.",
      "Whether you are moving into a new residence, reimagining an existing property, or establishing an inspiring commercial environment, we provide clear design direction, tactile material curation, and structured execution from concept to completion."
    ],
    mission: "To deliver spaces with architectural cohesion, tactile warmth, and timeless elegance that make coming home the best part of every day.",
    values: [
      {
        title: "Bespoke Design Direction",
        description: "Translating your fragmented inspirations into one harmonious, well-orchestrated architectural narrative."
      },
      {
        title: "Thoughtful Space Planning",
        description: "Optimizing circulation, natural light, and discreet storage so every square foot functions effortlessly."
      },
      {
        title: "Tactile Material Curation",
        description: "Carefully balancing natural woods, fluted stones, brushed bronzes, and artisanal textiles that endure."
      },
      {
        title: "Transparent Collaboration",
        description: "Clear roadmaps, dimensioned documentation, and open communication with no hidden surprises."
      }
    ],
    logoText: "ELYSIAN",
    logoImageUrl: "" // Leave blank to use stylized brand text mark
  },

  // 2. BRAND PALETTE (Matching Reference)
  brand: {
    primaryColor: "#1c261d",     // Deep Architectural Forest Charcoal
    secondaryColor: "#242d25",   // Rich Charcoal Forest
    accentColor: "#b68d40",      // Warm Gold / Bronze
    backgroundColor: "#faf8f5",  // Warm Limestone Ivory Canvas
    textColor: "#242724",        // Rich Architectural Charcoal Text
    cardBackground: "#ffffff",   // Pure Card Canvas
    headingFont: "Cormorant Garamond, serif",
    bodyFont: "Plus Jakarta Sans, sans-serif",
    borderRadius: "rounded-full"
  },

  // 3. IMAGES (Curated High-Resolution Editorial Photography Matching Reference)
  images: {
    heroImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=85",
    heroImageAlt: "Luxury arched living room with olive armchair, curved cream sofa, and warm ambient light",
    aboutImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
    aboutImageAlt: "Architectural lounge chair beside minimalist stone fireplace and oak shelving",
    ctaBannerImage: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=2000&q=85",
    defaultServiceImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85"
  },

  // 4. CONTACT
  contact: {
    phone: "+1 (555) 342-8920",
    phoneRaw: "+15553428920",
    whatsapp: "15553428920",
    whatsappFormatted: "+1 (555) 342-8920",
    email: "design@studiolumina.example",
    address: {
      street: "742 Design Quarter Boulevard",
      suite: "Studio Suite 300",
      city: "San Francisco",
      state: "CA",
      postalCode: "94103",
      country: "USA",
      fullFormatted: "742 Design Quarter Boulevard, Studio Suite 300, San Francisco, CA 94103"
    },
    businessHours: [
      { days: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
      { days: "Saturday", hours: "10:00 AM - 3:00 PM (By Consultation)" },
      { days: "Sunday", hours: "Closed / On-Site Site Visits" }
    ]
  },

  // 5. SOCIAL MEDIA
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
    youtube: "",
    tiktok: "",
    x: "https://x.com"
  },

  // 6. MAPS & REVIEWS
  mapsAndReviews: {
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019553754924!2d-122.40864382348507!3d37.78779297198284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580894a4c5185%3A0xb35a0f6797a7a288!2sUnion%20Square!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus",
    googleMapsDirectionsUrl: "https://maps.google.com",
    googleReviewsUrl: "https://google.com/maps",
    overallRating: 4.9,
    reviewCount: "85+",
    ratingDisclaimer: "Verified client project reviews across residential and commercial interior spaces"
  },

  // 7. TRUST BAR CREDENTIALS
  trustBar: {
    headline: "Trusted by homeowners and businesses to create beautiful, functional spaces.",
    rating: "4.9 ★",
    ratingCount: "85+ Client Reviews",
    yearsInBusiness: "10+ Years Experience",
    clientsServed: "140+ Spaces Transformed",
    serviceArea: "Metropolitan Area & Beyond"
  },

  // 8. CUSTOMER PROBLEM SECTION
  problemSection: {
    heading: "Designing a Space Can Feel Overwhelming",
    supportingCopy: "Choosing layouts, colors, materials, furniture, lighting, and finishes can quickly become overwhelming. You shouldn't have to figure everything out on your own.",
    problems: [
      {
        title: "Don't Know Where to Start?",
        description: "You have a space, but you're not sure how to turn your ideas, Pinterest boards, and floor plans into a cohesive, complete design."
      },
      {
        title: "Too Many Choices?",
        description: "From flooring and lighting to furniture, fabrics, and hardware finishes, there are countless decisions to make without knowing if they will match."
      },
      {
        title: "Worried Things Won't Work Together?",
        description: "A beautiful room needs more than individual pieces. The layout, colors, materials, lighting, and furniture all need to work together in harmony."
      },
      {
        title: "Want to Make Better Use of Your Space?",
        description: "Thoughtful planning can help your space feel more open, functional, comfortable, and intentional, maximizing every square foot."
      }
    ],
    ctaText: "Let's Talk About Your Space"
  },

  // 9. BEFORE & AFTER SECTION
  beforeAfter: {
    enabled: true,
    heading: "See the Transformation",
    supportingCopy: "Every project starts with a space. Thoughtful planning and design can completely change how that space looks, feels, and functions.",
    beforeImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85",
    afterImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
    beforeTitle: "Untreated Raw Concrete & Bare Layout",
    beforeDescription: "Disjointed circulation, poor artificial lighting, and cold, uncoordinated surfaces.",
    afterTitle: "Tailored Living Sanctuary",
    afterDescription: "Bespoke fluted timber feature wall, ambient layered lighting, custom lounge seating, and curated natural textiles.",
    ctaText: "Explore More Transformations"
  },

  // 10. SERVICES (6 Core Interior Design Services)
  services: [
    {
      id: "srv-residential",
      slug: "residential-interior-design",
      name: "Residential Interior Design",
      shortDescription: "Thoughtfully designed homes that balance beauty, comfort, functionality, and your personal style.",
      fullDescription: "Our residential interior design service is tailored for homeowners who want their living environment to feel cohesive, comfortable, and uniquely reflective of their life. We guide you through space planning, custom cabinetry design, finishes, furniture curation, and lighting schemes.",
      icon: "Home",
      image: "/images/service-1.svg",
      benefits: [
        "A cohesive look across all connecting rooms",
        "Functional layouts tailored around your family's daily habits",
        "Carefully balanced natural light, acoustics, and privacy",
        "Clear visualization before purchasing materials or furnishings"
      ],
      whatsIncluded: [
        "In-depth design consultation and spatial discovery",
        "Dimensioned 2D floor plans & furniture circulation maps",
        "Curated material, paint, and surface mood boards",
        "Lighting, switch, and power placement guidelines",
        "Detailed furniture, fixture, and decor schedule"
      ],
      duration: "4 to 8 Weeks",
      startingPrice: "Custom Project Proposal"
    },
    {
      id: "srv-living-room",
      slug: "living-room-design",
      name: "Living Room Design",
      shortDescription: "Create a living space that feels welcoming, cohesive, and designed around the way you use it.",
      fullDescription: "As the social centerpiece of your home, your living room should balance relaxed lounging with effortless hosting. We design balanced furniture arrangements, custom media joinery, tactile rugs, and layered ambient lighting that make the room feel warm and inviting.",
      icon: "Sparkles",
      image: "/images/service-2.svg",
      benefits: [
        "Optimized conversational seating layouts",
        "Integrated media and discreet storage solutions",
        "Warm, glare-free layered lighting zones",
        "Harmonious color schemes that transition to adjacent rooms"
      ],
      whatsIncluded: [
        "Seating & circulation space plan",
        "Custom media console & bookshelf concepts",
        "Sofa, armchair, and coffee table curation",
        "Textile, curtain, and rug selection",
        "Artwork & accent decor placement guidelines"
      ],
      duration: "2 to 4 Weeks",
      startingPrice: "Room-Based Design Fee"
    },
    {
      id: "srv-bedroom",
      slug: "bedroom-design",
      name: "Bedroom Design",
      shortDescription: "Create a comfortable and personalized bedroom with thoughtful layouts, materials, colors, and lighting.",
      fullDescription: "We transform primary suites and guest bedrooms into restorative sanctuaries. By focusing on calm color palettes, tactile fabrics, acoustic comfort, blackout window solutions, and intuitive bedside lighting, we create bedrooms designed for deep rest.",
      icon: "Layers",
      image: "/images/service-3.svg",
      benefits: [
        "Calming atmosphere designed for restorative rest",
        "Efficient wardrobe and closet layout planning",
        "Dimmable, glare-free bedside and accent lighting",
        "Luxurious, breathable bedding and textile curation"
      ],
      whatsIncluded: [
        "Bed positioning & flow layout",
        "Custom headboard & millwork wall design",
        "Nightstand & bedside lighting specification",
        "Blackout drapery & acoustic treatment plan",
        "Wardrobe storage optimization advice"
      ],
      duration: "2 to 3 Weeks",
      startingPrice: "Room-Based Design Fee"
    },
    {
      id: "srv-kitchen",
      slug: "kitchen-design",
      name: "Kitchen Design",
      shortDescription: "Make the kitchen both beautiful and practical with smart planning, storage, finishes, and layouts.",
      fullDescription: "The kitchen is where family and friends naturally gather. We balance ergonomic cooking workflows with exquisite stone finishes, durable cabinetry joinery, hidden pantry storage, and task lighting that makes meal preparation a pleasure.",
      icon: "Compass",
      image: "/images/service-4.svg",
      benefits: [
        "Ergonomic work triangle for prep, cooking, and cleanup",
        "Maximized pantry and intelligent internal cabinet storage",
        "Hard-wearing, stain-resistant counter and backsplash materials",
        "Seamless aesthetic connection to dining and breakfast areas"
      ],
      whatsIncluded: [
        "Full kitchen layout and cabinet elevation drawings",
        "Countertop, backsplash, and island material selections",
        "Hardware, sink, and faucet specifications",
        "Under-cabinet and overhead task lighting plan",
        "Bar stool and dining transition coordination"
      ],
      duration: "3 to 5 Weeks",
      startingPrice: "Tailored Design Scope"
    },
    {
      id: "srv-office",
      slug: "office-interior-design",
      name: "Office Interior Design",
      shortDescription: "Create a professional workspace designed for productivity, comfort, and your brand.",
      fullDescription: "Whether designing an executive home study, a creative agency workspace, or commercial offices, we prioritize ergonomic posture, acoustic dampening, natural light management, and clean cable integration to keep you focused and inspire visiting clients.",
      icon: "Building",
      image: "/images/service-1.svg",
      benefits: [
        "Ergonomic desk and posture-support seating selection",
        "Acoustic treatments for distraction-free calls and meetings",
        "Discreet cable routing and tech integration",
        "Professional backdrop that conveys confidence on video calls"
      ],
      whatsIncluded: [
        "Desk orientation & ergonomic analysis",
        "Custom shelving, filing, and display millwork",
        "Task and glare-free video conference lighting",
        "Client seating and lounge area layout",
        "Material finishes reflecting your professional identity"
      ],
      duration: "3 to 6 Weeks",
      startingPrice: "Scope-Based Fee"
    },
    {
      id: "srv-full-home",
      slug: "full-home-interior-design",
      name: "Full Home Interior Design",
      shortDescription: "A complete design approach that brings the look and feel of your home together from room to room.",
      fullDescription: "Our comprehensive whole-home design service delivers complete architectural harmony across every room. We create a unified master narrative, coordinating flooring transitions, ceiling details, bespoke joinery, wall treatments, and furnishings across your entire residence.",
      icon: "Home",
      image: "/images/service-2.svg",
      benefits: [
        "Seamless stylistic flow between living, private, and outdoor zones",
        "Avoids costly piecemeal mistakes and mismatched purchases",
        "Single dedicated design team managing all aesthetic details",
        "Detailed schedules ready for smooth contractor execution"
      ],
      whatsIncluded: [
        "Whole-property spatial masterplan & circulation review",
        "Complete room-by-room design concept presentations",
        "Comprehensive architectural finish and color binder",
        "Complete lighting, electrical, and plumbing schedules",
        "Turnkey furniture procurement and styling directory"
      ],
      duration: "8 to 14 Weeks",
      startingPrice: "Comprehensive Home Proposal"
    }
  ],

  // 11. WHY WORK WITH AN INTERIOR DESIGNER
  benefits: [
    {
      icon: "Compass",
      title: "A Clear Design Direction",
      description: "Bring your ideas together into one cohesive vision that feels intentional, harmonious, and grounded."
    },
    {
      icon: "Layers",
      title: "Better Space Planning",
      description: "Make thoughtful use of the space you already have, avoiding cramped circulation and awkward furniture sizes."
    },
    {
      icon: "Sparkles",
      title: "Professional Guidance",
      description: "Get experienced support with design decisions, materials, finishes, furniture, colors, and layered lighting."
    },
    {
      icon: "HeartHandshake",
      title: "A Design That Feels Personal",
      description: "Create an interior that reflects your taste, lifestyle, and requirements—not a generic showroom copy."
    },
    {
      icon: "ShieldCheck",
      title: "Less Guesswork",
      description: "Have a professional guide you through the design process, preventing costly mistakes and mismatched purchases."
    },
    {
      icon: "CheckCircle",
      title: "Structured Execution",
      description: "Receive organized schedules, drawings, and specifications so your contractors execute the vision smoothly."
    }
  ],

  // 12. DESIGN PROCESS (5-step roadmap)
  process: [
    {
      step: 1,
      title: "Tell Us About Your Space",
      description: "Share your requirements, ideas, property details, and vision through our initial inquiry form or direct call."
    },
    {
      step: 2,
      title: "Discuss Your Project",
      description: "We learn about your needs, lifestyle, functional priorities, timeline, and project goals during an initial consultation."
    },
    {
      step: 3,
      title: "Develop the Design",
      description: "We translate your ideas into a thoughtful interior concept with dimensioned space plans, layouts, and mood boards."
    },
    {
      step: 4,
      title: "Refine the Details",
      description: "Together we review layouts, materials, colors, finishes, custom cabinetry, lighting, and furniture selections."
    },
    {
      step: 5,
      title: "Bring the Vision to Life",
      description: "Move forward with finalized design documentation, itemized schedules, and coordinated execution according to your services."
    }
  ],

  // 13. PROJECTS / GALLERY (Matching 4-card reference showcase + full portfolio)
  gallery: [
    {
      id: "gal-1",
      title: "Modern Living Room",
      category: "Living Rooms",
      location: "Metropolitan District",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
      description: "Warm, inviting & elegant"
    },
    {
      id: "gal-2",
      title: "Luxury Bedroom",
      category: "Bedrooms",
      location: "Highland Heights",
      image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=85",
      description: "Comfort meets luxury"
    },
    {
      id: "gal-3",
      title: "Minimalist Kitchen",
      category: "Kitchens",
      location: "Lakeside Enclave",
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85",
      description: "Sleek, clean & functional"
    },
    {
      id: "gal-4",
      title: "Office Interior",
      category: "Offices",
      location: "Design Quarter",
      image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=85",
      description: "Productive & inspiring"
    },
    {
      id: "gal-5",
      title: "Architectural Penthouse",
      category: "Full Homes",
      location: "Downtown Marina",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85",
      description: "Seamless spatial flow & panoramic vistas"
    },
    {
      id: "gal-6",
      title: "Boutique Hospitality Lounge",
      category: "Commercial Spaces",
      location: "Heritage Quarter",
      image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1200&q=85",
      description: "Curated textures & layered illumination"
    }
  ],

  // 14. TESTIMONIALS (Sample Placeholders clearly labeled)
  testimonials: [
    {
      id: "test-1",
      customerName: "Sarah & David M.",
      roleOrLocation: "Homeowners, 4-Bedroom Residence",
      review: "Working with this studio completely changed how we experience our home. The space planning in our living and dining area made the rooms feel twice as spacious, and every material recommendation was spot-on.",
      rating: 5,
      serviceUsed: "Full Home Interior Design",
      date: "Recent Client Project",
      isSamplePlaceholder: true
    },
    {
      id: "test-2",
      customerName: "Marcus T.",
      roleOrLocation: "Apartment Renovation",
      review: "I had saved hundreds of Pinterest images but had no idea how to pull them together without making costly mistakes. Their guidance on lighting, colors, and custom millwork gave us a cohesive, serene home we love.",
      rating: 5,
      serviceUsed: "Living Room & Kitchen Design",
      date: "Recent Client Project",
      isSamplePlaceholder: true
    },
    {
      id: "test-3",
      customerName: "Elena R.",
      roleOrLocation: "Boutique Creative Agency",
      review: "From the first 2D layout to the final material selection, the communication was organized and transparent. Our team now has a productive, beautiful office space that truly reflects our brand.",
      rating: 5,
      serviceUsed: "Office Interior Design",
      date: "Recent Client Project",
      isSamplePlaceholder: true
    }
  ],

  // 15. INTERIOR DESIGN FAQ
  faq: [
    {
      question: "How does the interior design process work?",
      answer: "We begin with an initial discovery conversation to understand your space, functional requirements, style preferences, and investment goals. Next, we prepare 2D layout floor plans and mood boards, followed by detailed material schedules, 3D visualizations, and execution documentation."
    },
    {
      question: "How do I get started?",
      answer: "Simply reach out via our contact form, call our studio, or message us on WhatsApp. We will schedule an initial consultation to review your property details, floor plans, and design goals."
    },
    {
      question: "Do you provide residential interior design?",
      answer: "Yes. Residential interior design is our core specialty. We work with homeowners, apartment owners, and villa owners on new constructions, renovations, and comprehensive interior furnishings."
    },
    {
      question: "Do you design individual rooms?",
      answer: "Yes. While many clients engage us for whole-home transformations, we frequently design individual high-impact spaces such as living rooms, kitchens, or primary bedroom suites."
    },
    {
      question: "Do you work on complete home interiors?",
      answer: "Yes. Our Full Home service provides end-to-end design continuity across all living areas, bedrooms, bathrooms, and transitions to ensure an aesthetically unified residence."
    },
    {
      question: "Do you provide office or commercial interior design?",
      answer: "Yes. We design professional corporate offices, executive home studios, boutique clinics, and hospitality environments that balance ergonomic comfort with elevated brand presence."
    },
    {
      question: "How long does an interior design project take?",
      answer: "Timelines depend on the scale of your space and the depth of design services required. A single room concept typically takes 2 to 4 weeks, while full-home design documentation usually spans 6 to 12 weeks before execution begins."
    },
    {
      question: "Can you work within my budget?",
      answer: "During our initial consultation, we discuss your investment range transparently. We help you prioritize where to invest—such as durable high-touch materials or custom joinery—and where to economize, without compromising on quality."
    },
    {
      question: "Do you handle execution as well as design?",
      answer: "Our services are flexible depending on your needs. We provide comprehensive design drawings and technical specifications that any licensed contractor can follow, and can coordinate with your contractors or recommend trusted local artisans."
    }
  ],

  // 16. TEAM (Optional)
  team: [
    {
      name: "Lead Design Principal",
      role: "Founder & Creative Director",
      bio: "Over a decade of experience crafting residential sanctuaries and commercial spaces with a focus on spatial flow, natural materials, and timeless proportions."
    },
    {
      name: "Senior Interior Architect",
      role: "Space Planning & Millwork Specialist",
      bio: "Specializes in bespoke cabinetry, ergonomic kitchen planning, and custom joinery detailing that maximizes functional storage."
    },
    {
      name: "FF&E & Styling Coordinator",
      role: "Materials, Textiles & Furnishings",
      bio: "Passionate about curating sustainable textiles, artisan lighting fixtures, and unique color schemes that give every project its soul."
    }
  ],

  // 17. CALL TO ACTION STRIP
  cta: {
    headline: "Ready to Talk About Your Space?",
    subheadline: "Whether you're starting with an empty home, renovating an existing space, or simply exploring ideas, let's talk about what you're looking to create.",
    primaryButtonText: "Book a Consultation",
    secondaryButtonText: "WhatsApp Us"
  },

  // 18. SEO
  seo: {
    metaTitleTemplate: "[Business Name] | Interior Designers in [City]",
    metaDescriptionTemplate: "Explore interior design services from [Business Name] in [City]. View our projects, services, client reviews, and contact us about your space."
  }
};

/**
 * PRESET DEMOS SPECIFIC TO INTERIOR DESIGN STYLES
 * Allows the user/client to test different interior design aesthetics in real-time.
 */
export const presetDemos: Record<string, Partial<ClientConfig>> = {
  wireframe: defaultClientConfig,

  warmMinimalist: {
    business: {
      ...defaultClientConfig.business,
      name: "ATELIER HAVEN INTERIORS",
      category: "Warm Minimalist Interior Design",
      tagline: "Quiet luxury, natural materials, and calming spaces designed for living."
    },
    brand: {
      ...defaultClientConfig.brand,
      primaryColor: "#44403c",     // Warm Stone
      secondaryColor: "#292524",
      accentColor: "#b45309",      // Warm Amber
      backgroundColor: "#fafaf9",
      textColor: "#1c1917"
    }
  },

  japandiModern: {
    business: {
      ...defaultClientConfig.business,
      name: "KURA & CO. DESIGN STUDIO",
      category: "Japandi & Scandinavian Interiors",
      tagline: "Where Scandinavian functionality meets timeless Japanese serenity."
    },
    brand: {
      ...defaultClientConfig.brand,
      primaryColor: "#334155",     // Slate Indigo
      secondaryColor: "#0f172a",
      accentColor: "#d97706",
      backgroundColor: "#f8fafc",
      textColor: "#0f172a"
    }
  },

  luxuryContemporary: {
    business: {
      ...defaultClientConfig.business,
      name: "VERVE ARCHITECTURAL INTERIORS",
      category: "High-End Residential Architecture & Interiors",
      tagline: "Sophisticated modern living crafted with architectural precision."
    },
    brand: {
      ...defaultClientConfig.brand,
      primaryColor: "#171717",     // Deep Obsidian
      secondaryColor: "#0a0a0a",
      accentColor: "#ca8a04",      // Champagne Brass
      backgroundColor: "#ffffff",
      textColor: "#171717"
    }
  }
};
