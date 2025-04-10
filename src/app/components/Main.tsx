import Final from "./Final";
import Footer from "./Footer";
import Hero from "./Hero"
import Intro from "./Intro";
import PhaseOne from "./PhaseOne";
import { Prizes } from "./Prizes";
import { Timeline } from "./Timeline";
const Main = () => {
    return (
        <div>
            <Hero />
            <Intro />
            <Prizes/>
            <PhaseOne />
            <Timeline/>
            <Final />
            <Footer />
            
        </div>
    )
}
export default Main;