// src/ModelPlaceholder.tsx
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function ModelPlaceholder() {
  const ref = useRef<THREE.Mesh | null>(null);
  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.y += dt * 0.6;
  });

  return (
    <group>
      <mesh ref={ref} position={[0, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial metalness={0.3} roughness={0.6} />
      </mesh>

      {/* a subtle ground */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.8, 0]}>
        <planeGeometry args={[6, 6]} />
        <meshStandardMaterial color="#111827" />
      </mesh>
    </group>
  );
}
