import { motion } from "motion/react";
const Terminal = () => {
  const fullText = `> CHRONOQUEST INITIALIZED...
> The year is undefined. The threat is imminent.
> A rogue AI, Kronos, is rewriting history.
> Your mission: Stop it using ZGVjZW50cmFsaXphdGlvbi4=
> Type 'ENTER' to join...`;
 const ScrollToSection = (url:string) =>{
  window.open(url,"_blamk")
 }
  return (
    <motion.div
      className="bg-black text-green-400 p-4 sm:p-6 md:p-8 border-2 border-green-500 font-mono shadow-lg 
      max-w-lg w-full mx-auto mt-8 sm:mt-12 rounded-md"
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      transition={{ type: "spring", stiffness:70, damping: 20 }}
    >
      <pre className="whitespace-pre-wrap text-xs sm:text-sm md:text-base leading-relaxed">
        {fullText.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{once:true}}
            transition={{ delay: index * 0.01 }}
          >
            {char}
          </motion.span>
        ))}
      </pre>
      <motion.button
        className="bg-green-500 text-black px-3 sm:px-4 py-2 mt-4 font-bold text-sm sm:text-base hover:bg-green-400 
        rounded transition-all duration-150 cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.7 }}
        transition={{type:"spring",duration:0.2,ease:"easeInOut"}}
        onClick={()=>{
          ScrollToSection("https://www.instagram.com/chronoquest_bmu/")
        }}
      >
        ENTER
      </motion.button>
    </motion.div>
  );
};

export default Terminal;