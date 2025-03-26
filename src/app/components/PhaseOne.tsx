"use client";
import { motion } from "motion/react";

const PhaseOne = () => {
  const Text =
    "Unleash the power of technological rebellion. Navigate through critical domains, expose hidden manipulations, and challenge the very fabric of digital control.";
  const words = Text.split("");

  const Rooms = [
    {
      id: 1,
      Event: "Algorithmic Corruption",
      svg: `<svg width="50" height="50" viewBox="0 0 24 24">
    <rect x="3" y="4" width="18" height="16" rx="2" stroke="#10B981" fill="none" strokeWidth="2"/>
    <path d="M7 8L10 11L7 14" stroke="#10B981" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="13" y1="14" x2="17" y2="14" stroke="#10B981" strokeWidth="2"/>
  </svg>`,
    },
    {
      id: 2,
      Event: "IoT Manipulation",
      svg: `<svg width="50" height="50" viewBox="0 0 24 24">
    <path d="M12 2L3 7V12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12V7L12 2Z" stroke="#8B5CF6" strokeWidth="2" fill="none"/>
    <path d="M12 11V16" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="12" cy="8" r="1" fill="#8B5CF6"/>
  </svg>`,
    },
    {
      id: 3,
      Event: "Cybersecurity Breach",
      svg: `<svg width="50" height="50" viewBox="0 0 24 24">
    <rect x="5" y="11" width="14" height="10" rx="2" fill="#EF4444"/>
    <path d="M12 15V17" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"/>
    <path d="M7 11V7C7 4.79 8.79 3 11 3H13C15.21 3 17 4.79 17 7V11" stroke="#EF4444" strokeWidth="2"/>
  </svg>`,
    },
    {
      id: 4,
      Event: "AI Deception",
      svg: `<svg width="50" height="50" viewBox="0 0 24 24">
    <circle cx="12" cy="7" r="4" fill="#4ADE80" stroke="#4ADE80" strokeWidth="2"/>
    <path d="M5 20C5 16.134 8.13401 13 12 13C15.866 13 19 16.134 19 20" stroke="#4ADE80" strokeWidth="2" fill="none"/>
    <path d="M12 13C14.2091 13 16 11.2091 16 9C16 6.79086 14.2091 5 12 5" stroke="#4ADE80" strokeWidth="2" fill="none"/>
  </svg>`,
    },
  ];

  return (
    <section id="Tournment" className="relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(34, 197, 94, 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(34, 197, 94, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      ></div>
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle, rgba(34, 197, 94, 0.4) 10%, transparent 50%)",
        }}
      ></div>
      <div className="flex flex-col items-center justify-center font-mono p-4 sm:p-10 lg:p-20 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl mb-4 font-bold text-white">
          PHASE 1: The ChronoQuest Tournament
        </h1>
        <p className="text-sm sm:text-lg text-gray-300">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.005 * i }}
              viewport={{once:true}}
            >
              {word}
            </motion.span>
          ))}
        </p>
        <div className="relative flex flex-col justify-center items-center my-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 p-4 w-full max-w-3xl">
            {Rooms.map((room) => (
              <div
                key={room.id}
                className="relative bg-black border-2 z-10 rounded-lg py-4 px-6 flex flex-col sm:flex-row justify-center items-center border-green-900 hover:border-green-600 gap-2 transition-all duration-150 ease-in-out w-full"
              >
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  viewport={{once:true}}
                  dangerouslySetInnerHTML={{ __html: room.svg }}
                  className="w-10 h-10 sm:w-12 sm:h-12"
                />
                <h1 className="text-sm sm:text-lg lg:text-2xl text-white text-center sm:text-left">
                  {room.Event}
                </h1>
              </div>
            ))}
          </div>
          <motion.button
        className="bg-green-500 text-black px-3 my-auto sm:px-4 py-2 mt-4 font-bold text-sm sm:text-base hover:bg-green-400 
        rounded transition-all duration-150 cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.7 }}
        transition={{type:"spring",duration:0.1}}
      >
        Procced To Phase 2⚡
      </motion.button>
        </div>
      </div>
    </section>
  );
};

export default PhaseOne;
