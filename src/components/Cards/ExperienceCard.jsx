import React from "react";
import styled from "styled-components";

const StyledDescription = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.white + 99};
  margin-bottom: 10px;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const StyledSpan = styled.span`
  display: flex;
`;

const StyledCard = styled.div`
  width: 650px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 12px 16px;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }
  @media only screen and (max-width: 768px) {
    padding: 10px;
    gap: 8px;
    width: 300px;
  }

  border: 0.1px solid #58003d;
  box-shadow: rgba(230, 23, 85, 0.15) 0px 4px 24px;
`;

const StyledTop = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
`;

const StyledBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledRole = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.white + 99};
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const StyledCompany = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.white + 85};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const StyledDate = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.white + 80};
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const StyledSkills = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
  margin-top: -10px;
`;

const StyledItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const StyledSkill = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.white + 99};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const ExperienceCard = ({ experience }) => {
  return (
    <StyledCard>
      <StyledTop>
        <StyledBody>
          <StyledRole>{experience.role}</StyledRole>
          <StyledCompany>{experience.company}</StyledCompany>
          <StyledDate>{experience.date}</StyledDate>
        </StyledBody>
      </StyledTop>
      <StyledDescription>
        {experience?.desc && <StyledSpan>{experience?.desc}</StyledSpan>}
        {experience?.skills && (
          <>
            <br />
            <StyledSkills>
              <b>Skills:</b>
              <StyledItemWrapper>
                {experience?.skills?.map((skill, index) => (
                  <StyledSkill key={index}>• {skill}</StyledSkill>
                ))}
              </StyledItemWrapper>
            </StyledSkills>
          </>
        )}
      </StyledDescription>
    </StyledCard>
  );
};

export default ExperienceCard;
