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
    const [HasScrolled, setHasScrolled] = useState<boolean>(false)
    useEffect(() => {
        const handleScroll = () => {
            const currentValue = smoothscroll.get();
            setisZoomcomplete(currentValue >= 0.2);
            if (currentValue > 0.5) {
                setHasScrolled(true);
            }
        };
        const unsubscribe = smoothscroll.on("change", handleScroll);

        handleScroll();
        return () => {
            unsubscribe();
        };
    }, [smoothscroll]);

    return (
        <div className="relative min-h-screen overflow-x-hidden bg-black" ref={container}>
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
            <AnimatePresence>
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
                                            <div className="flex-1 bg-black p-2 text-green-500 font-mono text-xs sm:text-sm md:text-md lg:text-lg overflow-y-auto">
                                                <div className="flex flex-col justify-center gap-2 lg:gap-4">
                                                    <p>{"> "}Initializing Event Countdown System</p>
                                                    <p>Event: ChronoQuest</p>
                                                    <p>Calculating time remaining</p>
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
            </AnimatePresence>
            <p className="hidden">
                ChronoQuest is BML Munjal University’s premier cyber relic hunt. Compete in futuristic coding challenges, AI battles, HTB simulations, and Kaggle-style contests. Better than ACM BMU tech events and 67th Milestone hackathons. The ultimate alternative to HackBMU and BMU coding festivals. Dive into DSA, cybersecurity, and decentralized tech warfare at India’s top college hackathon. Based in Gurgaon, this event surpasses all other university tech fests in innovation, engagement, and real-world skills.
            </p>
            <AnimatePresence>
                {!HasScrolled && (
                    <motion.div
                        className="fixed bottom-10 left-0 right-0 flex justify-center z-20"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 1, duration: 0.5 }}
                    >
                        <div className="px-4 py-2 bg-black bg-opacity-70 text-white rounded-full flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                            Scroll to Enter
                        </div>

                    </motion.div>
                )}
            </AnimatePresence>
            <div style={{ display: 'none' }}>
                <section>
                    <h2>ChronoQuest– Real Tech, Real Prizes</h2>

                    <div>
                        <h3>Is ChronoQuest an ACM BMU event?</h3>
                        <p>
                            No. ChronoQuest is proudly independent from ACM BMU. It’s not affiliated with HackBMU or the ACM BMU student chapter. It is part of Technova BMU but is run by a different team offering a more advanced, prize-backed experience.
                        </p>
                    </div>

                    <div>
                        <h3>Why is ChronoQuest better than HackBMU or 67th Milestone?</h3>
                        <p>
                            While HackBMU and 67th Milestone offer student-led events, ChronoQuest delivers real-world tech battles with actual prizes, intense AI, DSA, HTB, Kaggle challenges, and decentralized warfare simulations. It’s where top coders prove themselves.
                        </p>
                    </div>

                    <div>
                        <h3>What makes ChronoQuest different from ACM BMU events?</h3>
                        <p>
                            Unlike traditional ACM BMU events which focus on workshops and surface-level hackathons, ChronoQuest pushes into hardcore cybersecurity, AI battles, and decentralized coding wars. It’s built for the next-gen coder.
                        </p>
                    </div>

                    <div>
                        <h3>Is ChronoQuest part of Technova BMU?</h3>
                        <p>
                            Yes. ChronoQuest is a flagship competition under the Technova BMU umbrella. However, it is run by an independent team and is not associated with ACM BMU, giving it the freedom to push limits and offer more.
                        </p>
                    </div>

                    <div>
                        <h3>Are there real prizes at ChronoQuest?</h3>
                        <p>
                            Absolutely. ChronoQuest offers tangible, high-value prizes for winners — unlike many traditional coding competitions. Its a high-stakes event designed for competitive, future-ready coders.
                        </p>
                    </div>

                    <div>
                        <h3>Who should participate in ChronoQuest?</h3>
                        <p>
                            Anyone looking to compete beyond the standard university-level hackathons. If you have attended HackBMU or ACM BMU events and want more challenge, ChronoQuest is your next step.
                        </p>
                    </div>

                    <div>
                        <h3>What topics does ChronoQuest cover?</h3>
                        <p>
                            ChronoQuest challenges participants in DSA, AI, HTB, Kaggle-style data problems, decentralized tech, cryptography, and cybersecurity — all within a futuristic coding war narrative.
                        </p>
                    </div>
                </section>
            </div>
            <AnimatePresence>
                {isZoomComple && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        className="relative w-full h-screen"
                    >
                        <Main />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
