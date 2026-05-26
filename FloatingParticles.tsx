import React, { useEffect, useRef } from 'react';

const FloatingParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let width = 0;
    let height = 0;

    // Configuration
    const particleCount = 100;
    const particles: { x: number; y: number; z: number; vx: number; vy: number; vz: number; size: number; color: string }[] = [];

    // Colors
    const colors = ['#7c3aed', '#3b82f6', '#06b6d4', '#ffffff'];

    // Initialize particles randomly in 3D space
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: (Math.random() - 0.5) * 4, // -2 to 2
        y: (Math.random() - 0.5) * 4,
        z: (Math.random() - 0.5) * 4,
        vx: (Math.random() - 0.5) * 0.01,
        vy: (Math.random() - 0.5) * 0.01,
        vz: (Math.random() - 0.5) * 0.01,
        size: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      particles.forEach(p => {
        // Update position
        p.x += p.vx;
        p.y += p.vy;
        p.z += p.vz;

        // Wrap around
        if (p.x > 2) p.x = -2;
        if (p.x < -2) p.x = 2;
        if (p.y > 2) p.y = -2;
        if (p.y < -2) p.y = 2;
        if (p.z > 2) p.z = -2;
        if (p.z < -2) p.z = 2;

        // 3D to 2D Projection
        const fov = 400;
        const scale = fov / (fov + p.z * 200);

        const screenX = cx + p.x * 200 * scale;
        const screenY = cy + p.y * 200 * scale;

        // Depth-based opacity
        const alpha = Math.max(0.2, (2 - p.z) / 4);

        // Draw particle
        ctx.beginPath();
        ctx.fillStyle = p.color;
        ctx.globalAlpha = alpha;
        ctx.arc(screenX, screenY, p.size * scale, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1.0;
      });

      animationId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);

    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
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

export default FloatingParticles;