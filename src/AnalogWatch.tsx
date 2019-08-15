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
    let angle;

    const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d');

    if (!ctx) {
      return;
    }

    const draw = () => {
      ctx.beginPath();
      ctx.arc(WIDTH / 2, HEIGHT / 2, RADIUS, 0, 2 * Math.PI);
      ctx.stroke();

      for (angle = 0; angle < 360; angle += 6) {
        ctx.save();
        ctx.translate(WIDTH / 2, HEIGHT / 2);
        ctx.rotate((Math.PI / 180) * angle);
        ctx.beginPath();
        ctx.moveTo(0, -RADIUS);

        if (angle % 30 === 0) {
          ctx.lineTo(0, -RADIUS + 10);
          ctx.lineWidth = 2;
        } else {
          ctx.lineTo(0, -RADIUS + 5);
        }

        ctx.stroke();
        ctx.restore();
      }
    };

    draw();
  });

  return <canvas width="300" height="260" ref={canvasRef} />;
};

export default AnalogWatch;
