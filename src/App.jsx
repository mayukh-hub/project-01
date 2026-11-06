
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";
import Stats from "./components/Stats";
import Services from "./components/Services";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="mx-auto  max-w-6xl overflow-hidden shadow-lg">

      <Navbar />
      <Hero />
      <Features />
      <About />
      <Stats />
      <Services />
      <CTA />
      <Footer />

    </div>
  );
}

export default App;

