import styled, { ThemeProvider } from "styled-components";
import { mainTheme } from "./utils/Themes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import References from "./components/References";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTopButton";

import ShopifyPortfolio from "./pages/ShopifyPortfolio";

const StyledBody = styled.div`
  background-color: ${({ theme }) => theme.card_light};
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
`;

const StyledWrapper = styled.div`
  background: linear-gradient(
    90deg,
    rgba(255, 241, 163, 0.79) 0%,
    rgba(88, 0, 61, 1) 95%
  );
  width: 100%;
`;

const Home = () => {
  return (
    <>
      <Navbar />

      <StyledBody>
        <HeroSection />

        <StyledWrapper>
          <Skills />
          <Experience />
        </StyledWrapper>

        <Projects />
        <References />

        <StyledWrapper>
          <Education />
          <Contact />
        </StyledWrapper>

        <Footer />
        <ScrollToTop />
      </StyledBody>
    </>
  );
};

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/shopify-portfolio"
            element={<ShopifyPortfolio />}
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;