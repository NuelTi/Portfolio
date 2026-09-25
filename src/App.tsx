import { About } from "./components/About";
import { Capabilities } from "./components/Capabilities";
import { Contact } from "./components/Contact";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Frameworks } from "./components/Frameworks";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Process } from "./components/Process";
import { Responsibilities } from "./components/Responsibilities";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Responsibilities />
        <Capabilities />
        <Experience />
        <Frameworks />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
