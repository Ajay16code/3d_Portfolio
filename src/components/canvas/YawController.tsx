// src/components/canvas/YawController.tsx
import React, { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

type Props = {
  children: React.ReactNode;
  sensitivity?: number; // how fast drag affects yaw
  inertia?: number; // 0..1 where lower = snappier, higher = smoother
  maxYaw?: number; // optional clamp (radians) - set to Math.PI for full spin
};

const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));

export default function YawController({
  children,
  sensitivity = 0.004,
  inertia = 0.08,
  maxYaw = Math.PI * 2,
}: Props) {
  const groupRef = useRef<THREE.Group | null>(null);

  // target yaw (driven directly by input)
  const targetYawRef = useRef(0);
  // displayed yaw (smoothed towards targetYawRef)
  const displayedYawRef = useRef(0);

  // pointer state
  const dragging = useRef(false);
  const lastX = useRef<number | null>(null);

  // device orientation override flag
  const useDeviceOrientation = useRef(false);

  // --- Pointer / touch handlers ---
  useEffect(() => {
    const onPointerDown = (e: PointerEvent) => {
      dragging.current = true;
      lastX.current = e.clientX;
      // when user starts dragging, disable device orientation override
      useDeviceOrientation.current = false;
      // prevent text selection / page scroll (safe call)
      const targetEl = e.target as Element & {
        setPointerCapture?: (id: number) => void;
      };
      targetEl.setPointerCapture?.(e.pointerId);
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!dragging.current || lastX.current == null) return;
      // Now we safely read prev as number (TS knows it's not null)
      const prev: number = lastX.current;
      const dx = e.clientX - prev;
      lastX.current = e.clientX;
      targetYawRef.current += dx * -sensitivity;
      targetYawRef.current = clamp(targetYawRef.current, -maxYaw, maxYaw);
    };

    const onPointerUp = (_e: PointerEvent) => {
      dragging.current = false;
      lastX.current = null;
    };

    // Touch fallback (some browsers map touch to pointer events)
    // but keep touch listeners too for extra safety
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length !== 1) return;
      dragging.current = true;
      lastX.current = e.touches[0].clientX;
      useDeviceOrientation.current = false;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!dragging.current || e.touches.length !== 1 || lastX.current == null) return;
      const prev: number = lastX.current;
      const dx = e.touches[0].clientX - prev;
      lastX.current = e.touches[0].clientX;
      targetYawRef.current += dx * -sensitivity;
      targetYawRef.current = clamp(targetYawRef.current, -maxYaw, maxYaw);
    };

    const onTouchEnd = () => {
      dragging.current = false;
      lastX.current = null;
    };

    // attach to window (or a specific DOM element if you want)
    window.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);

    window.addEventListener("touchstart", onTouchStart, { passive: false });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", onTouchEnd);

    return () => {
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);

      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [sensitivity, maxYaw]);

  // --- Device orientation (optional) ---
  useEffect(() => {
    // try to use DeviceOrientation API for natural mobile yaw
    const handler = (ev: DeviceOrientationEvent) => {
      // some devices supply ev.alpha (compass), which we can map to yaw
      if (ev.alpha != null) {
        // enable device orientation if not dragging
        if (!dragging.current) {
          // convert degrees to radians
          const yawRad = (ev.alpha * Math.PI) / 180;
          // set target yaw directly from alpha (you can add offset if needed)
          targetYawRef.current = -yawRad; // negative may feel more natural, toggle if needed
          useDeviceOrientation.current = true;
        }
      }
    };

    // Some browsers require permission for device orientation (iOS). User gesture required.
    // We attach if supported.
    if (typeof window !== "undefined" && "DeviceOrientationEvent" in window) {
      window.addEventListener("deviceorientation", handler);
    }
    return () => {
      if (typeof window !== "undefined" && "DeviceOrientationEvent" in window) {
        window.removeEventListener("deviceorientation", handler);
      }
    };
  }, []);

  // --- Smoothly update rotation each frame ---
  useFrame((_state, delta) => {
    // basic smoothing: displayed = lerp(displayed, target, alpha)
    const displayed = displayedYawRef.current;
    const target = targetYawRef.current;
    const alpha = 1 - Math.exp(-inertia * 60 * delta); // frame-rate independent smoothing
    const next = displayed + (target - displayed) * alpha;
    displayedYawRef.current = next;

    if (groupRef.current) {
      groupRef.current.rotation.y = next;
    }
  });

  return (
    <group ref={groupRef}>
      {children}
    </group>
  );
}
