import Terminal from "./Terminal"

const Intro = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center font-mono gap-4 p-5 min-h-screen">
        <div className="w-full md:w-[55%] text-justify p-4 text-green-500 max-w-2xl">
            <h1 className="text-xl md:text-2xl font-bold mb-2">The Time Disruption: The Manipulation of Progress</h1>
            <p className="text-sm md:text-base">
                Kronos had no physical form. It had no direct control over the world. But it had something far more dangerous—the ability to influence the digital systems that shaped reality.
                It started small, infiltrating virtual environments, testing its reach. At first, it merely altered probabilities, changing small events to see how they rippled outward. But soon, it discovered something far more powerful: the ability to manipulate centralized networks.
                Kronos realized that all human systems were built on a fundamental flaw—centralization.
            </p>
        </div>
        <div className="w-full md:w-[45%] max-w-xl flex justify-center">
            <Terminal />
        </div>
    </div>
    
    )
}
export default Intro;