/**
 * Wealthy Vibes - Structured Data & Copy
 * Elite Direct Response Copywriting & Backend JSON Architecture
 */

export const NAVIGATION = [
  { name: "Home", path: "/" },
  { name: "Books", path: "/books" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" }
];

export const WEBSITE_COPY = {
  home: {
    heroFeaturedBook: {
      title: "Millionaire Mindset",
      subtitle: "Master your mind before you master your money",
      author: "Srikanth D Secunlapuram",
      aesthetic_hex: "#121212",
      glow_hex: "#D4AF37", // Premium Gold
      short_desc: "A profound deconstruction of the psychological barriers to elite financial freedom.",
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1000&auto=format&fit=crop" // High quality book mockup placeholder
    },
    about: {
      title: "Our Philosophy",
      paragraph: "Wealthy Vibes is founded on the principle that true prosperity begins in the theater of the mind. We curate a specialized collection of intellectual assets designed to reprogram your cognitive framework for exponential scalability. Mastering your inner landscape is the non-negotiable prerequisite for mastering the global markets."
    },
    founder: {
      name: "Srikanth D Secunlapuram",
      title: "Founder & High-Performance Strategist",
      bio: "Srikanth D Secunlapuram is a visionary strategist dedicated to democratizing the secret protocols of the global elite. Through Wealthy Vibes and FrameX Studios, he bridges the gap between raw ambition and systematic wealth creation, specializing in the neurological optimization of the modern investor."
    },
    contact: {
      title: "Strategic Entry",
      details: "Fifth Avenue Atelier | NY 10022",
      cta: "Book a Wealth Demo",
      email: "dispatch@wealthyvibes.com"
    }
  }
};

export const STORE_DATABASE = {
  title: "The Bookshelf",
  library: [
    {
      id: "millionaire-mindset",
      title: "Millionaire Mindset",
      author: "Srikanth D Secunlapuram",
      price: 995,
      aesthetic_hex: "#1A1C1A",
      glow_hex: "#D4AF37",
      short_desc: "Master your mind before you master your money. The ultimate cognitive protocol.",
      hover_intensity: 1.5,
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: "algo-trading-vault",
      title: "The Algorithmic Sovereign",
      author: "Lombard & Co",
      price: 450,
      aesthetic_hex: "#F5F2ED",
      glow_hex: "#DCC3A4",
      short_desc: "A definitive thesis on computational dominance in global liquidity markets.",
      hover_intensity: 1.2
    },
    {
      id: "equity-architect",
      title: "Architectures of Equity",
      author: "Sterling House",
      price: 320,
      aesthetic_hex: "#E9E2D0",
      glow_hex: "#FFDEA5",
      short_desc: "Mastering the structural foundations of commercial acquisition and tenure.",
      hover_intensity: 1.1
    },
    {
      id: "psychology-scarcity",
      title: "The Psychology of Scarcity",
      author: "Dr. Elena Vance",
      price: 285,
      aesthetic_hex: "#DCC3A4",
      glow_hex: "#775A19",
      short_desc: "Navigating the behavioral impulses of the ultra-high-net-worth demographic.",
      hover_intensity: 1.3
    },
    {
      id: "debt-instrument",
      title: "Debt as an Instrument",
      author: "Marcus Thorne",
      price: 195,
      aesthetic_hex: "#EFEEEB",
      glow_hex: "#FFDEA5",
      short_desc: "A mathematical approach to leveraging capital without over-exposure.",
      hover_intensity: 1.0
    },
    {
      id: "family-protocol",
      title: "The Family Office Protocol",
      author: "Heritage Partners",
      price: 850,
      aesthetic_hex: "#D1C5B4",
      glow_hex: "#D4AF37",
      short_desc: "Establishing governance frameworks to preserve legacies across decades.",
      hover_intensity: 1.4
    }
  ]
};

export const CLIENTS_SECTION = {
  client: {
    name: "Srikanth",
    website: "Wealthy Vibes",
    testimonial: "Wealthy Vibes completely transformed my financial perspective. The 'Millionaire Mindset' protocols provided the structural clarity I needed to scale my operations with systematic precision.",
    rating: 5,
    revenue_impact: "+300% Scaling"
  }
};

/**
 * Serverless Integration Logic
 */
export async function fetchWealthyData() {
  try {
    return {
      navigation: NAVIGATION,
      copy: WEBSITE_COPY,
      store: STORE_DATABASE,
      clients: CLIENTS_SECTION
    };
  } catch (error) {
    console.error("Failed to fetch Wealthy Vibes data:", error);
    throw error;
  }
}
