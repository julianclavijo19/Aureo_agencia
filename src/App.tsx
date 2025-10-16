import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { About } from './components/About';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Portfolio } from './components/Portfolio';
import { Testimonials } from './components/Testimonials';
import { Team } from './components/Team';
import { Blog } from './components/Blog';
import { CTA } from './components/CTA';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Toaster } from './components/ui/sonner';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Process />
      <Portfolio />
      <Testimonials />
      <Team />
      <Blog />
      <CTA />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
}
