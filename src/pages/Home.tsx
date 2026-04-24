import { Hero } from '../components/Hero';
import { Reviews } from '../components/Reviews';
import { About } from '../components/About';

export function Home() {
  return (
    <div className="pt-20">
      <Hero />
      <About />
      <Reviews />
    </div>
  );
}
