"use client"
import { useEffect, useRef } from "react";

// Type definition for the canvas element
export const MatrixCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return; // Ensure the canvas is available
    const ctx = canvas.getContext("2d");

    if (!ctx) return; // Ensure the context is available

    // Set canvas size to fill the screen
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Define matrix characters (Katakana + numbers)
    const matrixChars = "アサミムカナト0123456789".split("");
    const fontSize = 16; // Font size of characters
    const columns = Math.floor(canvas.width / fontSize); // Number of columns
    const drops: Number[] = Array.from({ length: columns }).fill(1); // Y-position for each column

    const drawMatrix = () => {
      // Fading effect for older characters
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Matrix text color
      ctx.fillStyle = "#0F0";
      ctx.font = `${fontSize}px monospace`;

      // Loop through columns
      drops.forEach((y, i) => {
        const text = matrixChars[Math.floor(Math.random() * matrixChars.length)];
        const x = i * fontSize;

        // Draw the character at (x, y)
        ctx.fillText(text, x, y * fontSize);

        // Reset the drop when it reaches the bottom with some randomness
        if (y * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        // Move the drop down
        drops[i]++;
      });
    };

    const animate = () => {
      drawMatrix();
      requestAnimationFrame(animate);
    };

    // Start the animation
    animate();

    // Clean up function to stop animation on unmount
    return () => cancelAnimationFrame(animate);
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 z-0"></canvas>;
};
