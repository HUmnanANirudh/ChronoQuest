import Final from "./Final";
import Footer from "./Footer";
import Hero from "./Hero"
import Intro from "./Intro";
import PhaseOne  from "./PhaseOne";
import {motion} from "motion/react"
const Main = () =>{
    
const pageVariants = {
    initial: { 
        opacity: 0,
    },
    animate: { 
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: "easeOut",
            staggerChildren: 0.3
        }
    },
    exit: { 
        opacity: 0,
        y: 4,
        transition: {
            duration: 0.4,
            ease: "easeIn"
        }
    }
};
    return (
        <motion.div 
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        className="w-full min-h-screen"
    >
        <Hero/>
        <Intro/>
        <PhaseOne/>
        <Final/>
        <Footer/>
        </motion.div>
    )
}
export default Main;