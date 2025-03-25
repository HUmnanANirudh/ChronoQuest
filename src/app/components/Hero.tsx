import {motion} from "motion/react"
const Hero = () => {
    return (
        <div className="realtive min-h-screen flex justify-center items-center">
            <video className="absolute inset-0 w-full h-full object-cover z-0"
                autoPlay
                loop
                muted
                preload="auto"
                playsInline>
                <source src="https://static.videezy.com/system/resources/previews/000/043/225/original/4K_09.mp4" type="video/mp4" />
            </video>
            <motion.div className={`pressStart2p.className flex flex-col justify-center items-center gap-2 z-10`}
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{ease:"easeIn",duration:1}}
            exit={{opacity:0}}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold py-2 tracking-wide">ChronoQuest</h1>
            <p className="text-sm sm:text-lg md:text-xl lg:text-2xl font-light max-w-xl text-center">Not just a glitch, but an anomaly in time!</p>
            </motion.div>
        </div>
    )
}
export default Hero;