// src/components/canvas/Computers.tsx
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

type ComputersProps = {
  isMobile: boolean;
};

const Computers: React.FC<ComputersProps> = ({ isMobile }) => {
  // useGLTF return typing is messy across projects; keep it as any for simplicity
  const computer: any = useGLTF("./desktop_pc/scene.gltf");

  // groupRef refers to a THREE.Group that wraps the model
  const groupRef = useRef<THREE.Group | null>(null);

  // AUTO-ROTATION: slowly rotate around Y axis
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.3 * delta * 5; // tweak speed here
      // delta is time since last frame; using it keeps rotation framerate-independent
    }
  });

  return (
    // attach ref to a group so we can rotate entire model
    <group ref={groupRef} dispose={null}>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
      />
      <pointLight intensity={1} />

      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -4.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </group>
  );
};

export default Computers;
