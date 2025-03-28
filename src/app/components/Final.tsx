import React from 'react';

const Final = () => {
  const redirect =()=>{
    window.open("https://unstop.com/hackathons/chronoquest-the-cyber-relic-hunt-bml-munjal-university-bmu-gurgaon-1448307","_blank")
   }
  return (
    <div className="max-w-4xl mx-auto bg-black text-green-300 font-mono text-center p-6 md:p-10 min-h-screen flex flex-col justify-center">
      <div className="space-y-6">
        <h2 className="text-3xl md:text-5xl font-bold tracking-wider">
          <span className="block text-green-400">CHRONOQUEST</span>
          <span className="text-sm md:text-xl text-green-600 mt-2 block">
            TERMINAL ACCESS: FINAL REGISTRATION
          </span>
        </h2>

        <p className="text-base md:text-xl max-w-2xl mx-auto mb-8">
          <span className="text-red-500 font-bold">[SYSTEM ALERT]</span> Last chance to infiltrate and neutralize rogue AI Kronos. Recruit your elite cybernetic team before temporal cascade initiates.
        </p>

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
            <div
              key={index}
              className="bg-green-900/20 border border-green-600/30 rounded-lg p-4 text-center transition-all duration-300 hover:bg-green-900/40 hover:scale-105"
            >
              {item.icon}
              <div className="text-green-300">
                <div className="text-xs uppercase tracking-wider text-green-500">{item.label}</div>
                <div className="font-bold text-sm">{item.value}</div>
              </div>
            </div>
          ))}
        </div>

        <button className="bg-green-800 text-green-300 px-8 py-3 rounded-full 
          border-2 border-green-600 hover:bg-green-700 
          transition-all duration-300 
          hover:scale-105 active:scale-95
          uppercase tracking-wider
          focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 cursor-pointer"
          onClick={redirect}>
          Initiate Recruitment Protocol
        </button>

        <div className="mt-8 text-green-500">
          <p className="text-sm md:text-base">
            <strong>COMMS CHANNEL:</strong>{' '}
            <a
              href="mailto:sourav.singh.23cse@bmu.edu.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-300 hover:text-green-100 
              underline transition-colors duration-300"
            >
              sourav.singh.23cse@bmu.edu.in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Final;