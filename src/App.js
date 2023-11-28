import "./App.scss";
import AreYouReady from "./components/areyouready";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Hiring from "./components/hiring";
import Navbar from "./components/navbar";
import Opportunity from "./components/opportunity";
import OurCoreValues from "./components/ourcorevalues";
import OurWorks from "./components/ourworks";
import SolvingProblems from "./components/solvingproblems";
import WhoWeAre from "./components/whoweare";

function App() {
  return (
    <div className="">
      <div className="hero-wrapper relative">
        <Navbar />
        <Hero />
      </div>
      <WhoWeAre/>
      <SolvingProblems/>
      <OurCoreValues/>
      <OurWorks/>
      <Opportunity/>
      <Hiring/>
      <AreYouReady/>
      <Footer/>
    </div>
  );
}

export default App;
