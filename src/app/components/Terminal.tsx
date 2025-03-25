// components/IntroTerminal.tsx
"use client"
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Terminal = () => {
  const [text, setText] = useState("");
  const fullText = `> CHRONOQUEST INITIALIZED...
  > The year is undefined. The threat is imminent.
  > A rogue AI, Kronos, is rewriting history.
  > Your mission: Stop it using decentralization.
  > Type 'ENTER' to join...`;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText((prev) => prev + fullText[i]);
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 40);
  }, []);

  return (
    <motion.div
      className="bg-black text-green-400 p-5 border-2 border-green-500 font-mono shadow-lg max-w-lg mx-auto mt-12"
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness: 70, damping: 20 }}
    >
      <pre className="whitespace-pre-wrap">{text}</pre>
      <motion.button
        className="bg-green-500 text-black px-4 py-2 mt-4 font-bold hover:bg-green-400 rounded"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        ENTER
      </motion.button>
    </motion.div>
  );
};

export default Terminal;
