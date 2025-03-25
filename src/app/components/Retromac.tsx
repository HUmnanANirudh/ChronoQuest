"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useScroll, useTransform, motion, useSpring, AnimatePresence } from "motion/react";
import Timer from "./Timer";
import Main from "./Main";

export const RetroMac = () => {
    const container = useRef(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"],
    });

    const smoothscroll = useSpring(scrollYProgress, {
        stiffness: 120,
        damping: 30,
    });

    const scale = useTransform(smoothscroll, [0, 1], [1, 7]);
    const fadeOut = useTransform(smoothscroll, [0.5, 1], [1, 0]);
    const Bg = useTransform(smoothscroll, [0, 0.1], [1, 0])

    const [isZoomComple, setisZoomcomplete] = useState<boolean>(false)

    useEffect(() => {
        const unsubscribe = smoothscroll.onChange((value) => {
            if (value >= 0.9) {
                setisZoomcomplete(true);
            } else {
                setisZoomcomplete(false);
            }
        });
        return () => {
            unsubscribe();
        };
    }, [smoothscroll]);
    return (
        <div className="relative min-h-screen overflow-x-hidden" ref={container}>
            <motion.div
                className="fixed inset-0 z-0 bg-center bg-cover"
                style={{
                    backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwBBwQdTpVb-DZXoYhcml4QfWjWJBsNRCW1Q&s')",
                    opacity: Bg
                }}
            />
            <div className="h-screen"></div>
            <div className="h-screen"></div>

            {/* Mac Retro Frame */}
            {!isZoomComple && (
                <div className="fixed z-10 w-full sm:w-11/12 md:max-w-xl lg:max-w-2xl mx-auto left-0 right-0 bottom-1/4 sm:bottom-1/4">
                    <motion.div className="sticky" style={{ scale, opacity: fadeOut }}>
                        {/* Mac top shell*/}
                        <motion.div
                            className="bg-gray-200 rounded-t-lg pt-8 px-8 shadow-xl"
                            style={{
                                backgroundImage: "linear-gradient(to bottom, #e0e0d0, #d0d0c0)",
                                boxShadow: "inset 0 0 10px rgba(0,0,0,0.2), 0 10px 20px rgba(0,0,0,0.5)",
                            }}
                            transition={{
                                type: "spring",
                                damping: 150,
                                stiffness: 20,
                                ease: "easeInOut",
                            }}
                        >
                            {/* Mac screen frame */}
                            <div className="bg-gray-900 p-2 rounded border-4 border-gray-800">
                                {/* Screen displaying retro event text */}
                                <div
                                    className="relative bg-black rounded overflow-hidden h-[30vh] md:h-[40vh] lg:h-[40vh] xl:h-[42vh]"
                                    style={{ boxShadow: "inset 0 0 10px rgba(255,255,255,0.1)" }}
                                >
                                    {/* Glare effect for screen */}
                                    <div
                                        className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none"
                                        style={{
                                            background:
                                                "linear-gradient(135deg, transparent 0%, transparent 40%, rgba(255,255,255,0.3) 50%, transparent 60%, transparent 100%)",
                                        }}
                                    ></div>

                                    {/* Mac OS styled */}
                                    <div className="absolute inset-2 flex flex-col overflow-hidden">
                                        <div className="flex-1 bg-black p-2 text-green-500 font-mono text-xs sm:text-sm md:text-md lg:text-xl overflow-y-auto">
                                            <div className="flex flex-col justify-center gap-2 lg:gap-4">
                                                <p className="md:whitespace-nowrap">{"> "}Initializing Event Countdown Systemundefined</p>

                                                <p>Event: ChronoQuest</p>
                                                <p>Calculating time remaining...undefined</p>
                                                <Timer />
                                                <span className="w-2 h-4 bg-green-500 animate-pulse"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Footer for Mac*/}
                            <div className="h-10 mt-3 flex items-center justify-center">
                                <div className="text-gray-800 text-xs gap-1 justify-center font-bold relative flex items-center">
                                    <Image
                                        src={"https://cdn-icons-png.flaticon.com/128/731/731985.png"}
                                        width={15}
                                        height={15}
                                        alt="Apple"
                                    />
                                    Macintosh Classic
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            )}
            <AnimatePresence>
            {isZoomComple&&(
                 <motion.div
                 initial={{ opacity: 0 }} 
                 animate={{ opacity: 1 }} 
                 exit={{ opacity: 0 }}
                 transition={{ duration: 1,ease:"easeInOut" }}
                 className="relative w-full h-[100vh]"
               >
                 <Main/>
               </motion.div>
            )}
            </AnimatePresence>
        </div>

    );
};
