"use client"
const PhaseOne = () => {
  return (
    <section id="#Tournment" className="relative">
     <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(34, 197, 94, 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(34, 197, 94, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      ></div>

      {/* Radial Glow Effect */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle, rgba(34, 197, 94, 0.4) 10%, transparent 50%)",
        }}
      ></div>
      <div className="flex flex-col items-center justify-center font-mono p-20 ">
        <h1 className="text-4xl">⚔️ PHASE 1: The ChronoQuest Tournament</h1> 
        <div className="flex justify-center items-center mt-40">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-20">
            <div>Algorithmic Corruption</div>
            <div>IoT Manipulation</div>
            <div>Cybersecurity Breach</div>
            <div>AI Deception</div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default PhaseOne