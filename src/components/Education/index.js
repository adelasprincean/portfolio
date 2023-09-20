import {
  StyledContainer,
  StyledWrapper,
  StyledWaveSvg,
  StyledTitle,
  StyledDesc,
  StyledTimelineSection,
} from "./EducationStyles";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { education, experiences } from "../../data/constants";
import EducationCard from "../Cards/EducationCard";

const Education = () => {
  return (
    <StyledContainer id="education">
      <StyledWaveSvg />
      <StyledWrapper>
        <StyledTitle>Education</StyledTitle>
        <StyledDesc>
          My education has been a journey of self-discovery and growth. My
          educational details are as follows.
        </StyledDesc>
        <StyledTimelineSection>
          <Timeline>
            {education.map((education, index) => (
              <TimelineItem>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <EducationCard education={education} />
                </TimelineContent>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="secondary" />
                  {index !== experiences.length && (
                    <TimelineConnector style={{ background: "#ff44c5" }} />
                  )}
                </TimelineSeparator>
              </TimelineItem>
            ))}
          </Timeline>
        </StyledTimelineSection>
      </StyledWrapper>
    </StyledContainer>
  );
};

export default Education;
