import Hero from "./sections/Hero.jsx";
import Projects from "./sections/Projects.jsx";
import NavBar from "./components/NavBar.jsx";
import LogoSection from "./sections/LogoSection.jsx";
import FeatureCards from "./sections/FeatureCards.jsx";
import ExperienceSection from "./sections/ExperienceSection.jsx";

const App = () => {
    return (
       <>
           <NavBar />
           <Hero />
           <Projects />
           {/*/!*<LogoSection />*!/ // Will show once I get my dream jobs/internships*/}
           <FeatureCards />
           <ExperienceSection />
       </>
    )
}
export default App
