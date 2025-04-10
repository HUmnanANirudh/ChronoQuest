interface PrizeItem {
    id: number,
    text: string
    description: string
}
interface Prizes {
    title: string,
    tagline: string,
    content: PrizeItem[],
}
import { motion } from "motion/react"
export const PrizesCard = ({ title, content, tagline }: Prizes) => {
    const redirect = () => {
        window.open("https://unstop.com/hackathons/chronoquest-the-cyber-relic-hunt-bml-munjal-university-bmu-gurgaon-1448307", "_blank")
    }
    return (
        <div className="relative border-2 border-green-500 bg-green-950 w-full font-mono m-4 shadow-md">
            <div className="bg-green-700 absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 text-green-200 font-bold text-center uppercase">
                {title}
            </div>
            <div className="pt-8 pb-4 px-6">
                <div className="text-center mb-6 text-lg lg:text-xl text-green-200 uppercase">
                    {tagline}
                </div>
                <ul className="space-y-4">
                    {content.map((item) => (
                        <li key={item.id} className="bg-green-900 p-4">
                            <div className="text-xl font-semibold">{item.text}</div>
                            <div className="text-sm text-green-200">{item.description}</div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex justify-center pb-4 shadow-black shadow-2xl">
                <motion.button whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.7 }}
                    transition={{ type: "spring", duration: 0.4, ease: "easeInOut" }} onClick={redirect} className="bg-green-500 px-4 py-2 text-green-100 font-bold border-2 border-green-300 cursor-pointer">
                    Claim Rewards
                </motion.button>
            </div>
        </div>
    )
}