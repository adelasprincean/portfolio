import { SectionWrapper } from "../../hoc";
import {
  StyledContainer,
  StyledWrapper,
  StyledTitle,
  StyledDesc,
  StyledCardContainer,
} from "./ProjectsStyles";
import ProjectCard from "../Cards/ProjectCards";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";
import { projects } from "../../data/constants";

const Projects = ({ openModal, setOpenModal }) => {
  return (
    <StyledContainer id="projects">
      <StyledWrapper>
        <StyledTitle variants={textVariant()}>Projects</StyledTitle>
        <StyledCardContainer>
          {/* {projects.map((project, index) => (
            <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            </motion.div>
          ))} */}
          <StyledDesc>Coming soon...</StyledDesc>
        </StyledCardContainer>
      </StyledWrapper>
    </StyledContainer>
  );
};

export default SectionWrapper(Projects, "projects");
