import { motion } from "motion/react"
import { PrizesCard } from "./PrizeCards"
const phase1 = [
    { id: 1, text: "CHAMPION BADGE", description: "Limited edition digital badge" },
    { id: 2, text: "TECH GOODIES", description: "Exclusive hardware and gadgets" },
    { id: 3, text: "VIP ACCESS", description: "Special access to Phase 2 rewards" },
    { id: 4, text: "SPONSOR MERCH", description: "Branded merchandise from sponsors" },
];
const phase2 = [
    { id: 1, text: "₹1,00,000 PRIZE POOL", description: "Divided between winning teams" },
    { id: 2, text: "BEST INNOVATION", description: "₹50,000 for the most innovative solution" },
    { id: 3, text: "BEST TECH", description: "₹30,000 for the best technical implementation" },
    { id: 4, text: "BEST RESEARCH", description: "₹20,000 for best research-based solution" },
];

export const Prizes = () => {
    const redirect = () => {
        window.open("https://unstop.com/hackathons/chronoquest-the-cyber-relic-hunt-bml-munjal-university-bmu-gurgaon-1448307", "_blank")
    }
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="bg-black relative flex flex-col items-center font-mono border-b-2 border-green-700/60 py-10 px-4"
        >
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{once:true}}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center font-mono my-10 text-center"
            >
                <h1 className="text-3xl sm:text-4xl uppercase font-bold text-green-300">
                    Reward Vault
                </h1>
                <div className="flex items-center gap-2 mt-2">
                    <div className="w-16 sm:w-20 h-px bg-green-400"></div>
                    <div className="w-3 sm:w-4 h-3 sm:h-4 rounded-full animate-pulse bg-green-400"></div>
                    <div className="w-16 sm:w-20 h-px bg-green-400"></div>
                </div>
            </motion.div>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-6">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{once:true}}
                    transition={{ duration: 0.6 }}
                >
                    <PrizesCard title="Phase 1" tagline="Prove your mastery" content={phase1} />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{once:true}}
                    transition={{ duration: 0.6 }}
                >
                    <PrizesCard title="Phase 2" tagline="Ultimate Showdown" content={phase2} />
                </motion.div>
            </div>
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{once:true}}
                transition={{ duration: 0.8 }}
                className="relative bg-green-900 p-6 font-mono text-green-300 my-10 w-full max-w-3xl mx-auto"
            >
                <div className="absolute top-0 left-0 w-10 h-10 border-t-4 border-l-4 border-green-400"></div>
                <div className="absolute top-0 right-0 w-10 h-10 border-t-4 border-r-4 border-green-400"></div>
                <div className="absolute bottom-0 left-0 w-10 h-10 border-b-4 border-l-4 border-green-400"></div>
                <div className="absolute bottom-0 right-0 w-10 h-10 border-b-4 border-r-4 border-green-400"></div>

                <div className="flex flex-col items-center space-y-2 text-center px-2">
                    <h2 className="text-lg sm:text-xl uppercase tracking-wider text-green-400">
                        Top Prizes
                    </h2>
                    <h1 className="text-3xl sm:text-4xl font-bold text-green-200">₹1,00,000</h1>
                    <h3 className="text-xs sm:text-sm text-green-300 max-w-lg">
                        Divided between winning teams with most innovative ideas
                    </h3>

                    <div className="flex flex-wrap justify-center items-center gap-6 mt-6">
                        {[
                            { amt: "₹50,000", title: "Best Innovation" },
                            { amt: "₹30,000", title: "Best Tech" },
                            { amt: "₹20,000", title: "Best Research" },
                        ].map((prize, i) => (
                            <div key={i} className="flex flex-col items-center text-center">
                                <h1 className="text-xl sm:text-2xl font-bold text-green-200">{prize.amt}</h1>
                                <h3 className="text-xs sm:text-sm uppercase tracking-wide text-green-300">{prize.title}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{once:true}}
                transition={{ duration: 0.7 }}
                className="flex flex-col justify-center items-center text-center space-y-3 px-2"
            >
                <h1 className="uppercase text-green-400 text-lg sm:text-2xl">
                    Are you ready to rewrite history?
                </h1>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.7 }}
                    transition={{ type: "spring", duration: 0.4, ease: "easeInOut" }}
                    onClick={redirect}
                    className="bg-green-500 px-4 py-2 text-green-100 font-bold border-2 border-green-300 mb-4 cursor-pointer text-sm sm:text-base"
                >
                    Claim Rewards
                </motion.button>
            </motion.div>
        </motion.div>
    );
};