import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { mainTheme } from "./utils/Themes";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectDetails from "./components/ProjectDetails";
import ScrollToTop from "./components/ScrollToTopButton";

const StyledBody = styled.div`
  background-color: ${({ theme }) => theme.card_light};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;

const StyledWrapper = styled.div`
  background: linear-gradient(
    90deg,
    rgba(255, 241, 163, 0.79) 0%,
    rgba(88, 0, 61, 100) 95%
  );
  width: 100%;
`;

function App() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  return (
    <ThemeProvider theme={mainTheme}>
      <Router>
        <Navbar />
        <StyledBody>
          <HeroSection />
          <StyledWrapper>
            <Skills />
            <Experience />
          </StyledWrapper>
          <Projects openModal={openModal} setOpenModal={setOpenModal} />
          <StyledWrapper>
            <Education />
            <Contact />
          </StyledWrapper>
          <Footer />
          {openModal.state && (
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          )}
          <ScrollToTop />
        </StyledBody>
      </Router>
    </ThemeProvider>
  );
}

export default App;
