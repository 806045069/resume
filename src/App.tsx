import { useState } from "react";
import { Background } from "./components/Background";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Education } from "./components/Education";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Gallery } from "./components/Gallery";
import { Contact } from "./components/Contact";
import { ContactModal } from "./components/ContactModal";
import { Footer } from "./components/Footer";

export default function App() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="relative min-h-screen">
      <Background />
      <Navbar onOpenContact={() => setContactOpen(true)} />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
}
