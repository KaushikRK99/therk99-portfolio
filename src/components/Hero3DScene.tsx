import { Suspense, useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  Environment,
  Float,
  MeshTransmissionMaterial,
  PerspectiveCamera,
} from '@react-three/drei';
import * as THREE from 'three';

function VioletOrb() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ref.current) {
      ref.current.rotation.x = t * 0.12;
      ref.current.rotation.y = t * 0.22;
    }
  });
  return (
    <mesh ref={ref} position={[0, 0, 0]} scale={1.45}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial
        color="#8B5CF6"
        metalness={0.95}
        roughness={0.16}
        emissive="#4C1D95"
        emissiveIntensity={0.35}
      />
    </mesh>
  );
}

function NeonRing({
  radius = 2.5,
  tube = 0.025,
  speed = 0.4,
  axis = [1, 0.3, 0.1] as [number, number, number],
  color = '#22D3EE',
}) {
  const ref = useRef<THREE.Mesh>(null);
  const axisVec = useMemo(() => new THREE.Vector3(...axis).normalize(), [axis]);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotateOnAxis(axisVec, delta * speed);
  });
  return (
    <mesh ref={ref}>
      <torusGeometry args={[radius, tube, 32, 200]} />
      <meshStandardMaterial
        color={color}
        metalness={0.9}
        roughness={0.18}
        emissive={color}
        emissiveIntensity={0.7}
      />
    </mesh>
  );
}

function Crystal({
  position,
  scale = 0.4,
  color = '#A78BFA',
}: {
  position: [number, number, number];
  scale?: number;
  color?: string;
}) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ref.current) {
      ref.current.rotation.x = t * 0.3;
      ref.current.rotation.z = t * 0.2;
    }
  });
  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={0.8}>
      <mesh ref={ref} position={position} scale={scale}>
        <octahedronGeometry args={[1, 0]} />
        <MeshTransmissionMaterial
          color={color}
          thickness={0.55}
          roughness={0.05}
          transmission={1}
          ior={1.45}
          chromaticAberration={0.05}
          backside
        />
      </mesh>
    </Float>
  );
}

function SceneContents() {
  return (
    <>
      <ambientLight intensity={0.35} />
      <directionalLight position={[5, 5, 5]} intensity={1.1} color="#E0DDFF" />
      <pointLight position={[-5, -3, -2]} intensity={1.4} color="#8B5CF6" />
      <pointLight position={[3, -4, 2]} intensity={1.1} color="#22D3EE" />
      <pointLight position={[0, 4, -3]} intensity={0.8} color="#F472B6" />

      <Float speed={1.1} rotationIntensity={0.5} floatIntensity={0.45}>
        <VioletOrb />
      </Float>

      <NeonRing radius={2.2} tube={0.022} speed={0.32} axis={[1, 0.2, 0]} color="#22D3EE" />
      <NeonRing radius={2.7} tube={0.018} speed={0.45} axis={[0.2, 1, 0.4]} color="#A78BFA" />
      <NeonRing radius={3.2} tube={0.015} speed={0.25} axis={[0.6, 0.4, 1]} color="#F472B6" />

      <Crystal position={[-3.3, 1.6, 0.5]} scale={0.4} color="#67E8F9" />
      <Crystal position={[3.4, -1.4, -0.5]} scale={0.55} color="#A78BFA" />
      <Crystal position={[2.8, 1.8, 1]} scale={0.3} color="#F9A8D4" />
      <Crystal position={[-2.6, -1.8, 0.8]} scale={0.35} color="#A5F3FC" />

      <Environment preset="night" />
    </>
  );
}

export default function Hero3DScene() {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none">
      <Canvas
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        className="!w-full !h-full"
      >
        <PerspectiveCamera makeDefault position={[0, 0, 7]} fov={45} />
        <Suspense fallback={null}>
          <SceneContents />
        </Suspense>
      </Canvas>
    </div>
  );
}
