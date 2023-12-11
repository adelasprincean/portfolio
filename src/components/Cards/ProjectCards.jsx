import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  width: 330px;
  height: 430px;
  background-color: ${({ theme }) => theme.card};
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0 0 12px 4px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  padding: 26px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 50px 4px rgba(0, 0, 0, 0.6);
    filter: brightness(1.1);
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: 180px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 10px;
  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
`;

const StyledTags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
`;

const StyledTag = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary};
  background-color: ${({ theme }) => theme.text_primary + 15};
  padding: 2px 8px;
  border-radius: 10px;
`;

const StyledDetails = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0px;
  padding: 0px 2px;
`;
const StyledTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.white};
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StyledDescription = styled.div`
  font-weight: 400;
  color: ${({ theme }) => theme.white + 99};
  overflow: hidden;
  margin-top: 8px;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const StyledButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 12px 0px;
  gap: 12px;
`;

const StyledButton = styled.a`
  width: 100%;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  padding: 12px 16px;
  border: 1.8px solid ${({ theme }) => theme.text_primary};
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.5s ease;
  &:hover {
    background: ${({ theme }) => theme.bg};
    border: 1.8px solid ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.white};
  }
  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

const ProjectCards = ({ project }) => {
  return (
    <StyledCard>
      <StyledImage src={project.image} />
      <StyledTags>
        {project.tags?.map((tag, index) => (
          <StyledTag key={tag}>{tag}</StyledTag>
        ))}
      </StyledTags>
      <StyledDetails>
        <StyledTitle>{project.title}</StyledTitle>
        <StyledDescription>{project.description}</StyledDescription>
      </StyledDetails>
      <StyledButtonGroup>
        <StyledButton href={project?.github} target="new">
          View Code
        </StyledButton>
      </StyledButtonGroup>
    </StyledCard>
  );
};

export default ProjectCards;
