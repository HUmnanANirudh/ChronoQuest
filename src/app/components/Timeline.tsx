"use client"
import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"

interface TimelineEvent {
    date: string
    event: string
    time: string
    special: boolean
}

const timelineEvents: TimelineEvent[] = [
    { date: "April 15", event: "Registration Deadline", time: "11:59 PM", special: false },
    { date: "April 18", event: "Offline Check-in", time: "8:00 AM - 9:00 AM", special: false },
    { date: "April 18", event: "Opening Ceremony", time: "9:00 AM - 10:00 AM", special: false },
    { date: "April 18", event: "ChronoQuest - Phase 1", time: "11:00 AM – 3:30 PM", special: false },
    { date: "April 18", event: "Networking Event", time: "4:30 PM – 6:00 PM", special: false },
    { date: "April 18", event: "Tech Expo", time: "6:00 PM - 7:00 PM", special: false },
    { date: "April 18", event: "Dinner", time: "7:00 PM - 9:00 PM", special: false },
    { date: "April 18", event: "ChronoQuest - Phase 2 - ???", time: "9:00 PM -", special: true },
    { date: "April 19", event: "Phase 2 - War Ends", time: "- 3:00 PM", special: true },
    { date: "April 19", event: "Judging & Closing Ceremony", time: "4:00 PM – 6:00 PM", special: false }
]

export const Timeline = () => {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true })
    const [AccessGranted, setAccessGranted] = useState(false)
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        if (inView && progress < 100) {
            const interval = setInterval(() => {
                setProgress((prev) => {
                    const next = prev + 10
                    if (next >= 100) {
                        setAccessGranted(true)
                        clearInterval(interval)
                    }
                    return next
                })
            }, 200)
        }
    }, [inView])
    const heading = "CHRONOQUEST TIMELINE // CONFIDENTIAL"
    const charVariant = {
        hidden: { opacity: 0 },
        visible: (i: number) => ({
            opacity: 1,
            transition: { delay: i * 0.05 },
        }),
    }
    const rowContainer = {
        visible: {
            transition: {
                staggerChildren: 0.1,
                delayChildren: heading.length * 0.05 + 1,
            },
        },
    }

    const rowItem = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 },
    }
    const rowheading = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delay: heading.length * 0.05 + 0.4,
                duration: 0.4
            }
        }
    }
    const warningVariant = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: heading.length * 0.05 + 0.5,
                duration: 0.6,
            },
        },
    }

    if (!AccessGranted) {
        return (
            <div ref={ref} className="bg-black font-mono p-8 h-80 flex flex-col items-center justify-center text-green-500">
                <h1 className="text-justify">Decrypting Temporal Data...</h1>
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ ease: "easeInOut" }}
                    className="h-1 bg-green-600 border-2 border-green-500 w-full mt-4"
                />
                <h1 className="mt-4 text-center">Establishing connection from chronoquest database...</h1>
            </div>
        )
    }

    return (
        <div className="bg-black font-mono p-8 text-white">
            <div className="border-b border-green-800 pb-2 mb-4">
                <div className="text-green-600 text-md lg:text-xl font-bold flex items-center gap-3">
                    <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                        className="hidden md:block"
                    >
                        <polyline points="4 17 10 11 4 5" />
                        <line x1="12" x2="20" y1="19" y2="19" />
                    </motion.svg>
                    <div className="whitespace-nowrap flex items-center">
                        {heading.split("").map((char, i) => (
                            <motion.span key={i} custom={i} variants={charVariant} initial="hidden" animate="visible">
                                {char}
                            </motion.span>
                        ))}
                    </div>
                </div>
                <motion.div
                    className="text-md lg:text-xl text-red-600 mt-4 animate-pulse text-justify"
                    variants={warningVariant}
                    initial="hidden"
                    animate="visible"
                >
                    WARNING: Time anomalies detected in phase 2 coordinates.
                </motion.div>
            </div>
            <table className="w-full border-separate border-spacing-y-2 bg-black">
                <motion.thead
                    variants={rowheading}
                    initial="hidden"
                    animate="visible"
                    className="text-lg lg:text-xl">
                    <tr className="text-left">
                        <th className="py-3 px-4 w-1/4">Date</th>
                        <th className="py-3 px-4 w-2/4">Event</th>
                        <th className="py-3 px-4 w-1/4">Time</th>
                    </tr>
                </motion.thead>
                <motion.tbody variants={rowContainer}
                    initial="hidden"
                    animate="visible">
                    {timelineEvents.map((event) => (
                        <motion.tr
                            key={`${event.date}-${event.event}`}
                            variants={rowItem}
                            className={`text-sm lg:text-lg ${event.special ? "text-red-600 font-semibold animate-pulse " : "text-white"}`}
                        >
                            <td className="py-2 px-4 align-top">{event.date}</td>
                            <td className="py-2 px-4 align-top">{event.event}</td>
                            <td className="py-2 px-4 align-top">{event.time}</td>
                        </motion.tr>
                    ))}
                </motion.tbody>
            </table>
        </div>
    )
}