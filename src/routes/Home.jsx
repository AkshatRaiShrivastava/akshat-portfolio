import "../App.css";
import Techs from "../components/techs";
import Hero from "../components/hero";
import Contact from "../components/contact";
import Projects from "../components/project";
const Home = () => {
  return (
    <>
      <Hero />
      <Techs />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
