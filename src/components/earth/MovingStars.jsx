import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

function MovingStars() {
  const starsRef = useRef();

  useFrame(({ clock }) => {
    // Access the stars' mesh and update its position, rotation, or scale here
    if (starsRef.current) {
      starsRef.current.rotation.y += 0.00005; // Slow down the rotation
      starsRef.current.position.x = Math.cos(clock.getElapsedTime() * 0.1) * 3; // Slow down the movement
      starsRef.current.position.z = Math.sin(clock.getElapsedTime() * 0.1) * 3; // Slow down the movement
    }
  });

  return <Stars ref={starsRef}
    radius={300}
    depth={60}
    count={20000}
    factor={10}
    saturation={0}
    fade={true} />;
}

function Cag() {
  return (
    <MovingStars />
  );
}

export default Cag;