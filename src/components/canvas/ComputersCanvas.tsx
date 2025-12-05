import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";
import CanvasLoader from "../layout/Loader";
import Computers from "./Computers";

const ComputersCanvas: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 500px)");
    setIsMobile(mq.matches);

    const onChange = (event: MediaQueryListEvent) =>
      setIsMobile(event.matches);

    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <>
      {!isMobile && (
        <div className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
          <Canvas
            className="pointer-events-auto"   // allow mouse rotation
            frameloop="always"
            shadows
            dpr={[1, 2]}
            camera={{ position: [20, 3, 5], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }}
          >
            <Suspense fallback={<CanvasLoader />}>
              
              {/* MOUSE ROTATION ENABLED */}
              <OrbitControls
                enablePan={false}
                enableZoom={false}
                enableRotate={true}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
              />

              <Computers isMobile={isMobile} />
            </Suspense>

            <Preload all />
          </Canvas>
        </div>
      )}
    </>
  );
};

export default ComputersCanvas;
