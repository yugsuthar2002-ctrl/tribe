import React, { useEffect, useRef } from 'react';

const ParticleSphere: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let width = 0;
    let height = 0;
    
    // Interaction state
    let mouseX = 0;
    let mouseY = 0;
    let targetVelX = 0;
    let targetVelY = 0;
    let velX = 0;
    let velY = 0;

    // Configuration
    const particleCount = 2000;
    const particles: { x: number; y: number; z: number; baseSize: number; color: string }[] = [];

    // Colors to mix (Purple, Blue, Cyan)
    const colors = ['#7c3aed', '#3b82f6', '#06b6d4', '#ffffff'];

    // Initialize Fibonacci sphere for even distribution
    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle
    for (let i = 0; i < particleCount; i++) {
      const y = 1 - (i / (particleCount - 1)) * 2; // y goes from 1 to -1
      const radius = Math.sqrt(1 - y * y); // radius at y
      const theta = phi * i;

      particles.push({
        x: Math.cos(theta) * radius,
        y: y,
        z: Math.sin(theta) * radius,
        baseSize: Math.random() * 1.5 + 0.5,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    let rotationX = 0;
    let rotationY = 0;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const handleMouseMove = (e: MouseEvent) => {
      // Normalize -1 to 1
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = (e.clientY / window.innerHeight) * 2 - 1;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseX = (e.touches[0].clientX / window.innerWidth) * 2 - 1;
        mouseY = (e.touches[0].clientY / window.innerHeight) * 2 - 1;
      }
    };

    const animate = () => {
      // Clear with slight trail for motion blur feel (optional, but keep crisp for now)
      ctx.clearRect(0, 0, width, height);

      // Center of screen
      const cx = width / 2;
      const cy = height / 2;

      // Sphere radius relative to viewport
      const sphereRadius = Math.min(width, height) * 0.35;

      // Physics: Target velocity depends on mouse distance from center
      // Mouse X controls Rotation Y (spinning around vertical axis)
      targetVelY = mouseX * 0.02;
      // Mouse Y controls Rotation X (spinning around horizontal axis)
      targetVelX = -mouseY * 0.02;

      // Ease current velocity towards target (Smooth damping)
      velX += (targetVelX - velX) * 0.05;
      velY += (targetVelY - velY) * 0.05;

      // Apply velocity + Base automatic rotation
      rotationY += velY + 0.002;
      rotationX += velX + 0.001;

      // Pre-calculate rotation trig
      const cosY = Math.cos(rotationY);
      const sinY = Math.sin(rotationY);
      const cosX = Math.cos(rotationX);
      const sinX = Math.sin(rotationX);

      particles.forEach(p => {
        // Rotate around Y axis
        let x = p.x * cosY - p.z * sinY;
        let z = p.x * sinY + p.z * cosY;

        // Rotate around X axis
        let y = p.y * cosX - z * sinX;
        let z2 = p.y * sinX + z * cosX;

        // 3D to 2D Projection
        const fov = 800;
        const scale = fov / (fov + z2 * sphereRadius);
        
        const screenX = cx + x * sphereRadius * scale;
        const screenY = cy + y * sphereRadius * scale;

        // Depth-based opacity
        const alpha = Math.max(0.1, (1.5 - z2) / 2.5);
        
        // Draw particle
        ctx.beginPath();
        // Dynamic color mixing
        ctx.fillStyle = p.color;
        ctx.globalAlpha = alpha;
        ctx.arc(screenX, screenY, p.baseSize * scale, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1.0;
      });

      animationId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    
    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default ParticleSphere;