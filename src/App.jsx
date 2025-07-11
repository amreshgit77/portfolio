import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import CodingProfiles from "./Components/Home/CodingProfiles"; // ✅ NEW

function App() {
  return (
    <div
      className="
        min-h-screen
        w-full
        overflow-x-hidden
        bg-gradient-to-br
        from-[#3f2a1c]
        via-[#5c4033]
        to-[#4b3220]
        text-white
        shadow-inner
        rounded-b-3xl
        scroll-smooth
      "
      style={{ scrollBehavior: "smooth" }}
    >
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 md:px-12 py-10 md:py-16 space-y-20">
        <Home />
        <CodingProfiles /> {/* ✅ Moved just after intro */}
        <About />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
