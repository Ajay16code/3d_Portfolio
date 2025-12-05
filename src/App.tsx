import { BrowserRouter } from "react-router-dom";
import ChatWidget from "./components/ChatWidget";
import {
  About,
  Contact,
  Experience,
  
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import { useEffect } from "react";
import { config } from "./constants/config";
import Education from "./components/sections/Education";
import SocialBar from "./components/SocialBar";
import Achievements from "./components/sections/Achievements";
import Certifications from "./components/sections/Certifications";

const App = () => {
  useEffect(() => {
    if (document.title !== config.html.title) {
      document.title = config.html.title;
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="bg-primary relative z-0">
        <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Education />
        <Tech />
        <div className="min-h-screen bg-slate-900 text-white">
          <main className="p-8">
            <Works />
          </main>
        </div>
        <Achievements />
        <Certifications />
        <Feedbacks />
      
        <ChatWidget />
        <SocialBar />

        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
