const PhaseTwo = () => {
  return (
    <section id="phase2" className="relative">
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
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle, rgba(34, 197, 94, 0.4) 10%, transparent 50%)",
        }}
      ></div>

      
      </section>
  );
};

export default PhaseTwo;
