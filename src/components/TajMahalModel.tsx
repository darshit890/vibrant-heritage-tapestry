
import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

// Create a simplified Taj Mahal using basic Three.js shapes
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
      {/* Base platform */}
      <mesh position={[0, -1, 0]} receiveShadow>
        <boxGeometry args={[10, 0.5, 10]} />
        <meshStandardMaterial color="#e8e8e8" />
      </mesh>
      
      {/* Main dome */}
      <mesh position={[0, 2, 0]} castShadow>
        <sphereGeometry args={[1.5, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="white" />
      </mesh>
      
      {/* Main building */}
      <mesh position={[0, 0.5, 0]} castShadow>
        <boxGeometry args={[4, 2, 4]} />
        <meshStandardMaterial color="white" />
      </mesh>
      
      {/* Four minarets */}
      {[[-2, 0, -2], [2, 0, -2], [-2, 0, 2], [2, 0, 2]].map((position, index) => (
        <group key={index} position={position}>
          <mesh castShadow>
            <cylinderGeometry args={[0.3, 0.3, 4, 16]} />
            <meshStandardMaterial color="white" />
          </mesh>
          <mesh position={[0, 2.2, 0]} castShadow>
            <coneGeometry args={[0.4, 0.8, 16]} />
            <meshStandardMaterial color="white" />
          </mesh>
        </group>
      ))}
      
      {/* Decorative arches */}
      {[
        [0, 0.5, 2.01], [0, 0.5, -2.01], 
        [2.01, 0.5, 0], [-2.01, 0.5, 0]
      ].map((position, index) => (
        <mesh key={`arch-${index}`} position={position} rotation={[0, index < 2 ? 0 : Math.PI / 2, 0]} castShadow>
          <boxGeometry args={[1.5, 1.5, 0.1]} />
          <meshStandardMaterial color="white" />
        </mesh>
      ))}
      
      {/* Reflection pool */}
      <mesh position={[0, -0.95, 5]} receiveShadow>
        <boxGeometry args={[4, 0.1, 6]} />
        <meshStandardMaterial color="#7ec0ee" transparent opacity={0.8} />
      </mesh>
      
      {/* Garden areas */}
      {[[-3, -0.7, 5], [3, -0.7, 5]].map((position, index) => (
        <mesh key={`garden-${index}`} position={position} receiveShadow>
          <boxGeometry args={[2, 0.1, 6]} />
          <meshStandardMaterial color="#2e8b57" />
        </mesh>
      ))}
    </group>
  );
};

export default TajMahalModel;
