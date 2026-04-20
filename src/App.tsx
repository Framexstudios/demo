/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import { getWealthyVibesData, WealthyVibesData } from "./services/wealthyVibesData.ts";

import Layout from "./components/Layout.tsx";
import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import AboutBooks from "./pages/AboutBooks.tsx";
import BuyBooks from "./pages/BuyBooks.tsx";
import Session from "./pages/Session.tsx";
import Contact from "./pages/Contact.tsx";

function AnimatedRoutes({ data }: { data: WealthyVibesData }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <div key={location.pathname} className="contents">
        <Routes location={location}>
          <Route path="/" element={<Home data={data} />} />
          <Route path="/about" element={<About data={data} />} />
          <Route path="/about-books" element={<AboutBooks data={data} />} />
          <Route path="/buy-books" element={<BuyBooks data={data} />} />
          <Route path="/session" element={<Session data={data} />} />
          <Route path="/contact" element={<Contact data={data} />} />
        </Routes>
      </div>
    </AnimatePresence>
  );
}

export default function App() {
  const [data, setData] = useState<WealthyVibesData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getWealthyVibesData();
        setData(result);
      } catch (error) {
        console.error("Error fetching Wealthy Vibes data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading || !data) {
    return (
      <div className="min-h-screen bg-surface flex items-center justify-center">
        <div className="flex flex-col items-center gap-6">
          <div className="w-16 h-16 border-t-2 border-primary rounded-full animate-spin" />
          <p className="font-serif italic text-primary text-xl animate-pulse">Wealthy Vibes</p>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <Layout data={data}>
        <AnimatedRoutes data={data} />
      </Layout>
    </Router>
  );
}
