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
    let angle = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d');

    if (!ctx) {
      return;
    }

    const getRadians = (degrees: number) => (Math.PI / 180) * degrees;

    const draw = () => {
      hours = 9;
      minutes = 23;
      seconds = 42;
      // ctx.beginPath();
      // ctx.arc(WIDTH / 2, HEIGHT / 2, RADIUS, 0, getRadians(360));
      // ctx.stroke();

      for (angle = 0; angle < 360; angle += 6) {
        ctx.save();
        ctx.translate(WIDTH / 2, HEIGHT / 2);
        ctx.rotate(getRadians(angle));
        ctx.beginPath();
        ctx.moveTo(0, -RADIUS);

        if (angle % 30 === 0) {
          ctx.lineTo(0, -RADIUS + 10);
          ctx.lineWidth = 2;
          // 1-12
          ctx.font = '13px Arial';
          ctx.textAlign = 'center';
          ctx.fillText((angle / 30 || 12).toString(), 0, -RADIUS + 25);
        } else {
          ctx.lineTo(0, -RADIUS + 5);
        }

        ctx.stroke();
        ctx.restore();

        // hours * 30 + minutes * 0.5
        ctx.save();
        ctx.lineWidth = 6;
        ctx.translate(WIDTH / 2, HEIGHT / 2);
        ctx.rotate(getRadians(hours * 30 + minutes * 0.5));
        ctx.beginPath();
        ctx.moveTo(0, 10);
        ctx.lineTo(0, -RADIUS + 50);
        ctx.stroke();
        ctx.restore();

        // minutes * 6
        ctx.save();
        ctx.lineWidth = 4;
        ctx.translate(WIDTH / 2, HEIGHT / 2);
        ctx.rotate(getRadians(minutes * 6));
        ctx.beginPath();
        ctx.moveTo(0, 10);
        ctx.lineTo(0, -RADIUS + 30);
        ctx.stroke();
        ctx.restore();

        // seconds * 6
        ctx.save();
        ctx.strokeStyle = 'red';
        ctx.translate(WIDTH / 2, HEIGHT / 2);
        ctx.rotate(getRadians(seconds * 6));
        ctx.beginPath();
        ctx.moveTo(0, 10);
        ctx.lineTo(0, -RADIUS + 20);
        ctx.stroke();
        ctx.restore();
      }
    };

    draw();
  });

  return <canvas width="300" height="260" ref={canvasRef} />;
};

export default AnalogWatch;
