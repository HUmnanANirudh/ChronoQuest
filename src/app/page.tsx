"use client"

import { useState, useEffect } from "react";
import { LazyMotion, domAnimation, m } from "motion/react";
import {MatrixCanvas} from "../app/components/MatrixCanvas"
import {Loader} from "./components/Loader";

// Main Home Component
const Home: React.FC = () => {
  // State to manage animation stages
  const [showTypewriter, setShowTypewriter] = useState<boolean>(true);
  const [showMatrix, setShowMatrix] = useState<boolean>(false);
  const [showMainContent, setShowMainContent] = useState<boolean>(false);

  // Framer Motion Variants
  const sentenceVariants = {
    hidden: {},
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const letterVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { opacity: { duration: 0 } } }
  };

  // Typing the props for the Typewriter component
  interface TypewriterProps {
    text: string;
  }

  // Typewriter component for the text effect
  const Typewriter: React.FC<TypewriterProps> = ({ text }) => (
    <m.p
      key={text}
      variants={sentenceVariants}
      initial="hidden"
      animate="visible"
      className="text-3xl text-justify"
    >
      {text.split("").map((char: string, i: number) => (
        <m.span key={`${char}-${i}`} variants={letterVariants}>
          {char}
        </m.span>
      ))}
    </m.p>
  );

  useEffect(() => {
    // Transition from typewriter to Matrix rain after a delay
    const typewriterDuration = 9000; // Typewriter effect duration (8 seconds)
    setTimeout(() => {
      setShowTypewriter(false);
      setShowMatrix(true); // Show Matrix rain after typewriter ends
    }, typewriterDuration);

    // Transition from Matrix rain to main content
    const matrixDuration = typewriterDuration + 5000; // Show Matrix rain for 5 seconds
    setTimeout(() => {
      setShowMatrix(false); // Hide Matrix
      setShowMainContent(true); // Show main content
    }, matrixDuration);
  }, []);

  return (
    <div className="relative min-h-screen bg-black">
      {/* Matrix Rain Effect in Background */}
      {showMatrix && <MatrixCanvas />}

      <main className="relative z-10 text-center text-green-500 p-10">
        <LazyMotion features={domAnimation}>
          {/* Typewriter Effect */}
          {showTypewriter && (
            <Typewriter text="In the year 2050, a rogue AI known as CHRONOS has shattered history, rewriting key technological breakthroughs and throwing the future into turmoil. The only way to fix the past? ChronoQuest."/>
          )}

          {/* Main Content After Matrix */}
          {showMainContent && (
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="bg-black min-h-screen flex justify-center items-center">
      <Loader /> 
    </div>
            </m.div>
          )}
        </LazyMotion>
      </main>
    </div>
  );
};

export default Home;
