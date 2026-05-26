import React, { useEffect, useRef, useState } from 'react';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorOuterRef = useRef<HTMLDivElement>(null);
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const mousePosition = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mousedown', onMouseDown);
      document.addEventListener('mouseup', onMouseUp);

      const links = document.querySelectorAll('a, button, select, input, textarea');
      links.forEach(link => {
        link.addEventListener('mouseenter', () => setLinkHovered(true));
        link.addEventListener('mouseleave', () => setLinkHovered(false));
      });
    };

    const removeEventListeners = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
      if (!animationFrameId.current) {
        animationFrameId.current = requestAnimationFrame(updateCursorPosition);
      }
    };

    const updateCursorPosition = () => {
      const { x, y } = mousePosition.current;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      }
      if (cursorOuterRef.current) {
        cursorOuterRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      }
      animationFrameId.current = null;
    };

    const onMouseDown = () => setClicked(true);
    const onMouseUp = () => setClicked(false);

    addEventListeners();
    return () => removeEventListeners();
  }, []);

  // Only show custom cursor on non-touch devices
  if (typeof navigator !== 'undefined' && typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      <div
        ref={cursorRef}
        className="custom-cursor hidden md:block rounded-full bg-white pointer-events-none z-50 mix-blend-difference"
        style={{
          width: '10px',
          height: '10px',
          transform: 'translate(-50%, -50%)',
          willChange: 'transform',
        }}
      />
      <div
        ref={cursorOuterRef}
        className={`custom-cursor hidden md:block rounded-full border border-white pointer-events-none z-50 transition-all duration-200 ease-out ${clicked ? 'scale-75' : 'scale-100'} ${linkHovered ? 'scale-150 bg-white/20 border-transparent' : ''}`}
        style={{
          width: '40px',
          height: '40px',
          transform: 'translate(-50%, -50%)',
          willChange: 'transform',
        }}
      />
    </>
  );
};

export default CustomCursor;