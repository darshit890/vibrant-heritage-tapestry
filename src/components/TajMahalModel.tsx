
import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export const TajMahalModel = ({ scrollY = 0 }: { scrollY?: number }) => {
  const groupRef = useRef<THREE.Group>(null);
  
  // Use the scroll position to affect the model rotation
  useEffect(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = scrollY * 0.01;
    }
  }, [scrollY]);

  // Animate the model
  useFrame((state) => {
    if (groupRef.current) {
      // Gentle floating animation
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
      // Slow rotation regardless of scroll
      groupRef.current.rotation.y += 0.001;
    }
  });

  return (
    <group ref={groupRef} dispose={null} position={[0, 0, 0]} scale={[0.5, 0.5, 0.5]}>
      {/* Base platform with marble texture */}
      <mesh position={[0, -1, 0]} receiveShadow>
        <boxGeometry args={[10, 0.5, 10]} />
        <meshStandardMaterial color="#e8e8e8" roughness={0.2} metalness={0.1} />
      </mesh>
      
      {/* Main dome with more detail */}
      <mesh position={[0, 2, 0]} castShadow>
        <sphereGeometry args={[1.5, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="white" roughness={0.3} metalness={0.2} />
      </mesh>
      
      {/* Dome finial */}
      <mesh position={[0, 3.2, 0]} castShadow>
        <cylinderGeometry args={[0.1, 0.1, 0.5, 8]} />
        <meshStandardMaterial color="#FFD700" roughness={0.1} metalness={0.8} />
      </mesh>
      
      {/* Main building with more detailed architecture */}
      <mesh position={[0, 0.5, 0]} castShadow>
        <boxGeometry args={[4, 2, 4]} />
        <meshStandardMaterial color="white" roughness={0.4} metalness={0.1} />
      </mesh>
      
      {/* Four minarets with more detail */}
      {[[-2, 0, -2], [2, 0, -2], [-2, 0, 2], [2, 0, 2]].map((position, index) => (
        <group key={index} position={[position[0], position[1], position[2]]}>
          <mesh castShadow>
            <cylinderGeometry args={[0.3, 0.4, 4, 16]} />
            <meshStandardMaterial color="white" roughness={0.4} metalness={0.1} />
          </mesh>
          {/* Minaret middle ring */}
          <mesh position={[0, 1, 0]} castShadow>
            <torusGeometry args={[0.4, 0.1, 16, 32]} />
            <meshStandardMaterial color="#f0f0f0" roughness={0.3} metalness={0.2} />
          </mesh>
          {/* Minaret top dome */}
          <mesh position={[0, 2.2, 0]} castShadow>
            <sphereGeometry args={[0.4, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
            <meshStandardMaterial color="white" roughness={0.3} metalness={0.2} />
          </mesh>
        </group>
      ))}
      
      {/* Decorative arches with more detail */}
      {[
        [0, 0.5, 2.01], [0, 0.5, -2.01], 
        [2.01, 0.5, 0], [-2.01, 0.5, 0]
      ].map((position, index) => (
        <group key={`arch-${index}`}>
          <mesh position={[position[0], position[1], position[2]]} 
                rotation={[0, index < 2 ? 0 : Math.PI / 2, 0]} castShadow>
            <boxGeometry args={[1.5, 1.5, 0.1]} />
            <meshStandardMaterial color="white" roughness={0.3} metalness={0.1} />
          </mesh>
          {/* Arch detail */}
          <mesh position={[position[0], position[1] + 0.6, position[2] + (index < 2 ? 0.05 : 0)]} 
                rotation={[0, index < 2 ? 0 : Math.PI / 2, 0]} castShadow>
            <boxGeometry args={[1, 0.1, 0.2]} />
            <meshStandardMaterial color="#f5f5f5" roughness={0.2} metalness={0.1} />
          </mesh>
        </group>
      ))}
      
      {/* Reflection pool with more realistic water */}
      <mesh position={[0, -0.95, 5]} receiveShadow>
        <boxGeometry args={[4, 0.1, 6]} />
        <meshStandardMaterial 
          color="#7ec0ee" 
          transparent 
          opacity={0.8} 
          roughness={0.1}
          metalness={0.3}
        />
      </mesh>
      
      {/* Garden areas with more detail */}
      {[[-3, -0.7, 5], [3, -0.7, 5]].map((position, index) => (
        <group key={`garden-${index}`}>
          <mesh position={[position[0], position[1], position[2]]} receiveShadow>
            <boxGeometry args={[2, 0.1, 6]} />
            <meshStandardMaterial color="#2e8b57" roughness={0.8} metalness={0.1} />
          </mesh>
          {/* Garden details - small trees or shrubs */}
          {[-2, 0, 2].map((offset, i) => (
            <mesh key={`tree-${index}-${i}`} position={[position[0], position[1] + 0.3, position[2] + offset]} castShadow>
              <coneGeometry args={[0.3, 0.6, 8]} />
              <meshStandardMaterial color="#1a693b" roughness={0.8} metalness={0.1} />
            </mesh>
          ))}
        </group>
      ))}
      
      {/* Additional architectural details */}
      {/* Small domes on corners */}
      {[[-1.5, 1.8, -1.5], [1.5, 1.8, -1.5], [-1.5, 1.8, 1.5], [1.5, 1.8, 1.5]].map((position, index) => (
        <mesh key={`small-dome-${index}`} position={[position[0], position[1], position[2]]} castShadow>
          <sphereGeometry args={[0.4, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
          <meshStandardMaterial color="white" roughness={0.3} metalness={0.1} />
        </mesh>
      ))}
      
      {/* Central platform steps */}
      <mesh position={[0, -0.8, 2.5]} receiveShadow>
        <boxGeometry args={[5, 0.2, 1]} />
        <meshStandardMaterial color="#e0e0e0" roughness={0.4} metalness={0.1} />
      </mesh>
      
      {/* Secondary platform steps */}
      <mesh position={[0, -0.6, 3.2]} receiveShadow>
        <boxGeometry args={[4, 0.2, 1]} />
        <meshStandardMaterial color="#e0e0e0" roughness={0.4} metalness={0.1} />
      </mesh>
    </group>
  );
};

export default TajMahalModel;
