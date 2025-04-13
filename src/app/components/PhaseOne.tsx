"use client";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

const GenerateGlich = (text: string, isGlitched: boolean) => {
  if (!isGlitched) return text;
  return text
    .split("")
    .map(() => String.fromCharCode(Math.floor(Math.random() * (126 - 33 + 1) + 33)))
    .join("");
}
const PhaseOne = () => {
  const Text =
    "Unleash the power of technological rebellion. Navigate through critical domains, expose hidden manipulations, and challenge the very fabric of digital control.";
  const words = Text.split("");

  const [Hoveredid, setIsHoveredid] = useState<number | null>(null);
  const [isGlitched, setIsGlitched] = useState<boolean>(false);
  const [showFinalMessage, setShowFinalMessage] = useState<boolean>(false);

  const finalMessage = (
    <>
      Phase 2 Details Remain a Mystery - Only the Best Will Survive! 
      <br />
      {/* <strong>General Rules: Play smart. Play fair. Win together.</strong> */}
    </>
  );

  // Magic Function
  const HandledClicked = () => {
    setTimeout(() => {
      setIsGlitched(!isGlitched);
      setShowFinalMessage(!showFinalMessage);
    }, 1000)
  }
  const Rooms = [
    {
      id: 1,
      Event: "Algorithmic Corruption",
      Description: "Solve 5 DSA problems within a given time on a competitive platform.",
      svg: `<svg width="50" height="50" viewBox="0 0 24 24">
        <rect x="3" y="4" width="18" height="16" rx="2" stroke="#10B981" fill="none" strokeWidth="2"/>
        <path d="M7 8L10 11L7 14" stroke="#10B981" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="13" y1="14" x2="17" y2="14" stroke="#10B981" strokeWidth="2"/>
      </svg>`,
      src: "https://i.gifer.com/33sc.gif",
    },
    {
      id: 2,
      Event: "IoT Manipulation",
      Description: "Complete three progressively harder IoT challenges.",
      svg: `<svg width="50" height="50" viewBox="0 0 24 24">
        <path d="M12 2L3 7V12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12V7L12 2Z" stroke="#8B5CF6" strokeWidth="2" fill="none"/>
        <path d="M12 11V16" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="12" cy="8" r="1" fill="#8B5CF6"/>
      </svg>`,
      src: "https://media.giphy.com/media/1679iPKc2ZP840Hxjp/giphy.gif",
    },
    {
      id: 3,
      Event: "Cybersecurity Breach",
      Description: "Hack into secure systems in a private contest.",
      svg: `<svg width="50" height="50" viewBox="0 0 24 24">
        <rect x="5" y="11" width="14" height="10" rx="2" fill="#EF4444"/>
        <path d="M12 15V17" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"/>
        <path d="M7 11V7C7 4.79 8.79 3 11 3H13C15.21 3 17 4.79 17 7V11" stroke="#EF4444" strokeWidth="2"/>
      </svg>`,
      src: "https://media.giphy.com/media/Ut9IfYd8U1C0CNQi76/giphy.gif",
    },
    {
      id: 4,
      Event: "AI Deception",
      Description: "Overcome AI deception with innovative solutions.",
      svg: `<svg width="50" height="50" viewBox="0 0 24 24">
        <circle cx="12" cy="7" r="4" fill="#4ADE80" stroke="#4ADE80" strokeWidth="2"/>
        <path d="M5 20C5 16.134 8.13401 13 12 13C15.866 13 19 16.134 19 20" stroke="#4ADE80" strokeWidth="2" fill="none"/>
        <path d="M12 13C14.2091 13 16 11.2091 16 9C16 6.79086 14.2091 5 12 5" stroke="#4ADE80" strokeWidth="2" fill="none"/>
      </svg>`,
      src: "https://media.giphy.com/media/pswcjOmDj4pIkUqikF/giphy.gif",
    },
  ];

  return (
    <section id="Tournment" className="relative min-h-screen">
      <div
        className={`absolute inset-0 transition-all ${isGlitched ? "animate-pulse bg-green-700" : ""
          }`}
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
          {showFinalMessage
            ? finalMessage
            : GenerateGlich(
              "PHASE 1: The ChronoQuest Tournament",
              isGlitched
            )
          }
        </h1>
        <p className="text-sm sm:text-lg text-gray-300 max-w-3xl mx-auto">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.005 * i }}
              viewport={{ once: true }}
            >
              {showFinalMessage
                ? ""
                : word
              }
            </motion.span>
          ))}
        </p>
        <div className="relative flex flex-col justify-center items-center my-10 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 w-full gap-4 max-w-6xl mx-auto">
            {Rooms.map((room) => (
              <div key={room.id} className="flex flex-col justify-center items-center gap-4">
                <Image
                  src={room.src}
                  alt="Description of the GIF"
                  width={100}
                  height={100}
                  className="w-12 md:w-16 lg:w-20"
                />
                <motion.div
                  initial={{ opacity: 0, x: -20, y: -40 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ staggerChildren: 0.5, delay: 0.2 * room.id }}

                  className="relative bg-black border-2 overflow-visible z-20 rounded-lg py-4 px-6 flex flex-col sm:flex-row justify-center items-center border-green-900 hover:border-green-600 gap-2 transition-all duration-150 ease-in-out w-full max-w-md mx-auto"
                  onMouseEnter={() => setIsHoveredid(room.id)}
                  onMouseLeave={() => setIsHoveredid(null)}
                  onTouchStart={() => setIsHoveredid(room.id)}
                  onTouchEnd={() => setIsHoveredid(null)}
                >
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    dangerouslySetInnerHTML={{ __html: room.svg }}
                    className="w-10 h-10 sm:w-12 sm:h-12"
                  />
                  <h1 className="text-sm sm:text-lg lg:text-2xl text-white text-center sm:text-left">
                    {isGlitched
                      ? GenerateGlich(room.Event, isGlitched) : room.Event
                    }
                  </h1>
                  <AnimatePresence>
                    {Hoveredid === room.id && (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="absolute inset-0 bg-black/10 Z-70 md:left-0 left-0 md:top-full mt-2 w-full">
                        <div className="bg-white text-black z-50 p-4 rounded-lg shadow-xl border border-gray-300">
                          <h1> {isGlitched
                            ? GenerateGlich(room.Description, isGlitched) : room.Description
                          }</h1>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="relative max-w-md mx-auto mt-6 p-4 bg-black/60 border-2 border-green-400 text-white rounded shadow">
            <p className="text-balance text-sm ">
              {showFinalMessage
                ? finalMessage
                : GenerateGlich(
                  "The top 30 teams from this phase will advance to Phase 2 where they will face even tougher challenges. Your performance in problem-solving, time management, and innovation counts!",
                  isGlitched
                )
              }
            </p>
          </motion.div>
          <motion.button
            className={`pressStart2p.className bg-green-500 text-black px-3 mt-10 sm:px-4 py-2 font-bold text-sm sm:text-base hover:bg-green-400 rounded transition-all duration-150 cursor-pointer flex`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.7 }}
            transition={{ type: "spring", duration: 0.1 }}
            onClick={HandledClicked}
          >
            {isGlitched
              ? GenerateGlich("Procced To PHASE 2", isGlitched) : "Proceed To PHASE 2"
            }

            <motion.span>⚡</motion.span>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default PhaseOne;