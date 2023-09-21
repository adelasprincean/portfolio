import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { motion } from "framer-motion";
import ExperienceCard from "../Cards/ExperienceCard";
import {
  StyledContainer,
  StyledWaveSvg,
  StyledWrapper,
  StyledTitle,
  StyledDesc,
  StyledTimeLine,
} from "./ExperienceStyles";
import { experiences } from "../../data/constants";
import { SectionWrapper } from "../../hoc";
import { textVariant, fadeIn } from "../../utils/motion";

const Experience = () => {
  return (
    <StyledContainer id="experience">
      <StyledWrapper>
        <StyledTitle variants={textVariant()}>Experience</StyledTitle>
        <StyledDesc variants={textVariant()}>My work experience</StyledDesc>
        <StyledTimeLine>
          <Timeline>
            {experiences.map((experience, index) => (
              <motion.div
                variants={fadeIn("left", "spring", index * 0.5, 0.75)}
                key={experience.id}
              >
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot variant="outlined" color="secondary" />
                    {index !== experiences.length - 1 && (
                      <TimelineConnector style={{ background: "#ff44c5" }} />
                    )}
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <ExperienceCard experience={experience} />
                  </TimelineContent>
                </TimelineItem>
              </motion.div>
            ))}
          </Timeline>
        </StyledTimeLine>
      </StyledWrapper>
      <StyledWaveSvg />
    </StyledContainer>
  );
};

export default SectionWrapper(Experience, "experience");
