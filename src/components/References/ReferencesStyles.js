import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledContainer = styled.div`
  background: rgb(25, 25, 36);
  display: flex;
  flex-direction: column;
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
  max-width: 1350px;
  margin: 0 auto;
  padding: 45px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (max-width: 960px) {
    padding: 30px 0;
  }
`;

export const StyledTitle = styled(motion.h2)`
  font-size: 42px;
  font-weight: 600;
  color: ${({ theme }) => theme.white};
  margin: 20px 0;

  @media (max-width: 768px) {
    font-size: 32px;
    margin: 12px 0;
  }
`;

export const StyledDesc = styled(motion.p)`
  font-size: 18px;
  max-width: 600px;
  color: ${({ theme }) => theme.white + 99};
  margin: 10px 0;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const StyledCardContainer = styled(motion.div)`
  max-width: 700px;
  margin: 10px auto;
  text-align: center;
`;

export const StyledArrowsWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    width: 30px;
  }
`;

export const StyledButtonArrow = styled.div`
  margin: 0 0.5rem;
  padding: 0.5rem 0.85rem;
  background-color: ${({ theme }) => theme.arrow};
  color: ${({ theme }) => theme.white + 85};
  border-radius: 6px;
  cursor: pointer;
`;
