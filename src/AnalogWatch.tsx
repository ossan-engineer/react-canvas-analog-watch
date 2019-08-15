import React, { useEffect, useRef } from 'react';
import './AnalogWatch.css';

const AnalogWatch: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const WIDTH = canvas.width;
    const HEIGHT = canvas.height;
    const RADIUS = 100;

    const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d');

    if (!ctx) {
      return;
    }

    const draw = () => {
      ctx.beginPath();
      ctx.arc(WIDTH / 2, HEIGHT / 2, RADIUS, 0, 2 * Math.PI);
      ctx.stroke();
    };

    draw();
  });

  return <canvas width="300" height="260" ref={canvasRef} />;
};

export default AnalogWatch;
