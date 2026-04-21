/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface NavItem {
  label: string;
  path: string;
}

export interface Book {
  id: string;
  title: string;
  author: string;
  price: string;
  short_description: string;
  checkout_badge_text: string;
  aesthetic_hex: string;
  cover_url: string;
}

export interface CredibilityPoint {
  stat: string;
  label: string;
}

export interface LearningPillar {
  title: string;
  description: string;
}

export interface SessionBenefit {
  benefit: string;
}

export interface WealthyVibesData {
  brand_name: string;
  navigation: NavItem[];
  home: {
    hero_headline: string;
    hero_subtitle: string;
    featured_books: Book[];
  };
  about: {
    founder_name: string;
    founder_image_url: string;
    biography: string;
    mission: string;
    vision: string;
    credibility_points: CredibilityPoint[];
  };
  about_books: {
    learning_pillars: LearningPillar[];
  };
  buy_books: {
    store_inventory: Book[];
  };
  session: {
    consultation_title: string;
    session_benefits: string[];
  };
  contact_payments: {
    contact_email: string;
    contact_phone: string;
    instagram_url: string;
    office_address: string;
    accepted_payments: string[];
  };
}

export const wealthyVibesContent: WealthyVibesData = {
  brand_name: "Wealthy Vibes",
  navigation: [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "About Books", path: "/about-books" },
    { label: "Buy Books", path: "/buy-books" },
    { label: "Book a Session", path: "/session" },
    { label: "Contact & Payments", path: "/contact" },
  ],
  home: {
    hero_headline: "Architecting Generational Wealth through Mindset.",
    hero_subtitle: "The Digital Atelier for the Modern Connoisseur of Capital.",
    featured_books: [
      {
        id: "mm-01",
        title: "Millionaire Mindset",
        author: "SS Srikanth",
        price: "$145.00",
        short_description: "A profound exploration into structuring generational wealth and leveraging mindset as a primary asset.",
        checkout_badge_text: "Secured via Stripe",
        aesthetic_hex: "#D4AF37",
        cover_url: "https://picsum.photos/seed/money-book/600/800",
      },
      {
        id: "sa-01",
        title: "Silent Alpha",
        author: "SS Srikanth",
        price: "$210.00",
        short_description: "Mastering the art of unseen leverage and strategic capital allocation.",
        checkout_badge_text: "Secured via Stripe",
        aesthetic_hex: "#000000",
        cover_url: "https://picsum.photos/seed/luxury-book/600/800",
      }
    ],
  },
  about: {
    founder_name: "SS Srikanth",
    founder_image_url: "https://i.postimg.cc/qML7C9yT/Whats-App-Image-2026-04-20-at-1-19-29-PM.jpg",
    biography: "SS Srikanth is a finance educator and author known for his practical and mindset-focused approach to building wealth. Through his book Millionaire Mindset, SS Srikanth explains how money works in real life and how individuals can develop strong financial habits. The book covers important aspects of finance such as earning, saving, investing, and managing money with discipline. It is designed to help readers shift their thinking toward long-term financial goals and wealth creation. SS Srikanth focuses on simplifying complex financial concepts so that anyone can understand how to take control of their money and improve their financial future through better decisions and a strong money mindset.",
    mission: "To demystify the path to absolute financial freedom for the globally ambitious.",
    vision: "A future where algorithmic precision meets human intuition in the pursuit of prosperity.",
    credibility_points: [
      { stat: "10K+", label: "Readers Globally" },
      { stat: "Proven", label: "Wealth Strategies" },
      { stat: "Premium", label: "1:1 Advisory" }
    ],
  },
  about_books: {
    learning_pillars: [
      { title: "Money Management", description: "Learn to command your cash flow with the discipline of a private bank." },
      { title: "Investing Basics", description: "Moving beyond asset allocation into strategic wealth structuring for the long term." },
      { title: "Wealth Mindset", description: "Master your internal dialogue before you master the markets." }
    ],
  },
  buy_books: {
    store_inventory: [
      {
        id: "mm-01",
        title: "Millionaire Mindset",
        author: "SS Srikanth",
        price: "$145.00",
        short_description: "SS Srikanth's definitive guide to developing strong financial habits and long-term wealth creation.",
        checkout_badge_text: "Secured via Stripe",
        aesthetic_hex: "#D4AF37",
        cover_url: "https://picsum.photos/seed/mm-book/600/800",
      },
      {
        id: "zp-01",
        title: "The Zurich Principles",
        author: "SS Srikanth",
        price: "$185.00",
        short_description: "Swiss banking philosophies translated for the modern digital asset landscape.",
        checkout_badge_text: "Secured via Stripe",
        aesthetic_hex: "#1A1A1A",
        cover_url: "https://picsum.photos/seed/zurich-book/600/800",
      },
      {
        id: "dap-01",
        title: "Digital Atelier Protocol",
        author: "SS Srikanth",
        price: "$295.00",
        short_description: "The premium capstone on blending traditional stewardship with modern decentralized finance.",
        checkout_badge_text: "Secured via Stripe",
        aesthetic_hex: "#F2CA50",
        cover_url: "https://picsum.photos/seed/protocol-book/600/800",
      }
    ],
  },
  session: {
    consultation_title: "Privé Strategy Session",
    session_benefits: [
      "Bespoke 1:1 wealth architecture analysis with SS Srikanth.",
      "Identification of unpriced risk and asymmetric opportunities in your portfolio.",
      "Access to the Private Vault network of digital connoisseurs."
    ],
  },
  contact_payments: {
    contact_email: "atelier@wealthyvibes.luxury",
    contact_phone: "+91 8143365243",
    instagram_url: "https://www.instagram.com/wealthyvibes123?igsh=MXd4cWNlYjl0YmprNg==",
    office_address: "Bahnhofstrasse 45, 8001 Zürich, Switzerland",
    accepted_payments: ["VISA Infinite", "MASTERCARD Black", "WIRE", "CRYPTO"],
  }
};

/**
 * Serverless Integration Logic
 * Clean fetch wrapper to securely pull multi-page JSON data.
 */
export const getWealthyVibesData = async (): Promise<WealthyVibesData> => {
  // In a real production app, this would be an API endpoint.
  // For this implementation, we return the local structured data.
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(wealthyVibesContent);
    }, 500); // Simulate network latency
  });
};
