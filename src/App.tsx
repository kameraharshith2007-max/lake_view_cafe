import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import QuickActions from '@/components/QuickActions';
import About from '@/components/About';
import FeaturedMenu from '@/components/FeaturedMenu';
import Gallery from '@/components/Gallery';
import CafeGallery from '@/components/CafeGallery';
import FoodGallery from '@/components/FoodGallery';
import Features from '@/components/Features';
import Reviews from '@/components/Reviews';
import ReservationCTA from '@/components/ReservationCTA';
import Location from '@/components/Location';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import MobileActionBar from '@/components/MobileActionBar';

function App() {
  return (
    <div className="relative min-h-screen bg-ink">
      <Navbar />
      <main>
        <Hero />
        <QuickActions />
        <About />
        <FeaturedMenu />
        <Gallery />
        <CafeGallery />
        <FoodGallery />
        <Features />
        <Reviews />
        <ReservationCTA />
        <Location />
        <Contact />
      </main>
      <Footer />
      <MobileActionBar />
    </div>
  );
}

export default App;
