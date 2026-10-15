import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  StyledHeroContainer,
  StyledHeroBg,
  StyledHeroInnerContainer,
  StyledHeroLeftContainer,
  StyledHeroRightContainer,
  StyledImg,
  StyledTitle,
  StyledTextLoop,
  StyledSpan,
  StyledSubTitle,
  StyledResumeButton,
  StyledOuterContainer,
  StyledInnerContainer,
  StyledArrowDownIcon,
  StyledHeroButtons,
  StyledShopifyButton,
} from "./HeroStyles";
import HeroImg from "../../assets/images/HeroImg.jpg";
import Typewriter from "typewriter-effect";
import { Bio } from "../../data/constants";
import StarsCanvas from "./../../assets/canvas/Stars";

const HeroSection = () => {
  return (
    <StyledHeroContainer id="about">
      <StyledHeroBg>
        <StarsCanvas />
      </StyledHeroBg>
      <StyledHeroInnerContainer>
        <StyledHeroLeftContainer id="left">
          <StyledTitle>
            Hi, I am <br /> {Bio.name}
          </StyledTitle>
          <StyledTextLoop>
            I am a
            <StyledSpan>
              <Typewriter
                options={{
                  strings: Bio.roles,
                  autoStart: true,
                  loop: true,
                }}
              />
            </StyledSpan>
          </StyledTextLoop>
          <StyledSubTitle>{Bio.description}</StyledSubTitle>
         <StyledHeroButtons>
          <StyledResumeButton href={Bio.resume} target="_blank">
            Check Resume
          </StyledResumeButton>

          <StyledShopifyButton to="/shopify-portfolio">
            View Shopify Portfolio
          </StyledShopifyButton>
        </StyledHeroButtons>
        </StyledHeroLeftContainer>
        <StyledHeroRightContainer id="right">
          <StyledImg src={HeroImg} alt="hero-img" />
        </StyledHeroRightContainer>
      </StyledHeroInnerContainer>
      <StyledOuterContainer>
        <a href="#skills">
          <StyledInnerContainer>
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              <StyledArrowDownIcon />
            </motion.div>
          </StyledInnerContainer>
        </a>
      </StyledOuterContainer>
    </StyledHeroContainer>
  );
};

export default HeroSection;
