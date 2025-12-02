'use client'


import { useLoader, useFrame } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { useRef } from 'react';
import * as THREE from 'three';

export function Logo3D() {
  // Use the CSS logo image placed in `public/` (e.g. `b5e28d61-f2d1-469f-884d-f623c1498887-removebg-preview.png`)
  const texture = useLoader(TextureLoader, '/b5e28d61-f2d1-469f-884d-f623c1498887-removebg-preview.png');
  const meshRef = useRef<THREE.Mesh>(null);

  // Animate bounce only
  useFrame(({ clock }) => {
    if (meshRef.current) {
      const t = clock.getElapsedTime();
      meshRef.current.position.y = Math.abs(Math.sin(t * 2)) * 1.5;
      meshRef.current.rotation.x = 0;
      meshRef.current.rotation.y = 0;
    }
  });

  return (
    <mesh ref={meshRef} scale={[5, 5, 1]}>
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial 
        map={texture} 
        transparent={true}
        opacity={0.9}
      />
    </mesh>
  );
}