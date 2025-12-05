// src/App.tsx
import React, { useEffect, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";

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

import { config } from "./constants/config";
import Education from "./components/sections/Education";
import SocialBar from "./components/SocialBar";
import Achievements from "./components/sections/Achievements";
import Certifications from "./components/sections/Certifications";

import YawController from "./components/canvas/YawController";
// using the placeholder model you created
import Model from "./Model";

const App: React.FC = () => {
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

      {/* 3D Canvas overlay — keep outside the main app stack */}
      <div
        className="canvas-wrap"
        style={{ width: "100%", height: "100vh", touchAction: "none" }}
      >
        <Canvas camera={{ position: [0, 0, 2], fov: 50 }} dpr={[1, 2]}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} />

          {/* Suspense ensures lazy-loaded 3D assets don't break the render */}
          <Suspense fallback={null}>
            <YawController sensitivity={0.004} inertia={0.08} maxYaw={Math.PI}>
              <Model />
            </YawController>
            <Preload all />
          </Suspense>
        </Canvas>
      </div>
    </BrowserRouter>
  );
};

export default App;
