import { useEffect, useRef } from "react";

const CanvasDesign = ({ gapOfStroke }) => {
  const Canvasref = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = Canvasref.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawGrid();
    };

    let offset = 0;

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const curveFactor = 8;

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";

      for (let i = 0; i <= canvas.width; i += gapOfStroke) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        for (let y = 0; y <= canvas.height; y += 5) {
          const x =
            i +
            Math.sin((y / canvas.height) * 2 * Math.PI + offset) * curveFactor;
          ctx.lineTo(x, y);
        }
        ctx.shadowColor = "#1e2a36";
        ctx.shadowOffsetX = 5;
        ctx.shadowBlur = 9;
        ctx.strokeStyle = "#1e2a36";
        ctx.stroke();
      }

      for (let j = 0; j <= canvas.height; j += gapOfStroke) {
        ctx.beginPath();
        ctx.moveTo(0, j);
        for (let x = 0; x <= canvas.width; x += 5) {
          const y =
            j +
            Math.sin((x / canvas.width) * 2 * Math.PI + offset) * curveFactor;
          ctx.lineTo(x, y);
        }
        ctx.shadowColor = "#1e2a36";
        ctx.shadowOffsetY = 5;
        ctx.shadowBlur = 9;
        ctx.strokeStyle = "#1e2a36";
        ctx.stroke();
      }

      offset += 0.002;
      animationRef.current = requestAnimationFrame(drawGrid);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    animationRef.current = requestAnimationFrame(drawGrid);
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationRef.current);
    };
  }, [gapOfStroke]);

  return <canvas className="absolute -z-10" ref={Canvasref}></canvas>;
};

export default CanvasDesign;
