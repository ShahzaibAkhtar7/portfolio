
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Nav/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Work from "./pages/Work";
import About from "./pages/About";
import Hero from "./components/Hero/Hero";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Portfolio from "./pages/Portfolio";
import MyWork from "./components/MyWork/MyWork";
import Reviews from "./components/Reviews/Reviews";
import Intro from "./components/Intro/Intro";
import LetsTalk from "./components/LetsTalk/LetsTalk";
import Theme from "./components/ToggleTheme/Theme";// Adjust the path as necessary

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Theme /> {/* Theme toggle button added here */}
        <Hero />
        <Content />
        <MyWork />
        <Reviews />
        <Intro />
        <LetsTalk />
        <Footer />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/work" element={<Work />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
