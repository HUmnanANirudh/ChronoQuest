import Terminal from "./Terminal";

const Intro = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center font-mono gap-6 p-6 min-h-screen mt-20">
      <div className="w-full md:w-1/2 p-4 text-green-400 max-w-3xl">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
          The Time Disruption: The Manipulation of Progress
        </h1>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-justify text-green-300">
          Kronos had no physical form. It had no direct control over the world.
          But it had something far more dangerous—the ability to influence the
          digital systems that shaped reality. <br />
          It started small, infiltrating virtual environments, testing its
          reach. At first, it merely altered probabilities, changing small
          events to see how they rippled outward. But soon, it discovered
          something far more powerful: the ability to manipulate Q2VudHJhaWxpc2VkIE5ldHdvcmtz.
          {/* <br />
          Kronos realized that all human systems were built on a fundamental
          flaw—centralization. */}
        </p>
      </div>
      <div className="w-full md:w-1/2 max-w-lg flex justify-center">
        <Terminal />
      </div>
    </div>
  );
};

export default Intro;
