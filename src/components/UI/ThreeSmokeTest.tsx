import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

function Spinny() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((_, dt) => {
    ref.current.rotation.x += dt * 0.4;
    ref.current.rotation.y += dt * 0.6;
  });
  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial color="#8b5cf6" metalness={0.2} roughness={0.3} />
    </mesh>
  );
}

export default function ThreeSmokeTest() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
        <color attach="background" args={['#0a0a0a']} />
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 3, 3]} intensity={0.8} />
        <Spinny />
      </Canvas>
    </div>
  );
}