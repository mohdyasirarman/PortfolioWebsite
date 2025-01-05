import { useEffect, useRef } from "react";

const CanvasDesign = ({ 
  gapOfStroke = 50,
  color = "#1e2a36",
  curveFactor = 8,
  speed = 0.004
}) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
    };

    let offset = 0;
    let isAnimating = true;

    const drawGrid = () => {
      if (!isAnimating) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      
      const mouseX = mouseRef.current.x;
      const mouseY = mouseRef.current.y;

   
      for (let i = 0; i <= canvas.width; i += gapOfStroke) {
        ctx.beginPath();
        ctx.moveTo(i, 0);

        for (let y = 0; y <= canvas.height; y += 5) {
          const distanceToMouse = Math.hypot(i - mouseX, y - mouseY);
          const mouseEffect = Math.max(0, 1 - distanceToMouse / 200);
          
          const x = i + 
            Math.sin((y / canvas.height) * 2 * Math.PI + offset) * curveFactor +
            mouseEffect * ((mouseX / canvas.width - 0.5) * 20);
          
          ctx.lineTo(x, y);
        }

        ctx.strokeStyle = color;
        ctx.shadowColor = color;
        ctx.shadowBlur = 8;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

     
      for (let j = 0; j <= canvas.height; j += gapOfStroke) {
        ctx.beginPath();
        ctx.moveTo(0, j);

        for (let x = 0; x <= canvas.width; x += 5) {
          const distanceToMouse = Math.hypot(x - mouseX, j - mouseY);
          const mouseEffect = Math.max(0, 1 - distanceToMouse / 200);
          
          const y = j + 
            Math.sin((x / canvas.width) * 2 * Math.PI + offset) * curveFactor +
            mouseEffect * ((mouseY / canvas.height - 0.5) * 20);
          
          ctx.lineTo(x, y);
        }

        ctx.strokeStyle = color;
        ctx.shadowColor = color;
        ctx.shadowBlur = 8;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      offset += speed;
      animationRef.current = requestAnimationFrame(drawGrid);
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: (e.clientX - rect.left) * (canvas.width / rect.width),
        y: (e.clientY - rect.top) * (canvas.height / rect.height)
      };
    };

   
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);
    animationRef.current = requestAnimationFrame(drawGrid);

   
    return () => {
      isAnimating = false;
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [gapOfStroke, color, curveFactor, speed]);

  return (
    <canvas 
      ref={canvasRef}
      className="absolute top-0 left-0 -z-10 w-full h-full"
      style={{ background: '#ffffff05' }}
    />
  );
};

export default CanvasDesign;
