import { SectionWrapper } from "../../hoc";
import {
  StyledContainer,
  StyledWrapper,
  StyledTitle,
  StyledCardContainer,
} from "./ProjectsStyles";
import ProjectCard from "../Cards/ProjectCards";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";
import { projects } from "../../data/constants";

const Projects = () => {
  return (
    <StyledContainer id="projects">
      <StyledWrapper>
        <StyledTitle variants={textVariant()}>Projects</StyledTitle>
        <StyledCardContainer>
          {projects.map((project, index) => (
            <motion.div
              variants={fadeIn("up", "spring", index * 0.5, 0.75)}
              key={project.id}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </StyledCardContainer>
      </StyledWrapper>
    </StyledContainer>
  );
};

export default SectionWrapper(Projects, "projects");
