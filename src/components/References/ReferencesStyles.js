import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledContainer = styled.div`
  background: rgb(25, 25, 36);
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 100% 98%, 0 100%);

  .fade-enter {
    opacity: 0;
    transform: scale(0.96);
    z-index: 1;
  }
  .fade-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: 250ms ease-in;
    transition-property: transform, opacity;
    z-index: 1;
  }
  .fade-exit {
    transform: scale(1);
    opacity: 1;
  }
  .fade-exit-active {
    opacity: 0;
    transform: scale(0.96);
    transition: 200ms ease-in;
    transition-property: transform, opacity;
  }
`;

export const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 45px 0;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const StyledTitle = styled(motion.div)`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin: 20px 0;
  color: ${({ theme }) => theme.white};
  @media (max-width: 768px) {
    margin: 12px 0;
    font-size: 32px;
  }
`;

export const StyledDesc = styled(motion.p)`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.white + 99};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const StyledCardContainer = styled.div`
  position: relative;
  max-width: 700px;
  margin: 10px auto;
`;

export const StyledSpan = styled.span`
  color: ${({ theme }) => theme.white};
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

export const StyledInfo = styled.div`
  width: 650px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  margin-top: 10px;
  padding: 12px 16px;
  justify-content: space-between;
  align-items: center;
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

  &:hover ${StyledSpan} {
    overflow: visible;
    -webkit-line-clamp: unset;
  }

  border: 0.1px solid #58003d;
  box-shadow: rgba(230, 23, 85, 0.15) 0px 4px 24px;
`;

export const StyledName = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.white + 99};
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const StyledRole = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.white + 85};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

export const StyledArrowsWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  & svg {
    display: flex;
    width: 30px;
    pointer-events: none;
  }
`;

export const StyledPrev = styled.div`
  margin: 0 0.5rem;
  width: fit-content;
  background-color: ${({ theme }) => theme.arrow};
  color: ${({ theme }) => theme.white + 85};
  padding: 0.5rem 0.85rem;
  border-radius: 6px;
  cursor: pointer;
`;

export const StyledNext = styled.div`
  margin: 0 0.5rem;
  width: fit-content;
  background-color: ${({ theme }) => theme.arrow};
  color: ${({ theme }) => theme.white + 85};
  padding: 0.5rem 0.85rem;
  border-radius: 6px;
  cursor: pointer;
`;
