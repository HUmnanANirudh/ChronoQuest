import { motion } from "motion/react"

const Final = () => {
  const redirect = () => {
    window.open("https://unstop.com/hackathons/chronoquest-the-cyber-relic-hunt-bml-munjal-university-bmu-gurgaon-1448307", "_blank")
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative max-w-4xl mx-auto bg-black text-green-300 font-mono text-center p-6 md:p-10 min-h-screen flex flex-col justify-center"
    >
      <div className="space-y-6">
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{once:true}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl md:text-5xl font-bold tracking-wider"
        >
          <span className="block text-green-400 text-3xl md:text-5xl">CHRONOQUEST</span>
          <span className="text-sm md:text-xl text-green-600 mt-2 block">
            TERMINAL ACCESS: FINAL REGISTRATION
          </span>
        </motion.h2>
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{once:true}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="px-6 py-4 bg-red-900/20 border-l-4 border-red-500/20 text-left mb-6 mx-auto"
        >
          <p className="lg:text-lg">
            <span className="text-red-500 font-bold">[SYSTEM ALERT]</span> Last chance to infiltrate and neutralize rogue AI Kronos. Recruit your elite cybernetic team before temporal cascade initiates.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 max-w-xl mx-auto">
          {[
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 mx-auto mb-2">
                  <polyline points="4 17 10 11 4 5"></polyline>
                  <line x1="12" y1="19" x2="20" y2="19"></line>
                </svg>
              ),
              label: "TEAM SIZE",
              value: "4 UNITS"
            },
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 mx-auto mb-2">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
              ),
              label: "DURATION",
              value: "36 CYCLES"
            },
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 mx-auto mb-2">
                  <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                  <rect x="9" y="9" width="6" height="6"></rect>
                  <line x1="9" y1="1" x2="9" y2="4"></line>
                  <line x1="15" y1="1" x2="15" y2="4"></line>
                  <line x1="9" y1="20" x2="9" y2="23"></line>
                  <line x1="15" y1="20" x2="15" y2="23"></line>
                  <line x1="20" y1="9" x2="23" y2="9"></line>
                  <line x1="20" y1="14" x2="23" y2="14"></line>
                  <line x1="1" y1="9" x2="4" y2="9"></line>
                  <line x1="1" y1="14" x2="4" y2="14"></line>
                </svg>
              ),
              label: "THREAT LEVEL",
              value: "CRITICAL"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.1 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + index * 0.2, duration: 0.5 }}
              className="bg-green-900/20 border border-green-600/30 rounded-lg p-4 text-center hover:bg-green-900/40 hover:scale-105 transition-all duration-300"
            >
              {item.icon}
              <div className="text-green-300 w-full">
                <div className="text-xs uppercase tracking-wider text-green-500">{item.label}</div>
                <div className="font-bold text-sm">{item.value}</div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring",duration:0.4,ease:"easeInOut"}}
          onClick={redirect}
          className="relative bg-green-800 text-green-300 px-8 py-3 rounded-full 
          border-2 border-green-600 
          uppercase tracking-wider cursor-pointer hover:bg-green-600 hover:text-green-200 transition-all ease-in-out duration-300"
        >
          <span className="mr-2">»</span>
          Initiate Recruitment Protocol
          <span className="ml-2">«</span>
        </motion.button>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{once:true}}
          className="mt-8 text-green-500 border-t border-green-900 pt-6"
        >
          <p className="text-sm flex flex-col md:flex-row items-center justify-center gap-2">
            <strong className="flex items-center">
              <span className="mr-2"> ✉ </span>
              COMMS CHANNEL:
            </strong>
            <a href="#" className="text-green-300 underline px-2 py-1 rounded">
              sourav.singh.23cse@bmu.edu.in
            </a>
          </p>
          <p className="text-xs mt-4 text-green-300">ENCRYPTION LEVEL: MAXIMUM | ACCESS: AUTHORIZED AGENTS ONLY</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Final;