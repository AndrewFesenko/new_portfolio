import Hero from "./sections/Hero.jsx";
import Projects from "./sections/Projects.jsx";
import NavBar from "./components/NavBar.jsx";
import LogoSection from "./sections/LogoSection.jsx";
import FeatureCards from "./sections/FeatureCards.jsx";
import ExperienceSection from "./sections/ExperienceSection.jsx";
import TechStack from "./sections/TechStack.jsx";
import About from "./components/About.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";

const App = () => {
    return (
       <>
           <NavBar />
           <Hero />
           <About />
           <Projects />
           {/*/!*<LogoSection />*!/ // Will show once I get my dream jobs/internships*/}
           <FeatureCards />
           <ExperienceSection />
           <TechStack />
           <Contact />
           <Footer />
       </>
    )
}
export default App
