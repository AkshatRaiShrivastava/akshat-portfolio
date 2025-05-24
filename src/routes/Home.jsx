import "../App.css";
import Techs from "../components/techs";
import Hero from "../components/hero";
import Contact from "../components/contact";
import Projects from "../components/project";
import VisitorCounter from "../components/VisitorCounter";

const Home = () => {
  return (
    <>
      <Hero />
      <Techs />
      <Projects />
      <VisitorCounter />
      <Contact />
    </>
  );
};

export default Home;
