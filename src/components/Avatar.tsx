"use client";

import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Avatar() {
  const { scene, animations } = useGLTF("/model.glb");
  const { actions } = useAnimations(animations, scene);

  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const actionNames = Object.keys(actions);

    if (actionNames.length > 0) {
      actions[actionNames[0]]?.reset().play();
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [actions]);

  useFrame(() => {
    const head = scene.getObjectByName("Head");
  
    if (!head) return;
  
    head.rotation.y = mouse.current.x * 0.8;
    head.rotation.x = -mouse.current.y * 0.3;
  });

    

  return (
    <primitive
      object={scene}
      scale={7}
      position={[0, -11, 0]}
      rotation={[0, 0.5, 0]}
    />
  );
}
