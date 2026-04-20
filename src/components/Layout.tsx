/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ReactNode } from "react";
import Navigation from "./Navigation.tsx";
import Footer from "./Footer.tsx";
import { WealthyVibesData } from "../services/wealthyVibesData.ts";

interface LayoutProps {
  children: ReactNode;
  data: WealthyVibesData;
}

export default function Layout({ children, data }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-surface overflow-x-hidden selection:bg-primary-container/30 selection:text-primary">
      <Navigation 
        navItems={data.navigation} 
        brandName={data.brand_name} 
        founderImage={data.about.founder_image_url} 
      />
      <main className="flex-grow pt-20 sm:pt-32 flex flex-col">
        {children}
      </main>
      <Footer brandName={data.brand_name} />
    </div>
  );
}
