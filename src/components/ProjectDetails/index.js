import { CloseRounded } from "@mui/icons-material";
import { Modal } from "@mui/material";
import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #000000a7;
  display: flex;
  align-items: top;
  justify-content: center;
  overflow-y: scroll;
  transition: all 0.5s ease;
`;

const StyledWrapper = styled.div`
  max-width: 800px;
  width: 100%;
  border-radius: 16px;
  margin: 50px 12px;
  height: min-content;
  background-color: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.white};
  padding: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const StyledTitle = styled.div`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.white};
  margin: 8px 6px 0px 6px;
  @media only screen and (max-width: 600px) {
    font-size: 24px;
    margin: 6px 6px 0px 6px;
  }
`;

const StyledDesc = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.white + 80};
  margin: 8px 6px;
  @media only screen and (max-width: 600px) {
    font-size: 14px;
    margin: 6px 6px;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 12px;
  margin-top: 30px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
`;

const StyledTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 8px 0px;
  @media only screen and (max-width: 600px) {
    margin: 4px 0px;
  }
`;

const StyledTag = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary};
  margin: 4px;
  padding: 4px 8px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.text_primary + 20};
  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
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
  color: ${({ theme }) => theme.white};
  padding: 12px 16px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.bg};
  ${({ dull, theme }) =>
    dull &&
    `
        background-color: ${theme.bgLight};
        color: ${theme.text_primary};
        &:hover {
            background-color: ${({ theme }) => theme.bg + 99};
        }
    `}
  cursor: pointer;
  text-decoration: none;
  transition: all 0.5s ease;
  &:hover {
    background-color: ${({ theme }) => theme.bg + 99};
    color: ${({ theme }) => theme.white};
  }
  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

const index = ({ openModal, setOpenModal }) => {
  const project = openModal?.project;
  return (
    <Modal
      open={true}
      onClose={() => setOpenModal({ state: false, project: null })}
    >
      <StyledContainer>
        <StyledWrapper>
          <CloseRounded
            style={{
              position: "absolute",
              top: "10px",
              right: "20px",
              cursor: "pointer",
            }}
            onClick={() => setOpenModal({ state: false, project: null })}
          />
          <StyledImage src={project?.image} />
          <StyledTitle>{project?.title}</StyledTitle>
          <StyledTags>
            {project?.tags.map((tag) => (
              <StyledTag>{tag}</StyledTag>
            ))}
          </StyledTags>
          <StyledDesc>{project?.description}</StyledDesc>
          <StyledButtonGroup>
            <StyledButton dull href={project?.github} target="new">
              View Code
            </StyledButton>
            <StyledButton href={project?.webapp} target="new">
              View Live App
            </StyledButton>
          </StyledButtonGroup>
        </StyledWrapper>
      </StyledContainer>
    </Modal>
  );
};

export default index;
