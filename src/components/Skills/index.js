import { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { SectionWrapper } from "../../hoc";
import {
  StyledContainer,
  StyledWrapper,
  StyledTitle,
  StyledDesc,
  StyledSkillsContainer,
  StyledSkill,
  StyledSkillTitle,
  StyledSkillList,
  StyledSkillItem,
  StyledSkillImage,
  StyledWaveSvg,
} from "./SkillsStyles";
import { fadeIn, textVariant } from "../../utils/motion";
import { skills } from "../../data/constants";

const Skills = () => {
  // Initialize animation controls for title, description, and skill cards
  const titleAnimation = useAnimation();
  const descAnimation = useAnimation();
  const cardsAnimation = useAnimation();

  useEffect(() => {
    // Function to trigger animations when the component mounts
    const animateElements = async () => {
      await titleAnimation.start({ opacity: 1, x: 0 }); // Animate title
      await descAnimation.start({ opacity: 1, x: 0 }); // Animate description
      await cardsAnimation.start({ opacity: 1, x: 0 }); // Animate skill cards
    };

    animateElements();
  }, [cardsAnimation, descAnimation, titleAnimation]); // Run this effect only on component mount

  return (
    <StyledContainer id="skills">
      <StyledWaveSvg />
      <StyledWrapper>
        <StyledTitle variants={textVariant()}>Skills</StyledTitle>
        <StyledDesc variants={fadeIn("", "", 0.1, 1)}>
          Here are some of my skills on which I have been working on for the
          past 2 years.
        </StyledDesc>
        <StyledSkillsContainer>
          {skills.map((skill, index) => (
            <StyledSkill
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={cardsAnimation}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            >
              <StyledSkillTitle>{skill.title}</StyledSkillTitle>
              <StyledSkillList>
                {skill.skills.map((item, itemIndex) => (
                  <StyledSkillItem key={itemIndex}>
                    <StyledSkillImage src={item.image} />
                    {item.name}
                  </StyledSkillItem>
                ))}
              </StyledSkillList>
            </StyledSkill>
          ))}
        </StyledSkillsContainer>
      </StyledWrapper>
    </StyledContainer>
  );
};

export default SectionWrapper(Skills, "skills");
