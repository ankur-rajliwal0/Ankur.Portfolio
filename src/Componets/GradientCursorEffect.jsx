import { useState, useEffect } from 'react';

export default function GradientCursorEffect() {
  const [cursorPos, setCursorPos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 -z-10 transition-all duration-100 ease-out"
      style={{
        background: `radial-gradient(
          circle at ${cursorPos.x}% ${cursorPos.y}%,
          rgba(255, 0, 128, 0.8),
          rgba(121, 40, 202, 0.8),
          rgba(0, 112, 243, 0.8)
        )`
      }}
    />
  );
}